const a_e = require('./a-e')
const f_j = require('./f-j')
const k_o = require('./k-o')
const p_t = require('./p-t')
const u_z = require('./u-z')

module.exports = {
    translate: (input = '') => {
        input = input.toLowerCase();
        const start = input.charAt(0)
        let range = []
        if (a_e.range.includes(start)) {
            range = a_e.words
        } else if (f_j.range.includes(start)) {
            range = f_j.words
        } else if (k_o.range.includes(start)) {
            range = k_o.words
        } else if (p_t.range.includes(start)) {
            range = p_t.words
        } else if (u_z.range.includes(start)) {
            range = u_z.words
        } else {
            return ''
        }
        return range.find(({ slang }) => input === slang).original
    }
}