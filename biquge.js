const https = require('https');
const cheerio=require('cheerio');
const fs=require('fs')
const iconv=require('iconv-lite')
// let url='http://toutiao.sogou.com/ajax/loc/beijing.html?t=1588137085813'
 let url='https://www.52bqg.com/book_127354/49479963.html'
// let url='https://www.58pic.com/'
https.get(url, function (res) {
    let chunks = [],
        size = 0;
        // var html='';
      
   
    // res.setEncoding('utf8');
    res.on('data', function (chunk) {
        chunks.push(chunk);
        size += chunk.length;
        // html+=chunk;   
               
    });

    res.on('end', function () {
        // var $=cheerio.load(html)
        
        // console.log(iconv.decode(html,'gbk'));
       
        // var myhtml=iconv.decode(Buffer.concat(chunks, size),'gb2312')
        // var myhtml=iconv.decode(Buffer.concat(chunks, size),'gbk')
        
        //创建html并写入html数据
        fs.appendFileSync('biquge.html',myhtml)
        // console.log('数据包传输完毕');
        // let data = Buffer.concat(chunks, size);
        // console.log(data);
        // let html = data.toString();
        // console.log(html);
        
    });
})
