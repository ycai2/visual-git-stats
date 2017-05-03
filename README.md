# Visual Git Stats

### Electron app created to visualize git statistics locally

<br/>

[![Build Status][travis-image]][travis-url]
[![Github Tag][github-tag-image]][github-tag-url]
[![OpenCollective](https://opencollective.com/electron-react-boilerplate/backers/badge.svg)](#backers)
[![OpenCollective](https://opencollective.com/electron-react-boilerplate/sponsors/badge.svg)](#sponsors)

[![React](/img/react-padded-90.png)](https://facebook.github.io/react/)
[![Webpack](/img/webpack-padded-90.png)](https://webpack.github.io/)
[![Redux](/img/redux-padded-90.png)](http://redux.js.org/)
[![React Router](/img/react-router-padded-90.png)](https://github.com/ReactTraining/react-router)
[![Flow](/img/flow-padded-90.png)](https://flowtype.org/)
[![ESLint](/img/eslint-padded-90.png)](http://eslint.org/)
[![Jest](/img/jest-padded-90.png)](https://facebook.github.io/jest/)
[![Yarn](/img/yarn-padded-90.png)](https://yarnpkg.com/)

**Note**: this project is based off [electron-react-boilerplate](https://github.com/https://github.com/chentsulin/electron-react-boilerplate) project. This README is also modified from the boilerplate README but will be changed as I develop the project.

[Electron](http://electron.atom.io/) application based on [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux), [React Router](https://github.com/reactjs/react-router), [Webpack](http://webpack.github.io/docs/), [React Transform HMR](https://github.com/gaearon/react-transform-hmr).

## Screenshot
Coming soon...

## Install

* **Note: requires a node version >= 6 and an npm version >= 3.**

```
npm install
```

You know the drill.

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a server sends hot updates to the renderer process:

```bash
$ npm run dev
```

You Run these two commands __simultaneously__ in different console tabs:

```bash
$ npm run hot-updates-server
$ npm run start-hot-renderer
```

## Packaging

To package apps for the local platform:

```bash
$ npm run package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build) for dependencies.

Then,
```bash
$ npm run package-all
```

To package apps with options:

```bash
$ npm run package -- --[option]
```

## Further commands

To run the application without packaging run

```bash
$ npm run build
$ npm start
```

To run End-to-End Test

```bash
$ npm run build
$ npm run test-e2e
```

#### Module Structure

This project uses a boilerplate [electron-react-boilerplate](https://github.com/https://github.com/chentsulin/electron-react-boilerplate).

1. If the module is native to a platform or otherwise should be included with the published package (i.e. bcrypt, openbci), it should be listed under `dependencies` in `./app/package.json`.
2. If a module is `import`ed by another module, include it in `dependencies` in `./package.json`.   See [this ESLint rule](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md).
3. Otherwise, modules used for building, testing and debugging should be included in `devDependencies` in `./package.json`.

## Static Type Checking
This project comes with Flow support. You can annotate your code with types during development.

## Dispatching redux actions from main process

see discusses in electron-react-boilerplate [#118](https://github.com/chentsulin/electron-react-boilerplate/issues/118) and [#108](https://github.com/chentsulin/electron-react-boilerplate/issues/108)

## Author

- [Yisheng Cai](https://github.com/ycai2)

## Backers

[[Become a backer](https://opencollective.com/electron-react-boilerplate#backer)]

## Sponsors

[[Become a sponsor](https://opencollective.com/electron-react-boilerplate#sponsor)]

## License
MIT © [Yisheng Cai](https://github.com/ycai2)

[npm-image]: https://img.shields.io/npm/v/electron-react-boilerplate.svg?style=flat-square
[github-tag-image]: https://img.shields.io/github/tag/ycai2/visual-git-stats.svg
[github-tag-url]: https://github.com/ycai2/visual-git-stats/releases/latest
[travis-image]: https://travis-ci.org/ycai2/visual-git-stats.svg?branch=master
[travis-url]: https://travis-ci.org/ycai2/visual-git-stats
