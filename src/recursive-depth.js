const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

/**
 *
 * default array depth === 1
 * collect res - array of depthes
 *
 * if arr's item is array - res[item]++
 *
 * return max depth of array
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    const res = [1];

    for (let item of arr) {
      if (Array.isArray(item)) {
        res.push(this.calculateDepth(item) + 1);
      } else {
        res.push(1);
      }
    }

    const max = Math.max(...res);
    return max;
  }
}

module.exports = {
  DepthCalculator,
};
