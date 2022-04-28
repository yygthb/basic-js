const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const o = {
    separator: '+',
    addition: '',
    additionSeparator: '|',
    ...options,
  };

  const additionArray = Array(o.additionRepeatTimes).fill('' + o.addition);
  const additionStr = additionArray.join(o.additionSeparator);

  return Array(o.repeatTimes)
    .fill(str + additionStr)
    .join(o.separator);
}

module.exports = {
  repeater,
};
