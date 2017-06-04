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

test("#check()", function () {
	A.ok(SUT.create("A", "B").check());
	A.ok(!SUT.create("A", "").check());
	A.ok(!SUT.create("", "B").check());
	A.ok(!SUT.create("", "").check());
	A.ok(!SUT.create("-", "B").check());
	A.ok(!SUT.create("A", "B1").check());
	A.ok(!SUT.create("2A", "#B").check());
	A.ok(!SUT.create("&A", "@").check());
});
