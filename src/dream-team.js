const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) || !members.length) return false;

  const arr = members.reduce((acc, member) => {
    if (typeof member === 'string') {
      const firstLetter = member.trim().charAt(0).toUpperCase();
      acc.push(firstLetter);
    }
    return acc;
  }, []);

  return arr.sort().join('');
}

module.exports = {
  createDreamTeam,
};
