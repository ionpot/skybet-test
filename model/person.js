"use strict";

var proto = require("utils/proto");

function allowed(str) {
	var chars = /^[a-z]+$/i;

	return chars.test(str);
}

function Person(first, last) {
	this.first = first;
	this.last = last;
}

proto(Person, function check() {
	if (this.first && this.last) {
		return allowed(this.first)
				&& allowed(this.last);
	}

}, function toString() {
	return this.first + " " + this.last;
});

exports.create = function (first, last) {
	return new Person(first, last);
};
