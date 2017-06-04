"use strict";

var fs = require("fs");

var proto = require("utils/proto");

var Person = require("./person.js");

var delim = "\n\n";

function toPerson(str) {
	var arr = str.split("\n");

	return Person.create(arr[0], arr[1]);
}

function toStr(person) {
	return person.first + "\n" + person.last + delim;
}

function People(file) {
	this.file = file;
}

proto(People, function clear(done) {
	fs.writeFile(this.file, "", "utf8", done);

}, function list(done) {
	fs.readFile(this.file, "utf8", function (err, str) {
		if (err) {
			return done([]);
		}

		var out = str.split(delim);

		out.pop();

		done(out.map(toPerson));
	});

}, function addBatch(list, done) {
	var count = 0;
	var str = list.reduce(function (out, person) {
		if (person.check()) {
			out += toStr(person);
			count += 1;
		}

		return out;

	}, "");

	if (!str) {
		return process.nextTick(done, 0);
	}

	fs.appendFile(this.file, str, "utf8", function (err) {
		done(err ? 0 : count);
	});
});

exports.create = function (file) {
	return new People(file);
};
