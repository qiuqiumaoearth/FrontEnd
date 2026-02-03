const fs = require('fs')

console.log(__dirname); //绝对地址

fs.writeFile('D:/xuexi/FrontEnd/03ajax+node.js+webpack+git/02node.js+webpack/01node.js/test.txt', 'hello', (err) => {
  if (err) console.log(err);
  else console.log('成功写入');
})


fs.readFile('D:/xuexi/FrontEnd/03ajax+node.js+webpack+git/02node.js+webpack/01node.js/test.txt', (err, data) => {
  if (err) console.log(err)

  //data是buffer 16进制数据流对象
  else console.log(data.toString()) // 把 Buffer 数据流转成字符串类型
})