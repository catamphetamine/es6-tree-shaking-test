const MemoryFS = require('memory-fs')
const webpack = require('webpack')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')

// https://webpack.js.org/api/node/
module.exports = async ({ folder, file }, { minifier }) => {

	const output = await bundle({ folder, file })

	const startMarker = '/******/ (['
	const endMarker = '/******/ ]);'

	// Debugging
	console.log()
	console.log(output.slice(output.indexOf(`${startMarker}\n/* 0 */`) + `${startMarker}\n`.length, `${endMarker}\n`.length * -1))
	console.log()

	const minimized = await bundle({ folder, file }, [minifierPlugin(minifier)])

	// Debugging minimized output
	console.log('------------------------------------------------')
	console.log('-                   Minimized                  -')
	console.log('------------------------------------------------')
	console.log()

	console.log(minimized)
	console.log()

	return minimized
}

function bundle({ folder, file }, plugins = []) {
	return new Promise((resolve, reject) => {
		const compiler = webpack({
			context: folder,
			entry: `./${file}`,
			output: {
				path: '/',
				filename: 'bundle.js'
			},
			plugins
		})

		const fs = new MemoryFS()
		compiler.outputFileSystem = fs

		compiler.run((error, stats) => {
			if (error) {
				return reject(error)
			}

			// stats.toJson("minimal")
			// more options: "verbose", etc.
			const info = stats.toJson()

			if (stats.hasErrors()) {
				return reject(new Error(`Webpack build errors: ${JSON.stringify(info.errors, null, 2)}`))
			}

			if (stats.hasWarnings()) {
				return reject(new Error(`Webpack build warnings: ${JSON.stringify(info.warnings, null, 2)}`))
			}

			resolve(fs.readFileSync('/bundle.js', 'utf8'))
		})
	})
}

function minifierPlugin(minifier) {
	switch (minifier) {
		case 'babili':
			return new BabiliPlugin()
		case 'uglifyjs':
			return new webpack.optimize.UglifyJsPlugin()
	}
}