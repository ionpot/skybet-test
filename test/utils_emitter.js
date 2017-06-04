"use strict";

var A = require("assert");

var sut = require("utils/emitter");

suite("Utils - Emitter");

test("ok", function () {
	var i = 0;
	var j = 0;

	function Foo(a, b) {
		this.a = a;
		this.b = b;
	}

	sut(Foo, function run() {
		this.emit("name", this.a, this.b);
	});

	var foo1 = new Foo("1", 2);
	var foo2 = new Foo("3", 4);

	foo1.on("name", function (a, b) {
		A.strictEqual(a, "1");
		A.strictEqual(b, 2);

		i += 1;
	});

	foo2.once("name", function (a, b) {
		A.strictEqual(a, "3");
		A.strictEqual(b, 4);

		j += 1;
	});

	foo1.run();
	foo1.run();
	foo2.run();
	foo2.run();

	A.strictEqual(i, 2);
	A.strictEqual(j, 1);
});
