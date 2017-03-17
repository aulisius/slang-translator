const {translate} = require('./index')

let input = 'lol'
let output = translate(input)
console.assert(output === 'laughing out loud', 'Translation failed')

input = 'idk'
output = translate(input)
console.assert(output === 'I don\'t know', 'Translation failed')

input = 'this'
output = translate(input)
console.assert(output === 'this', 'Translation failed')

input = '1th'
output = translate(input)
console.assert(output === '1th', 'Translation failed')

console.log('All tests passed')

