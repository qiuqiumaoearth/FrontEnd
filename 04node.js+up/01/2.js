const fs = require('fs');
fs.readFile('./2.txt','utf8',function (err,datastr) {
  console.log(err);
  console.log('---');
  console.log(datastr);
})