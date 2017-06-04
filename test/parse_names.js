"use strict";

var A = require("assert");
var QS = require("querystring");

var sut = require("../parse/names.js");

suite("Parse - Names");

test("string ok", function () {
	var list = sut(QS.stringify({
		firstname: "A",
		surname: "B"
	}));

	A.strictEqual(list.length, 1);

	A.strictEqual(list[0].toString(), "A B");
});

test("array ok", function () {
	var list = sut(QS.stringify({
		firstname: ["A", "C", "E"],
		surname: ["B", "D", "F"]
	}));

	A.strictEqual(list.length, 3);

	A.strictEqual(list[0].toString(), "A B");
	A.strictEqual(list[1].toString(), "C D");
	A.strictEqual(list[2].toString(), "E F");
});

test("empty list on bogus input", function () {
	var list = sut("@#$%^&*");

	A.strictEqual(list.length, 0);
});

test("empty list on mismatch", function () {
	var list = sut(QS.stringify({
		firstname: ["A", "C", "E"],
		surname: ["B"]
	}));

	A.strictEqual(list.length, 0);
});

test("don't add empty or whitespace", function () {
	var list = sut(QS.stringify({
		firstname: ["A", " ", "\n", "  D  "],
		surname: ["", "B", "C", "\nE\n"]
	}));

	A.strictEqual(list.length, 1);
	A.strictEqual(list[0].first, "D");
	A.strictEqual(list[0].last, "E");
});
