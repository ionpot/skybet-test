"use strict";

var A = require("assert");

var SUT = require("../model/person.js");

suite("Model - Person");

test("ok", function () {
	var sut = SUT.create("A", "B");

	A.strictEqual(sut.first, "A");
	A.strictEqual(sut.last, "B");
	A.strictEqual(sut.toString(), "A B");
});

test("no first", function () {
	var sut = SUT.create("", "B");

	A.strictEqual(sut.toString(), "B");
});

test("no last", function () {
	var sut = SUT.create("A", "");

	A.strictEqual(sut.toString(), "A");
});

test("empty", function () {
	var sut = SUT.create("", "");

	A.strictEqual(sut.toString(), "");
});
