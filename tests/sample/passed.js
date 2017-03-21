module.exports = (output) => {
	return output.indexOf("I have a pen") >= 0 && output.indexOf("I have an apple") <= 0
}