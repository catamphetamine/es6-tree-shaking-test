const fs = require('fs')
const path = require('path')

const webpackRunTest = require('./bundlers/webpack')
const rollupRunTest = require('./bundlers/rollup')

const testsFolder = path.join(__dirname, '../tests')

function getTests() {
	return fs.readdirSync(testsFolder)
		.filter(file => fs.statSync(path.join(testsFolder, file)).isDirectory())
}

async function runTests() {
	for (const test of getTests()) {
		console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
		console.log(`~ Running test "${test}"`)
		console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
		
		const options = {
			file: test,
			folder: testsFolder
		}

		console.log('==========================================================')
		console.log('=                        Webpack                         =')
		console.log('==========================================================')
		await webpackRunTest(options)

		console.log('==========================================================')
		console.log('=                        Rollup                          =')
		console.log('==========================================================')
		await rollupRunTest(options)
	}

	console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
	console.log('~                     Tests finished                     ~')
	console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
}

const test = process.argv[2]

runTests().catch(error => console.error(error))