"use strict";

var http = require("http");

var Router = require("./router.js");

var Err = require("./ctrl/error.js");
var parse = require("./parse/url.js");

var port = +process.argv[2] || 8080;

http.createServer(function (req, res) {
	var parts;

	try {
		parts = parse(req.url);

		switch (req.method) {
		case "GET":
			return Router.get(parts, res);

		case "POST":
			return Router.post(parts, req, res);

		default:
			return Err.notImplemented(res);
		}

	} catch (e) {
		return Err.badRequest(res);
	}

}).listen(port);
