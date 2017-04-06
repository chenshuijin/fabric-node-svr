/**
 *
 */
'use strict';

var http = require('http');
var url = require('url');
var querystring = require('querystring');

function start(route) {
	http.createServer((req, resp)=>{
		var body = "";
		req.on('data', (chunk)=> {
			body += chunk;
		});
		req.on('end', ()=> {
			body = querystring.parse(body);
			console.log('post url :', body.url);
		})
		var pathname = body.url;
		console.log("Request for " + pathname + " received.");
		route(pathname).then((result)=>{
			resp.writeHead(200, {'Content-Type': 'text/plain'});
			resp.end(JSON.stringify(result));
		},(err)=>{
	        console.log('start err:', err);
			resp.writeHead(500, {'Content-Type': 'text/plain'});
			resp.end(JSON.stringify(err));
		});
	}).listen(18240);
	console.log('listening on %s', 18240);
}

exports.start = start;
