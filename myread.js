// book_content
const fs =require('fs');
const cheerio=require('cheerio');
const request=require('request');
const iconv=require('iconv-lite');
const http=require('http')
const zlib=require('zlib')
request('http://www.xqiushu.com/t/15848/22796154.html',(error,res,body)=>{
    if(!error&&res.statusCode==200){
    
    //   var html=res.body
    //   console.log(html);
      
    //   let buffer = new Buffer(html).toString('base64')
      // var myhtml=iconv.decode(Buffer(html),'gb2312')
    //   console.log(html);
    //   var writerStream = fs.createWriteStream('output.txt');

    //   使用 utf8 编码写入数据
    //   writerStream.write(html,'UTF8');
  
    
      // fs.appendFileSync('baling.gz',body);
      
    //   let $=cheerio.load(html);
    //   var content=$('div.book_content').text()
    //   console.log(content);
      
    //   fs.appendFileSync('baling.txt',content)
      
    }
})
// let url='http://www.balingtxt.com/'
// http.get(url, function (res) {
//     let chunks = [],
//         size = 0;
       
//     res.on('data', function (chunk) {
//         chunks.push(chunk);
//         size += chunk.length;
    
               
//     });

//     res.on('end', function () {
        
//         // var myhtml=iconv.decode(Buffer.concat(chunks, size),'gb2312')
//         var myhtml=iconv.decode(Buffer.concat(chunks, size),'utf8')
        
//         //创建html并写入html数据
//         fs.appendFileSync('bailing.html',myhtml)
       
//         let htmltotal = myhtml.toString();
//         console.log(htmltotal);
        
//     });
// })