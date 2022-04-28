const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(m) {
  const res = [];

  for (let item of m) {
    res.push([...item].fill(0));
  }

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] === true) {
        // console.log(m[i][j], i, j);

        if (i > 0) {
          if (j > 0) res[i - 1][j - 1] += 1;
          res[i - 1][j] += 1;
          if (j < m[i].length) res[i - 1][j + 1] += 1;
        }

        if (j > 0) res[i][j - 1] += 1;
        if (j < m[i].length) res[i][j + 1] += 1;

        if (i < m.length) {
          if (j > 0) res[i + 1][j - 1] += 1;
          res[i + 1][j] += 1;
          if (j < m[i].length) res[i + 1][j + 1] += 1;
        }
      }
    }
  }

  return res;
}

module.exports = {
  minesweeper,
};
