"use strict";

var Css = require("./ctrl/css.js");
var Err = require("./ctrl/error.js");
var Home = require("./ctrl/home.js");

exports.get = function (parts, res) {
	if (parts.ext === ".css") {
		return Css.get(parts, res);
	}

	if (parts.base) {
		return Err.notFound(res);
	}

	if (parts.dir === "/") {
		return Home.get(res);
	}

	return Err.notFound(res);
};

exports.post = function (parts, req, res) {
	if (parts.base) {
		return Err.notFound(res);
	}

	if (parts.dir === "/") {
		return Home.post(req, res);
	}

	return Err.notFound(res);
};
