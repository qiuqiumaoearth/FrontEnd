const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
  if (err) console.log(err);
  else {
    const htmlStr = data.toString()
    //正则替换字符串
    const resultStr = htmlStr.replace(/[\r\n]/g, '')
    console.log(resultStr);

    //写入到新的html文件中
    fs.writeFile(path.join(__dirname, 'dist/index.html'), resultStr, (err, data) => {
      if (err) console.log(err);
      else {
        console.log('写入成功');
      }
    })
  }
})
