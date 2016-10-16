# jsBoiler

[![Build status](https://travis-ci.org/ryuran/jsBoiler.svg?branch=master)](https://travis-ci.org/ryuran/jsBoiler)

__jsBoiler__ is a boiler plate to make es2015 modules for browsers.

It use:
 - [webpack](https://webpack.github.io) to build dist files.
 - [Babel](https://babeljs.io/) to transpile es2015 to native js for browsers.
 - [ESLint](https://github.com/eslint/eslint) is used for identifying and reporting on patterns, it will check recursively any `.js` file in `./src/`.
 - [Tape](https://github.com/substack/tape) is used for running tests located in `./test/`.

## Initialize your project

You have two options to initialize your project:

1. [Download](https://github.com/ryuran/jsBoiler/archive/master.zip) the content of this repository and use it as your project base.
2. Clone this git repository (see below)

```bash
cd ~/myProject
git clone git@github.com:ryuran/jsBoiler.git .
rm -rf .git
```


### Replace jsBoiler data by your own module’s informations

#### Update your `package.json`
Replace jsBoiler informations by yours: `name`, `description`, `keywords`,`licence`, `homepage`, `reposirory.url` and `bugs.url`.


#### Choose a licence

Replace the `LICENSE` file by your own.


#### Replace `README.md` by `README.dist.md`

```bash
rm README.md && mv README.dist.md README.md
```

And write your plugin doc.

NB: The `README.md` is used as jsDoc homepage.

#### Start your code

__Let’s go__


