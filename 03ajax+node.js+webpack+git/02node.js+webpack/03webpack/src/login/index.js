import { cheackPhone, cheackCode } from '../utils/check.js';

console.log(cheackPhone('13863956723'));
console.log(cheackCode('1234'));


// document.querySelector('.btn').addEventListener('click', () => {
//   const phone = document.querySelector('.login-form [name=mobile]').value
//   const code = document.querySelector('.login-form [name=code]').value

//   if (!cheackPhone(phone)) {
//     console.log('手机号必须是11位');
//     return
//   }

//   if (!cheackCode(code)) {
//     console.log('验证码必须是6位');
//     return
//   }

//   console.log('提交到服务器登录......');


// })

//准备css代码,并引入到js中
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.less'
import './index.css'

// 图片打包
import imgObj from './assets/logo.png'
const theImg = document.createElement('img')
theImg.src = imgObj
document.querySelector('.login-wrap').appendChild(theImg)


//完成登录功能
import myAxios from '../utils/request.js'
import { myAlert } from '../utils/alert.js';

document.querySelector('.btn').addEventListener('click', () => {
  const phone = document.querySelector('.login-form [name=mobile]').value
  const code = document.querySelector('.login-form [name=code]').value

  if (!cheackPhone(phone)) {
    myAlert(false, '手机号必须是11位')
    console.log('手机号必须是11位');

    return
  }

  if (!cheackCode(code)) {
    myAlert(false, '验证码必须是6位')
    console.log('验证码必须是6位');
    return
  }

  console.log('提交到服务器登录......');

  myAxios({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile: phone,
      code: code,

    }
  }).then(() => {
    myAlert(true, '登录成功')
  }).catch((err) => {
    myAlert(false, err.response.data.message)
  });


})


//配置开发服务环境webpack-dev-serve
//热更新
console.log('打印,你好');


