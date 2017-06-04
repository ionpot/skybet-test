"use strict";

function row(html, first, last) {
	html.tr();
	html.td();
	html.inputText("firstname", first);
	html.td();
	html.inputText("surname", last);
}

module.exports = function (html) {
	html.form();
	html.table();
	html.th("First Name");
	html.th("Last Name");

	row(html, "Jeff", "Stelling");
	row(html, "Chris", "Kamara");
	row(html, "Alex", "Hammond");
	row(html, "Jim", "White");
	row(html, "Natalie", "Sawyer");

	html.closeTo("table");
	html.submit("OK");
	html.close();
};
