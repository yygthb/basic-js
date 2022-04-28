const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

/**
 * when found common character - remove it from original array
 */

function getCommonCharacterCount(s1, s2) {
  let arr1, arr2;
  let count = 0;

  if (s1.length >= s2.length) {
    arr1 = s1.split('');
    arr2 = s2.split('');
  } else {
    arr1 = s2.split('');
    arr2 = s1.split('');
  }

  for (let item of arr2) {
    const commonIndex = arr1.indexOf(item);
    if (commonIndex >= 0) {
      arr1.splice(commonIndex, 1);
      count++;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
