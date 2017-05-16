const name = process.argv[2];
const says = process.argv[3];

const html = (strs, ...args) => {
	let result = strs[0];
	for (let i=0; i< args.length; i++) {
		result += esc(args[i]) + strs[i + 1];
	}
	return result;
}

const esc = s => {
	return s.replace(/&/g, "&amp;")
	.replace(/</g, "&lt;")
	.replace(/>/g, "&gt;")
	.replace(/'/g, "&apos;")
	.replace(/"/g, "&quot;");
}

console.log(html`<b>${name} says</b>: "${says}"`)

