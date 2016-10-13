# Library

The description of the library.

## Installation and Usage

### Installation

To install all dependencies run

```bash
npm install yarn -g && yarn
```

### Usage

Describe the usage of the library.

```javascript
// Add some example code
var library = require('library');

library.foo();
```

## Dev tools

[ESLint](https://github.com/eslint/eslint) is used for identifying and reporting on patterns, it will check recursively any `.js` file in `./src/`

[Tape](https://github.com/substack/tape) is used for running tests located in `./test/`

To run the tests :

```bash
npm test
```

---

[JSDoc 3](https://github.com/jsdoc3/jsdoc) is used for generating documentation in the `./docs/` folder

To build the docs :

```bash
npm run doc
```

---

[Webpack](https://github.com/webpack/webpack) is used for bundling assets and [Babel JS](https://github.com/babel/babel) is used as an ECMAScript 6 to ECMAScript 5 compiler.

To build the dist files :

```bash
npm run dist
```

To watch for changes in files while development :

```bash
npm run dev
```
