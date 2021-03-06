# library-boilerplate

Rollup based javascript library boilerplate featuring Babel 7, ESLint, flow, jest, ESDoc, Rollup, semantic-release and live debugging.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![coverage statements](./coverage/badge-statements.svg)](https://github.com/pamepeixinho/jest-coverage-badges)
[![coverage lines](./coverage/badge-lines.svg)](https://github.com/pamepeixinho/jest-coverage-badges)
[![coverage functions](./coverage/badge-functions.svg)](https://github.com/pamepeixinho/jest-coverage-badges)
[![dependencies](https://david-dm.org/Ziv-Barber/library-boilerplate.svg?style&#x3D;flat-square)](https://david-dm.org/Ziv-Barber/library-boilerplate)
[![devDependencies](https://david-dm.org/Ziv-Barber/library-boilerplate/dev-status.svg?style&#x3D;flat-square)](https://david-dm.org/Ziv-Barber/library-boilerplate#info&#x3D;devDependencies)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![build status](https://travis-ci.org/Ziv-Barber/library-boilerplate.svg?branch&#x3D;master)](https://travis-ci.org/Ziv-Barber/library-boilerplate)

![library-boilerplate logo](https://cdn-images-1.medium.com/max/1500/1*LQbS9RgHy93y9JH8ltejuQ.jpeg)

- [Getting Started](#getstart)
- [External dependencies](#dependencies)
- [Installation](#inst)
- [The API](#ref)
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

- Remove the .git directory (rm -rf your-project-name/.git).
- Edit package.json and change the name of the project to your project name.
- The boilerplate without any changes supporting creating a library for both CommonJS, es6 modules, amd and browser. If you don't need all of this then just edit the rollup.config.js file and remove the inputs that you don't need.

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
  - Permissions needed in the github token:
    - repo:
      - repo:status
      - repo_deployment
      - public_repo
    - admin:org:
      - read:org
    - admin:repo_hook:
      - write:repo_hook
    - user:
      - user:email
  - In your Travis-CI project setting, go to the environment settings section and add a new environment variable with the name 'GH_TOKEN' and the generated token as the data.
- To test everything just push something into github and it should update everything automatic!

Allow doing npm publish automatically by [semantic-release](https://github.com/semantic-release/semantic-release):

- You need a npm token (see [here](https://docs.npmjs.com/getting-started/working_with_tokens#how-to-create-new-tokens)) and add it as the NPM_TOKEN environment variable to Travis-CI like you did with the GH_TOKEN for github.
- Update the release section in package.json and add '@semantic-release/npm' to both 'prepare', 'publish' and 'verifyConditions'.

<a name="dependencies"></a>
## External dependencies: ##

This project is using the following awesome libraries/utilities/services:

- [babel 7](https://babeljs.io/)
- [better-npm-run](https://github.com/benoror/better-npm-run)
- [commitizen](http://commitizen.github.io/cz-cli)
- [ESDoc](https://esdoc.org/)
- [ESLint](https://eslint.org/)
- [flow](https://flow.org/)
- [jest](https://jestjs.io/)
- [npm-run-all](https://github.com/mysticatea/npm-run-all)
- [rollup](https://rollupjs.org/)
- [semantic-release](https://github.com/semantic-release/semantic-release)

<a name="inst"></a>
## Installation: ##

via [**yarn**](https://yarnpkg.com/):

```bash
$ yarn add library-boilerplate
```

via **npm**:

```bash
$ npm install library-boilerplate
```

<a name="ref"></a>
## The API: ##

To create the library api:

```bash
$ yarn esdoc
```

or:

```bash
$ npm run esdoc
```

<a name="code"></a>
## :coffee: The source code: ##

### The project structure: ###

```
- library-boilerplate/lib/ - All the sources should be here.
- library-boilerplate/lib/types/ - All the flow type declarations.
- library-boilerplate/__tests__/ - All the unit tests.
- rollup.config.js - The configuration for [rollup](https://rollupjs.org/).
- .editorconfig - The [coding style settings](https://editorconfig.org/) for this project.
```

### Npm scripts: ###

When using with **yarn** then use the following syntax:

```bash
$ yarn name params
```

Or with just **npm**:

```bash
$ npm name params
```

- **start** - Run the code in development mode.
- **build** - Build the production mode.
- **lint** - Lint :cop: using [ESLint](https://eslint.org/).
- **flow** - [Flow](https://flow.org/) checks.

<a name="other"></a>
## Variations: ##

- library-boilerplate (this project) - Rollup based javascript library boilerplate featuring Babel 7, ESLint, flow, jest, ESDoc, Rollup, semantic-release and live debugging.
- [library-boilerplate-mocha]() - Rollup based javascript library boilerplate featuring Babel 7, ESLint, flow, mocha, ESDoc, Rollup, semantic-release and live debugging.
- [react-boilerplate]() - React 16.5 based frontend boilerplate featuring Babel 7, ESLint, flow, Jest, ESDoc, Webpack 4, React 16.5, Redux, redux-thunk, semantic-release and react-hot-loader debugging.
- [react-boilerplate-mocha]() - React 16.5 based frontend boilerplate featuring Babel 7, ESLint, flow, mocha, ESDoc, Webpack 4, React 16.5, Redux, redux-thunk, semantic-release and react-hot-loader debugging.

<a name="credits"></a>
## Credit: ##

- Created by Ziv Barber.
