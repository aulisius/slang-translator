const jsdom = require('jsdom')
const fetch = require('node-fetch')

const domIt = url => new Promise((a, r) => jsdom.env(url, (e, w) => e ? r(e) : a(w)))

//a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
let pages = "u,v"
	.split(',')
	.map(l => domIt(`http://www.noslang.com/dictionary/${l}`))

Promise.all(pages)
	.then(documents => documents.map(({ document }) =>
		Array.from(document.getElementsByClassName('dictonary-word'))
			.map(e => ({
				slang: e.getElementsByTagName('a')[0].name,
				original: e.getElementsByTagName('abbr')[0].title
			}))
			.forEach(words => console.log(`${JSON.stringify(words)},`))
	))
	.catch(console.error)