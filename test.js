const {translate} = require('./index')

let input = 'lol'
let output = translate(input)
console.assert(output === 'laughing out loud', 'Translation failed')

input = 'idk'
output = translate(input)
console.assert(output === 'I don\'t know', 'Translation failed')

console.log('All tests passed')