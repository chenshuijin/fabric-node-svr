/**
 *
 */
'use strict';

var express = require('express');
var helper = require('./helper.js');
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();
var upload = multer();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('BlockChain service by fabric-sdk-node work...');
})

app.post('/', upload.array(), function (req, res) {
   res.send('BlockChain service by fabric-sdk-node work...');
})

app.post('/execChaincode', upload.array(), function (req, res) {

//    return helper.execChaincode('org1', 'v0', 'admin', 'adminpw', 'invoke', ["query", "b"])
    return helper.execChaincode(req.body.org, req.body.chaincodeVersion, req.body.user, req.body.userpwd, req.body.fcn, req.body.args)
    .then((result) => {
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(result));
    }, (err)=>{
	res.writeHead(500, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(err));
    });
})

app.get('/exec', function (req, res) {
    return helper.execChaincode('org1', 'v0', 'admin', 'adminpw', 'invoke', ["query", "b"])
    .then((result) => {
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(result));
    }, (err)=>{
	res.writeHead(500, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(err));
    });
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})

module.exports.start = ()=> {
    var server = app.listen(18240, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("service start on http://%s:%s", host, port)

})
}
