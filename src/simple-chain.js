const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    try {
      if (
        position < 1 ||
        typeof position !== 'number' ||
        position > this.chain.length
      ) {
        this.resetChain();
        throw Error("You can't remove incorrect link!");
      }
      this.chain.splice(position - 1, 1);
      return this;
    } catch (error) {
      this.resetChain();
      throw Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = [...this.chain].map((item) => `( ${item} )`).join('~~');
    this.resetChain();
    return res;
  },
  resetChain() {
    this.chain = [];
  },
};

module.exports = {
  chainMaker,
};
