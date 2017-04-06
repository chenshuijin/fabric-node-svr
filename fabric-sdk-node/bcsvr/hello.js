/**
 *
 */
'use strict';

var http = require('http');

var utils = require('fabric-client/lib/utils.js');
var logger = utils.getLogger('hello');

var tape = require('tape');
var _test = require('tape-promise');
var test = _test(tape);

var hfc = require('fabric-client');

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('ok\n');
});

server.on('clientError', (err, socket) => {
	socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(18240);
console.log('listening on 18240 ');

test('**************** test chaincode ****', (t)=> {
	logger.info('########### begin test chaincode ###########');
	t.pass('Successfully enrolled user ');
	t.end();
});



(function init() {
//	logger.info('##### hello #######');
//	logger.info('##### __dirname:', __dirname);

})();

(function testThen(str){
	logger.info('###testthen....');
//	throw new Error('first throw err');
	return new Promise(function(resolve, reject){
			resolve(str);
	});
})('aaaa').then(
	function(str){
		logger.info('#### inner first test then',str);
//		throw new Error("error test gogogogo....");
		return 'bbb';
	}
).then(
	function(str){
		logger.info('#### inner second test then',str);
		return str + 'second';
	}
).catch((err)=>{
	logger.error('catch err in the promise:', err);
});
