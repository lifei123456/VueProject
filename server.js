let url = require('url');
let express = require('express');
let fs = require('fs');

let app = express();
let psw = 'admin';//初始化密码

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

//监听端口
app.listen('8888');

app.on('request', function (req, res) {
  let urlStr = url.parse(req.url);
  console.log(urlStr);
});

//课程表
app.get('/course', function (req, res, next) {
  console.log(req.url);
  let file = "./courses.json";
  let result = JSON.parse(fs.readFileSync(file));
  console.log(result[0].day);
  res.send(result)
});

//留言板
app.get('/msgBoard', function (req, res, next) {
  console.log(url.parse(req.url).search);
  let file = "./msg.json";
  let result = JSON.parse(fs.readFileSync(file));
  res.send(result)
});

//登录验证
app.get('/login', function (req, res, next) {
  let file = "./user.json";
  let result = JSON.parse(fs.readFileSync(file));
  if (url.parse(req.url).query == 'id=admin&password=' + psw) {
    console.log(result[1]);
    result[1].password = psw;
    res.send(result[1])
  } else {
    res.send();
  }
});

//修改密码
app.post('/change', function (req, res, next) {
  psw = url.parse(req.url).query;
  res.send("success");
});

app.on('error', function (e) {
  console.log(error);
});

