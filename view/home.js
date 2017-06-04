"use strict";

var form = require("./render/form.js");
var people = require("./render/people.js");

module.exports = function (hr, list) {
	hr.html5();
	hr.title("People");
	hr.body();
	hr.render(function (html) {
		html.div();
		html.id("add");
		html.h1("Add");
		form(html);
		html.close();

		html.div();
		html.id("list");
		html.h1("List");
		people(html, list);
	});
	hr.end();
};
