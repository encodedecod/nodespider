const fs=require('fs')
// filePath为文件路径
const iconv=require('iconv-lite')
const stream = fs.createReadStream('biquge.html', { encoding: 'binary' });
let data = '';
stream.on('error', err => {
  console.error('读取行错误');
  console.error(err);
});
stream.on('data', chunk => {
  data += chunk;
});
stream.on('end', () => {
  const buf = Buffer.from(data, 'binary');
  const str =iconv.decode(buf,'gbk')// 得到正常的字符串，没有乱码
console.log(str);

});
