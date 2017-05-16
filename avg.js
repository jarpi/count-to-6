module.exports = function average(...args) {
		return (args.reduce( (p, c) => { return p+c },0)/args.length)
	}
