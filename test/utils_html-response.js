"use strict";

var A = require("assert");

var Wr = require("utils/writable");

var SUT = require("utils/html-response");

var ws;
var sut;

suite("Utils - HTML Response");

beforeEach(function () {
	ws = Wr.create();
	sut = SUT.create(ws);
});

test("#ok()", function () {
	ws.writeHead = function (code, hdr) {
		A.strictEqual(code, 200);
		A.strictEqual(hdr["content-type"], "text/html");
	};

	sut.ok();
});

test("#css()", function () {
	sut.css("a");

	A.strictEqual(ws.out, '<link href="a.css" type="text/css" rel="stylesheet">');
});

test("render html5", function () {
	sut.html5();
	sut.title("A");
	sut.body();

	sut.render(function (html, a, b) {
		A.strictEqual(a, 1);
		A.strictEqual(b, "C");

		html.text("B");

	}, 1, "C");

	sut.end();

	A.strictEqual(ws.out, '<!DOCTYPE html><html><head><meta charset="utf-8"><title>A</title></head><body>B</body></html>');
});
