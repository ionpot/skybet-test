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

test("render html5", function () {
	sut.html5();
	sut.title("A");
	sut.body();
	sut.render(function (html) {
		html.text("B");
	});
	sut.end();

	A.strictEqual(ws.out, '<!DOCTYPE html><html><head><meta charset="utf-8"><title>A</title></head><body>B</body></html>');
});
