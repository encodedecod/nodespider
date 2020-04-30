const fs =require('fs');
const cheerio=require('cheerio');
const http=require('http')
const zlib=require('zlib')
var options='http://www.balingtxt.com/txtml_15848.html';
    http.get(options,res=>{
    //  console.log(res);
     
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
    //   console.log(html);
      let result=[]
      let $=cheerio.load(html);
      $('div#yulan').find('[rel=nofollow]').each(i => {
        var map={};
        map.links=$('[rel=nofollow]').eq(i).attr('href');
        map.text=$('[rel=nofollow]').eq(i).text();
        result.push(map)
      })
      console.log(result);
      let dataStr = JSON.stringify(result).trim();
      fs.appendFileSync('pages.txt',dataStr);

        
    })

})