# library-boilerplate

Rollup based javascript library boilerplate + babel 7, eslint, flow, jest, esdoc and live editing.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![coverage statements](./coverage/badge-statements.svg)](https://github.com/pamepeixinho/jest-coverage-badges)
[![coverage lines](./coverage/badge-lines.svg)](https://github.com/pamepeixinho/jest-coverage-badges)
[![coverage functions](./coverage/badge-functions.svg)](https://github.com/pamepeixinho/jest-coverage-badges)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

![library-boilerplate logo](https://cdn-images-1.medium.com/max/1500/1*LQbS9RgHy93y9JH8ltejuQ.jpeg)

- [Getting Started](#getstart)
- [Features](#features)
- [Installation](#inst)
- [Running](#run)
- [API](#ref)
- [The source code](#code)
- [Variations](#other)
- [Credit](#credit)

<a name="getstart"></a>
## Getting Started: ##

This boilerplate including a basic code to start creating a js based library.

Start with cloning the project:

```bash
$ git clone --depth=1 git://github.com/Ziv-Barber/library-boilerplate.git your-project-name
```

Then:

- Remove the .git directory.
- Edit package.json:
  - Change the name of the project to your project name.
  - Change the version to 0.1.0
  - If you want to release a npm package then change:
    "release": "npx run-s test release:pre"
    to:
    "release": "npx run-s test release:pre release:publish"

The boilerplate without any changes supporting creating a library for both CommonJS, es6 modules, amd and browser. If you don't need all of this then just edit the rollup.config.js file and remove the inputs that you don't need.

Now, create a new github project and do:
	
```bash
$ git init
$ git remote add origin https://github.com/your-name/your-project-name.git
$ git add -A
$ npm run commit
$ git push origin master
```

This project is using [semantic-release](https://github.com/semantic-release/semantic-release) to automatic handling of the version of your library. To be able to automatic release a new version you must configure Travis-CI to your new project:

- Go to [https://travis-ci.org/](https://travis-ci.org/) and either signup or signin.
- Select your new project and click setting.
- You MUST configure a token or [semantic-release](https://github.com/semantic-release/semantic-release) will not be able to commit changes:
  - Create a new token (see [here](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) how to do it).
  - In your Travis-CI project setting, go to the environment settings section and add a new environment variable with the name 'GH_TOKEN' and the generated token as the data.
- To test everything just push something into github and it should update everything automatic!

<a name="features"></a>
## Features: ##

This project is using the following awesome libraries/utilities/services:

- [babel 7](https://babeljs.io/)
- [better-npm-run](https://github.com/benoror/better-npm-run)
- [commitizen](http://commitizen.github.io/cz-cli)
- [esdoc](https://esdoc.org/)
- [eslint](https://eslint.org/)
- [flow](https://flow.org/)
- [jest](https://jestjs.io/)
- [npm-run-all](https://github.com/mysticatea/npm-run-all)
- [rollup](https://rollupjs.org/)
- [semantic-release](https://github.com/semantic-release/semantic-release)

<a name="inst"></a>
## Installation: ##

via Git:

```bash
$ git clone git://github.com/Ziv-Barber/library-boilerplate.git
```

via yarn:

```bash
$ yarn add library-boilerplate
```

via npm:

```bash
$ npm install library-boilerplate
```

<a name="ref"></a>
## API: ##

???.

<a name="code"></a>
## The source code: ##

- lib - all the sources.
  - types - put here all the flow type declarations.
- __tests__ - all the tests.
- .editorconfig - coding style for this project.

### Scripts: ###

- start
- build
- clean
- test
- flow
- lint

### Tests: ###

Tests:

```bash
yarn test
```

or:

```bash
npm test
```

### Flow: ###

Flow check (if you don't have a flow plugin in your IDE):

```bash
yarn flow
```

or:

```bash
npm flow
```

### Lint: ###

Lint check (if you don't have a plugin in your IDE):

```bash
yarn lint
```

or:

```bash
npm lint
```

<a name="other"></a>
## Variations: ##

- library-boilerplate (this project) - Rollup based javascript library boilerplate + babel 7, eslint, flow, jest, esdoc and live editing.
- [react-boilerplate](https://github.com/Ziv-Barber/react-boilerplate) - React 16.5.2 + babel 7 + jest + webpack 4 + flow + eslint + esdoc + live editing boilerplate.

<a name="credits"></a>
## Credit: ##

- Created by Ziv Barber.
