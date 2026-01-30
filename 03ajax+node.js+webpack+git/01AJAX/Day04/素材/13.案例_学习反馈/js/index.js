/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */
//切换省份,设置城市下拉菜单数据,清空城市下拉菜单


axios({
  url: 'http://hmajax.itheima.net/api/province'
}).then((result) => {
  console.log(result);
  const optionStr = result.data.list.map(pname => `<option value="${pname}">${pname}</option>`).join('')
  document.querySelector('.province').innerHTML = `<option value="">省份</option>` + optionStr

}).catch((err) => {

});

//城市
document.querySelector('.province').addEventListener('change', async e => {
  //获取省份名字
  console.log(e.target.value);
  const result = await axios({
    url: 'http://hmajax.itheima.net/api/city',
    params: {
      pname: e.target.value
    }
  })
  console.log(result);
  const optionStr = result.data.list.map(cname => `<option value="${cname}">${cname}</option>`).join('')
  document.querySelector('.city').innerHTML = `<option value="">城市</option>` + optionStr

  document.querySelector('.area').innerHTML = `<option value="">地区</option>`
})

//地区
document.querySelector('.city').addEventListener('change', async e => {
  //获取城市名字
  console.log(e.target.value);
  const result = await axios({
    url: 'http://hmajax.itheima.net/api/area',
    params: {
      pname: document.querySelector('.province').value,
      cname: e.target.value
    }
  })
  console.log('地区', result);
  const optionStr = result.data.list.map(area => `<option value="${area}">${area}</option>`).join('')
  document.querySelector('.area').innerHTML = `<option value="">地区</option>` + optionStr
})

//获取表单数据
document.querySelector('.submit').addEventListener('click', async () => {
  const form = document.querySelector('.info-form')
  const data = serialize(form, { hash: true, empty: true })
  console.log(data);

  try {
    const result = await axios({
      url: 'http://hmajax.itheima.net/api/feedback',
      method: 'POST',
      data
    })
    console.log(result.data.message);
    alert(result.data.message)
  } catch (error) {
    alert(error.response.data.message)
  }

})