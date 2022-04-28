const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return str;

  const letters = [];

  for (let letter of str) {
    if (letters[letters.length - 1] !== letter) {
      letters.push(letter);
    } else {
      // console.log(
      //   letters[letters.length - 2],
      //   typeof parseInt(letters[letters.length - 2]),
      //   parseInt(letters[letters.length - 2])
      // );
      if (isNaN(parseInt(letters[letters.length - 2]))) {
        letters[letters.length - 1] = 2;
        letters.push(letter);
      } else {
        letters[letters.length - 2]++;
      }
    }
  }

  return letters.join('');
}

module.exports = {
  encodeLine,
};
