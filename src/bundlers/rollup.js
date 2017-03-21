const rollup = require('rollup')
const path = require('path')

// https://github.com/rollup/rollup/wiki/JavaScript-API
module.exports = ({ folder, file }) => {
	const entry = path.join(folder, file, 'index.js')
	return rollup.rollup({
		entry
	})
	.then((bundle) => {
		const output = bundle.generate({
			format: 'es'
		}).code

		// Debugging
		console.log()
		console.log(output)

		return output
	})
}