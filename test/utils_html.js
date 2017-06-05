"use strict";

var A = require("assert");

var Wr = require("utils/writable");

var SUT = require("utils/html");

var ws;
var sut;

suite("Utils - HTML");

beforeEach(function () {
	ws = Wr.create();
	sut = SUT.create(ws);
});

test("full tag", function () {
	sut.open("a");
	sut.attr("b", "c");
	sut.attr("d", "e");
	sut.text("f");
	sut.end();

	A.strictEqual(ws.out, '<a b="c" d="e">f</a>');
});

test("id and class", function () {
	sut.open("a");
	sut.id("b");
	sut.cls("c d");
	sut.text("e");
	sut.end();

	A.strictEqual(ws.out, '<a id="b" class="c d">e</a>');
});

test("nested tags", function () {
	sut.open("a");
	sut.attr("b", "c");
	sut.open("d");
	sut.open("e");
	sut.attr("f", "g");
	sut.end();

	A.strictEqual(ws.out, '<a b="c"><d><e f="g"></e></d></a>');
});

test("inline tags", function () {
	sut.put("a");
	sut.put("b");
	sut.attr("c", "d");
	sut.put("e");
	sut.end();

	A.strictEqual(ws.out, '<a><b c="d"><e>');
});

test("close and write text", function () {
	sut.open("a");
	sut.put("b");
	sut.open("c");
	sut.attr("d", "e");
	sut.close();
	sut.text("f");
	sut.end();

	A.strictEqual(ws.out, '<a><b><c d="e"></c>f</a>');
});

test("#raw()", function () {
	var str = '<a b="c">d</a>';

	sut.raw(str);
	sut.end();

	A.strictEqual(ws.out, str);
});

test("#text()", function () {
	sut.open("a");
	sut.text("<\"&>");
	sut.end();

	A.strictEqual(ws.out, "<a>&lt;&quot;&amp;&gt;</a>");
});

test("table", function () {
	sut.table();
	sut.id("a");
	sut.th("A");
	sut.th("B");
	sut.tr();
	sut.td();
	sut.text("C");
	sut.td();
	sut.text("D");
	sut.end();

	A.strictEqual(ws.out, '<table id="a"><tr><th>A</th><th>B</th></tr><tr><td>C</td><td>D</td></tr></table>');
});
