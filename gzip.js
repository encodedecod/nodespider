const fs =require('fs');
const cheerio=require('cheerio');
// const request=require('request');
// const iconv=require('iconv-lite');
const http=require('http')
const zlib=require('zlib')
var options='http://www.xqiushu.com/t/15848/22796154.html';
// var req =
//  http.request(options, function (res) {
    http.get(options,res=>{
     console.log(res);
     
    var html = '', output;
    if (res.headers['content-encoding'] == 'gzip') {
        var gzip = zlib.createGunzip();
        res.pipe(gzip);
        output = gzip;
    } else {
        output = res;
    }
    output.on('data', (data) => {
        data = data.toString('utf-8');
        html += data;
    });
    output.on('end', () => {
      html = unescape(html.replace(/\\u/g, "%u"));  // 将unicode编码转中文
      console.log(html);
      let $=cheerio.load(html);
      var content=$('div.book_content').text()
      console.log(content);
      fs.appendFileSync('baling.txt',content)
        // const stocksArr = html.split('group_id": "');

        // var groupIds = [];
        // for (var i = 1; i < stocksArr.length; i++) {
        //     groupIds.push(stocksArr[i].split('", "middle')[0]);
        // }
        // if (groupIds.length > 0) {
        //     groupIds.map((item, i) => {
        //         // comment(item);  // 评论
        //         // praise(item);
        //     })
        // }
    })

})