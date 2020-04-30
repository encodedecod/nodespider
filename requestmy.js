const https = require('https');
const cheerio=require('cheerio');
const fs=require('fs')
const request=require('request')
request('https://www.ivsky.com/tupian/ziranfengguang/',(error,res,body)=>{
    if(!error&&res.statusCode==200){
   console.log(body);
   fs.appendFileSync('jpg.html',body)
    }
})