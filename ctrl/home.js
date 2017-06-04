"use strict";

var HR = require("utils/html-response");
var S = require("utils/stream");

var parse = require("../parse/names.js");
var People = require("../model/people.js");
var view = require("../view/home.js");

var Err = require("./error.js");

var record = "people.record";

exports.get = function (res) {
	var people = People.create(record);

	people.list(function (list) {
		var hr = HR.create(res);

		hr.ok();

		view(hr, list);
	});
};

exports.post = function (req, res) {
	var type = req.headers["content-type"];

	if (type !== "application/x-www-form-urlencoded") {
		return Err.badRequest(res);
	}

	S.read(req, function (input) {
		var list = parse(input);
		var people = People.create(record);

		people.addBatch(list, function () {
			exports.get(res);
		});
	});
};
