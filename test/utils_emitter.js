"use strict";

var A = require("assert");

var SUT = require("utils/emitter");

suite("Utils - Emitter");

test("ok", function (done) {
	this.timeout(500);

	var sut = SUT.create();

	sut.on("name", function (val1, val2) {
		A.strictEqual(val1, "1");
		A.strictEqual(val2, 2);

		done();
	});

	sut.emit("name", "1", 2);
});
