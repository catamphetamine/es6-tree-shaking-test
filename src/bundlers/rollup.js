const rollup = require('rollup')
const path = require('path')

// https://github.com/rollup/rollup/wiki/JavaScript-API
module.exports = ({ folder, file }) => {
	const entry = path.join(folder, file, 'index.js')
	return rollup.rollup({
		entry
	})
	.then((bundle) => {
		console.log()
		console.log(bundle.generate({
			format: 'es'
		}).code)
	})
}