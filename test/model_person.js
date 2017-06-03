"use strict";

var A = require("assert");

var SUT = require("../model/person.js");

var first = "Emir";
var last = "Kotan";

var sut;

suite("Model - Person");

beforeEach(function () {
	sut = SUT.create(first, last);
});

test("#first", function () {
	A.strictEqual(sut.first, first);
});

test("#last", function () {
	A.strictEqual(sut.last, last);
});

test("#toString()", function () {
	A.strictEqual(sut.toString(), "Emir Kotan");
});
