"use strict";

var A = require("assert");

var P = require("../model/person.js");
var SUT = require("../model/people.js");

var people = [
	P.create("A", "B"),
	P.create("C", "D"),
	P.create("E", "F")
];

var sut = SUT.create("test/people.record");

suite("Model - People");

before(function (done) {
	sut.clear(done);
});

test("empty", function (done) {
	sut.list(function (list) {
		A.strictEqual(list.length, 0);

		done();
	});
});

test("#addBatch()", function (done) {
	sut.addBatch(people, function (added) {
		A.strictEqual(added, people.length);

		done();
	});
});

test("#list()", function (done) {
	sut.list(function (list) {
		A.strictEqual(list[0].toString(), "A B");
		A.strictEqual(list[1].toString(), "C D");
		A.strictEqual(list[2].toString(), "E F");

		done();
	});
});

test("#clear()", function (done) {
	sut.clear(function () {
		sut.list(function (list) {
			A.strictEqual(list.length, 0);

			done();
		});
	});
});
