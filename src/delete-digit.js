const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

/**
 * Find max digit with last index
 * Remove digit before max
 */

function deleteDigit(n) {
  const arrayOfDigits = Array.from(n.toString());

  if (arrayOfDigits.length === 2) {
    return arrayOfDigits[0] > arrayOfDigits[1]
      ? +arrayOfDigits[0]
      : +arrayOfDigits[1];
  }

  const maxDigit = Math.max(...arrayOfDigits);
  const indexOfMaxDigit = arrayOfDigits.lastIndexOf(maxDigit.toString());

  arrayOfDigits.splice(indexOfMaxDigit - 1, 1);
  return parseInt(arrayOfDigits.join(''));
}

module.exports = {
  deleteDigit,
};
