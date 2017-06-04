"use strict";

var proto = require("utils/proto");

function Person(first, last) {
	this.first = first || "";
	this.last = last || "";
}

proto(Person, function toString() {
	var str = this.first;

	if (this.first && this.last) {
		str += " ";
	}

	return str + this.last;
});

exports.create = function (first, last) {
	return new Person(first, last);
};
