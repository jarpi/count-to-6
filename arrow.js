var i = process.argv.slice(2);
var res = i.map(s => s.substr(0,1) )
	   .reduce( (p,c) => {return p+c},'')
console.log(`[${i}] becomes "${res}"`)
