"use strict";

var A = require("assert");
var QS = require("querystring");

var sut = require("../parse/people.js");

var qstr = QS.stringify({
	first: ["A", "C", "E"],
	last: ["B", "D", "F"]
});

suite("Parse - People");

test("ok", function () {
	var list = sut(qstr);

	A.strictEqual(list.length, 3);

	A.strictEqual(list[0].toString(), "A B");
	A.strictEqual(list[1].toString(), "C D");
	A.strictEqual(list[2].toString(), "E F");
});

test("empty list on bogus input", function () {
	var list = sut("@#$%^&*");

	A.strictEqual(list.length, 0);
});
