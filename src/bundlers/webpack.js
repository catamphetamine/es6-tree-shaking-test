const MemoryFS = require('memory-fs')
const webpack = require('webpack')

// https://webpack.js.org/api/node/
module.exports = ({ folder, file }) => {
	return new Promise((resolve, reject) => {
		const compiler = webpack({
			context: folder,
			entry: `./${file}`,
			output: {
				path: '/',
				filename: 'bundle.js'
			}
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

			const output = fs.readFileSync('/bundle.js', 'utf8')
			
			const startMarker = '/******/ (['
			const endMarker = '/******/ ]);'

			console.log()
			console.log(output.slice(output.indexOf(`${startMarker}\n/* 0 */`) + `${startMarker}\n`.length, `${endMarker}\n`.length * -1))
			console.log()

			resolve()
		})
	})
}