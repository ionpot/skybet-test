"use strict";

var A = require("assert");

var SUT = require("utils/writable");

suite("Utils - Writable");

test("ok", function (done) {
	this.timeout(500);

	var expected = "Testing writable stream.";
	var sut = SUT.create(expected);

	sut.write("Testing");
	sut.write(" writable");
	sut.end(" stream.");

	sut.on("end", function () {
		A.strictEqual(sut.out, expected);

		done();
	});
});
