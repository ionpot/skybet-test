"use strict";

var A = require("assert");

var sut = require("utils/emitter");

suite("Utils - Emitter");

test("ok", function (done) {
	this.timeout(500);

	function Foo(a, b) {
		this.a = a;
		this.b = b;
	}

	sut(Foo, function run() {
		this.emit("name", this.a, this.b);
	});

	var foo = new Foo("1", 2);

	foo.on("name", function (a, b) {
		A.strictEqual(a, "1");
		A.strictEqual(b, 2);

		done();
	});

	foo.run();
});
