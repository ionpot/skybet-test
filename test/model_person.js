"use strict";

var A = require("assert");

var SUT = require("../model/person.js");

var first = "Emir";
var last = "Kotan";

var sut = SUT.create(first, last);

suite("Model - Person");

test("#first", function () {
	A.strictEqual(sut.first, first);
});

test("#last", function () {
	A.strictEqual(sut.last, last);
});

test("#toString()", function () {
	A.strictEqual(sut.toString(), "Emir Kotan");
});
