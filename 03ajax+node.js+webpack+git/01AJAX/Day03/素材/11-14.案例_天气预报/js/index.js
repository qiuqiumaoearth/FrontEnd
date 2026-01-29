/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */

function render(obj, doc) {
  Object.entries(obj).forEach(([key, value]) => {
    const targetElement = doc.querySelector(`.${key}`)
    if (targetElement) {
      targetElement.textContent = value || ''
    }
  })
}


function getWeather(cityCode) {
  myAxios({
    url: 'http://hmajax.itheima.net/api/weather',
    params: {
      city: cityCode
    }
  }).then((result) => {
    // console.log(result.data);
    const wObj = result.data
    //数据展示到页面中
    render(wObj, document)

    //当天天气
    const twObj = wObj.todayWeather
    // console.log(twObj);
    const todayWeather = document.querySelector('.today-weather')
    render(twObj, todayWeather)

    //7日内天气预报
    const weekWrap = document.querySelectorAll('.item')
    // console.log(weekWrap);
    const dayForecast = wObj.dayForecast
    // console.log(dayForecast);
    for (let i = 0; i < weekWrap.length; i++) {
      render(dayForecast[i], weekWrap[i])
    }


  }).catch((err) => {
    console.log(err);
  });
}

//北京市城市编码：110100
getWeather('110100')

//搜索城市列表
document.querySelector('.search-city').addEventListener('input', e => {
  myAxios({
    url: 'http://hmajax.itheima.net/api/weather/city',
    params: {
      city: e.target.value
    }
  }).then((result) => {
    console.log(result);
    const liStr = result.data.map(item => {
      return `<li class="city-item" data-code ="${item.code}">${item.name}</li>`
    }).join('')
    console.log(liStr);
    document.querySelector('.search-list').innerHTML = liStr
  }).catch((err) => {
    console.log(err);
  });
})

//展示城市天气
document.querySelector('.search-list').addEventListener('click', e => {
  if (e.target.classList.contains('city-item')) {
    const cityCode = e.target.dataset.code
    // console.log(cityCode);
    getWeather(cityCode)
  }
})