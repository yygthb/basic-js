const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = Math.log(2) / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') return false;

  const sampleActivityNumber = parseFloat(sampleActivity);
  if (
    sampleActivityNumber > MODERN_ACTIVITY ||
    sampleActivityNumber <= 0 ||
    isNaN(sampleActivityNumber)
  )
    return false;

  const t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
  return Math.ceil(t);
}

module.exports = {
  dateSample,
};
