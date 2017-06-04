"use strict";

var fs = require("fs");

var Err = require("./error.js");

exports.get = function (parts, res) {
	var path = "css/" + parts.base;
	var st = fs.createReadStream(path);

	st.on("open", function () {
		res.writeHead(200, {
			"content-type": "text/css"
		});

		st.pipe(res);
	});

	st.on("error", function () {
		Err.notFound(res);
	});
};
