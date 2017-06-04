This entry is implemented in _Node.js_.

_npm_ (typically bundled with _Node.js_) is also required to fetch the dependencies.

## Dependencies

This package has two dependencies, both present in _package.json_:

- _htmlencode_: For escaping HTML characters.
- _mocha_: For tests, this is a dev dependency.

Inputting _npm install_ from this directory will fetch these.

## Tests

_Mocha_ is needed to run the tests. Inputting _npm test_ would suffice.

## Running

_npm start_ will start the server, which will listen port 8080 by default.

This can be overridden by inputting _npm start -- 8081_ and such.
