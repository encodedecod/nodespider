const https = require('https');
const cheerio=require('cheerio');
const fs=require('fs')
const iconv=require('iconv-lite')

let url='https://www.58pic.com/'
https.get(url, function (res) {
    let chunks = [],
        size = 0;
       
    res.on('data', function (chunk) {
        chunks.push(chunk);
        size += chunk.length;
    
               
    });

    res.on('end', function () {
        
        // var myhtml=iconv.decode(Buffer.concat(chunks, size),'gb2312')
        var myhtml=iconv.decode(Buffer.concat(chunks, size),'gbk')
        
        //创建html并写入html数据
        fs.appendFileSync('pic.html',myhtml)
       
        let htmltotal = myhtml.toString();
        console.log(htmltotal);
        
    });
})