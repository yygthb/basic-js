const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

/**
 *
 * save "-1" keys and insert after sort
 *
 */

function sortByHeight(arr) {
  let keys = [];

  const res = [
    ...arr.filter((item, idx) => {
      if (item !== -1) {
        return 1;
      } else {
        keys.push(+idx);
      }
    }),
  ];
  res.sort((a, b) => a - b);

  for (let key of keys) {
    res.splice(key, 0, -1);
  }

  return res;
}

module.exports = {
  sortByHeight,
};
