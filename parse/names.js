"use strict";

var QS = require("querystring");

var Person = require("../model/person.js");

function toArr(val) {
	if (Array.isArray(val)) {
		return val;
	}

	if (val) {
		return [String(val)];
	}

	return [];
}

module.exports = function (str) {
	var parsed = QS.decode(str);
	var names = toArr(parsed.firstname);
	var surnames = toArr(parsed.surname);

	if (names.length !== surnames.length) {
		return [];
	}

	return names.reduce(function (out, name, i) {
		var p = Person.create(name.trim(), surnames[i].trim());

		if (p.check()) {
			out.push(p);
		}

		return out;

	}, []);
};
