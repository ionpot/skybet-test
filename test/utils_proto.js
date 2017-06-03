"use strict";

var A = require("assert");

var sut = require("utils/proto");

suite("Utils - Proto");

test("ok", function () {
	function Foo(a) {
		this.a = a;
	}

	sut(Foo, function get() {
		return this.a;

	}, function set(a) {
		this.a = a;
	});

	var foo1 = new Foo(1);
	var foo2 = new Foo(2);

	A.strictEqual(foo1.get(), 1);
	A.strictEqual(foo2.get(), 2);

	foo1.set(3);
	foo2.set(4);

	A.strictEqual(foo1.get(), 3);
	A.strictEqual(foo2.get(), 4);
});
