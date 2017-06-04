"use strict";

var A = require("assert");

var sut = require("../parse/url.js");

suite("Parse - Url");

test("ok", function () {
	var path = sut("../ab.c?d=e#f");

	A.strictEqual(path.dir, "/");
	A.strictEqual(path.name, "ab");
	A.strictEqual(path.ext, ".c");
});
