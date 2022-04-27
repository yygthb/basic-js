const { NotImplementedError } = require('../extensions/index.js');

const controlSequences = [
  '--discard-next',
  '--discard-prev',
  '--double-next',
  '--double-prev',
];

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const res = [];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (!controlSequences.includes(arr[i])) {
        res.push(arr[i]);
      } else {
        switch (arr[i]) {
          case controlSequences[0]:
            i += 2;
            break;
          case controlSequences[1]:
            res.pop();
            break;
          case controlSequences[2]:
            if (arr[i + 1]) {
              res.push(arr[i + 1]);
            }
            break;
          case controlSequences[3]:
            if (arr[i - 1]) {
              res.push(arr[i - 1]);
            }
            break;
          default:
            break;
        }
      }
    }
  }

  return res;
}

module.exports = {
  transform,
};
