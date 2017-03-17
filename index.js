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
    const start = input.toLowerCase().charAt(0)
    const { words = [] } = [a_e, f_j, k_o, p_t, u_z].find(({ range }) => range.includes(start)) || {}
    const translation = words.find(({ slang }) => input === slang)
    // If no translation is available, return the original input
    return translation ? translation.original : input
  }
}
