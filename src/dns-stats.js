const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};

  for (let domain of domains) {
    const domainArr = domain.split('.').reverse();

    let domainItem = '';
    let i = 0;

    while (i < domainArr.length) {
      domainItem += '.' + domainArr[i];
      if (res[domainItem]) {
        res[domainItem] += 1;
      } else {
        res[domainItem] = 1;
      }
      i++;
    }
  }

  return res;
}

module.exports = {
  getDNSStats,
};
