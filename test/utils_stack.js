"use strict";

var A = require("assert");

var SUT = require("utils/stack");

suite("Utils - Stack");

test("ok", function () {
	var sut = SUT.create();

	A.ok(sut.empty());

	sut.push("A");
	A.strictEqual(sut.top(), "A");

	sut.push("B");
	A.strictEqual(sut.top(), "B");

	sut.push("C");
	A.strictEqual(sut.top(), "C");

	A.strictEqual(sut.pop(), "C");
	A.strictEqual(sut.pop(), "B");
	A.strictEqual(sut.pop(), "A");

	A.ok(sut.empty());
});
