/**
 *
 */

'use strict';

var helper = require('./helper.js');

function route(pathname) {
	return new Promise(function(resolve, reject){
		switch (pathname) {
		case '/':
			return helper.execChaincode('org1', 'v0', 'admin', 'adminpw', 'invoke', ["query", "b"]).then((result)=>{resolve(result);}, (err)=>{reject(err);});
		default :
			resolve(pathname);
		}
	});
}

exports.route = route;
