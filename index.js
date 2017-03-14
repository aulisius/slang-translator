const a_e = require('./a-e')
const f_j = require('./f-j')
const k_o = require('./k-o')
const p_t = require('./p-t')
const u_z = require('./u-z')

/**
 * A module to translate slang into normal English
 * @module slang-translator
 */
module.exports = {
    /**
     * Utility to translate slang into normal English.
     * @param {string} [input=] - The slang to be translated
     * @returns {string} - The translated string or original input
     */
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
        const translation = range.find(({ slang }) => input === slang)
        // If no translation is available, return the original input
        return translation ? translation.original : input
    }
}