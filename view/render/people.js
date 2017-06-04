"use strict";

module.exports = function (html, list) {
	if (!list.length) {
		html.open("i");
		html.text("Empty.");

		return;
	}

	html.open("ul");

	list.forEach(function (person) {
		html.open("li");
		html.text(person.toString());
		html.close();
	});
};
