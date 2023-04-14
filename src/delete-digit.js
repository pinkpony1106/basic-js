const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(n) {
  let x = 0;
  let s = n.toString();
  for (let i = 0; i < s.length; ++i) {
    let k = "";
    for (let j = 0; j < s.length; ++j) {
      if (i != j) {
        k += s[j];
      }
      if (x < +k) {
        x = +k;
      }
    }
  }
  return x;
}

module.exports = {
  deleteDigit,
};
