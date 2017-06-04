"use strict";

var http = require("http");

var codes = http.STATUS_CODES;

function put(code) {
	return function (res) {
		res.writeHead(code);
		res.end(code + " " + codes[code]);
	};
}

exports.badRequest = put(400);
exports.notFound = put(404);
exports.notImplemented = put(501);
