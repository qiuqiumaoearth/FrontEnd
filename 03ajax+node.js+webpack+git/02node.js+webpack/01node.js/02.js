const fs = require('fs')

fs.writeFile('D:/xuexi/FrontEnd/03ajax+node.js+webpack+git/02node.js+webpack/01node.js/test.txt', 'hello', (err) => {
  if (err) console.log(err);
  else console.log('成功写入');
})


fs.readF