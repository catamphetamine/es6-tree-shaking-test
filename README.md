# ES6 "tree shaking" test suite for javascript bundlers

<!-- 
[![NPM Version][npm-badge]][npm]
[![Build Status][travis-badge]][travis]
[![Test Coverage][coveralls-badge]][coveralls] -->

Test your javascript module bundler (Webpack, Rollup, etc) and find out which one is the smartest when it comes to intelligently eliminating unused code.

See the [original discussion in `webpack` repo](https://github.com/webpack/webpack/issues/2867)

## Comparison table

This is the test cases comparison table: `✓` means the test passes.

| Bundler              | "sample" |
|----------------------|----------|
| Webpack 2 + Babili   |     ✓    |
| Webpack 2 + UglifyJS |     ✓    |
| Rollup               |     ✓    |

Make up your own test cases which not all bundlers pass and send pull requests. Use the `tests/sample` folder as an example.

When Webpack 2 detects an unused ES6 export it marks it with `/* unused harmony export */` but still does output it in the resulting bundle. Such unused exports will be removed when minimizing the bundle using either [Babili](https://github.com/webpack-contrib/babili-webpack-plugin) (recommended) or [`UglifyJSPlugin`](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) (legacy) (therefore Webpack 2 doesn't remove unused code itself instead relying on a 3rd party plugin for doing that). In contrast, Rollup does remove unused ES6 exports before the output bundle is minimized.

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
