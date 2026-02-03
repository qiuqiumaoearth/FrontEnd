import { cheackPhone, cheackCode } from '../utils/check.js';

console.log(cheackPhone('13863956723'));
console.log(cheackCode('1234'));


document.querySelector('.btn').addEventListener('click', () => {
  const phone = document.querySelector('.login-form [name=mobile]').value
  const code = document.querySelector('.login-form [name=code]').value

  if (!cheackPhone(phone)) {
    console.log('手机号必须是11位');
    return
  }

  if (!cheackCode(code)) {
    console.log('验证码必须是6位');
    return
  }

  console.log('提交到服务器登录......');


})

//准备css代码,并引入到js中
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.less'
import './index.css'


