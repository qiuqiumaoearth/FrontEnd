/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */

// 1.1 获取用户的数据

const creator = '李四'

axios({
  url: 'http://hmajax.itheima.net/api/settings',
  params: {
    creator
  }
}).then(result => {
  // console.log(result);
  const userObj = result.data.data
  console.log(userObj);
  //{avatar: 'http://hmajax.itheima.net/avatar/avatar1.png', nickname: 'itheima', email: 'itheima@itcast.cn', desc: '我是张三', gender: 0}
  Object.keys(userObj).forEach(key => {
    if (key === 'avatar') {
      document.querySelector('.prew').src = userObj[key]
    } else if (key === 'gender') {
      const gRadioList = document.querySelectorAll('.gender')
      //console.log(gRadioList); [男,女]
      //获取性别数字
      const gNum = userObj[key]
      console.log(gNum);
      //通过性别数字,作为下标,找到对应性别单选框
      // console.log(gRadioList[gNum]);
      gRadioList[gNum].checked = true

    } else {
      document.querySelector(`.${key}`).value = userObj[key]
    }
  })

})

//修改头像
document.querySelector('.upload').addEventListener('change', e => {
  //获取图片文件
  const fd = new FormData()
  fd.append('img', e.target.files[0])
  fd.append('creator', creator)

  axios({
    url: 'http://hmajax.itheima.net/api/avatar',
    method: 'PUT',
    data: fd
  }).then(result => {
    // console.log(result.data.message);
    const imgUrl = result.data.data.avatar
    document.querySelector('.prew').src = imgUrl
  })
})

//提交信息修改
document.querySelector('.submit').addEventListener('click', e => {
  //收集表单信息
  const userForm = document.querySelector('.user-form')
  const userObj = serialize(userForm, { hash: true, empty: true })
  userObj.creator = creator
  userObj.gender = +userObj.gender
  console.log('信息修改后:', userObj);

  //提交到服务器
  axios({
    url: 'http://hmajax.itheima.net/api/settings',
    method: 'PUT',
    data: userObj
  }).then(result => {
    console.log(result.data.message);
    // 创建toast对象
    const toastDom = document.querySelector('.my-toast')
    const toast = new bootstrap.Toast(toastDom)

    //显示提示框
    toast.show()
  })

})

//提示框
