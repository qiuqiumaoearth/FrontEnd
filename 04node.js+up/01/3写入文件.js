const fs = require('fs');
fs.writeFile('./3.txt','这是2026年的小年,2月11日',function (err) {
  if (err) {
    console.log('写入失败');
  } else {
    console.log('写入成功,写入内容是:');
    fs.readFile('./3.txt','utf8',function (err,result) {
      console.log(result);
    })
  }
})