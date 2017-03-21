# ES6 "tree shaking" test suite for javascript bundlers

<!-- 
[![NPM Version][npm-badge]][npm]
[![Build Status][travis-badge]][travis]
[![Test Coverage][coveralls-badge]][coveralls] -->

Test your javascript module bundler (Webpack, Rollup, etc) and find out which one is the smartest when it comes to intelligently eliminating unused code.

## Status

| Bundler   | Test | Passes |
|-----------|------|--------|
| Webpack 2 |      |        |
| Rollup    |      |        |

## Running

```sh
# Make sure Node.js >= 7.x.x is installed
git clone https://github.com/halt-hammerzeit/es6-tree-shaking-test.git
cd es6-tree-shaking-test
npm install
npm test [test-case-name]
```

## License

[MIT](LICENSE)

[npm]: https://www.npmjs.org/package/universal-webpack
[npm-badge]: https://img.shields.io/npm/v/universal-webpack.svg?style=flat-square

[travis]: https://travis-ci.org/halt-hammerzeit/universal-webpack
[travis-badge]: https://img.shields.io/travis/halt-hammerzeit/universal-webpack/master.svg?style=flat-square

[coveralls]: https://coveralls.io/r/halt-hammerzeit/universal-webpack?branch=master
[coveralls-badge]: https://img.shields.io/coveralls/halt-hammerzeit/universal-webpack/master.svg?style=flat-square
