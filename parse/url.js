"use strict";

var Path = require("path");
var Url = require("url");

module.exports = function (str) {
	var path = Path.parse(Url.parse(str).pathname);

	path.dir = Url.resolve("/", path.dir);

	return path;
};
