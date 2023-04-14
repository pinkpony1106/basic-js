const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let s = "";
  let temp = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      temp += 1;
    } else {
      s += temp + str[i];
      temp = 1;
    }
  }
  return s.replace(/1/g, "");
}

///console.log(encodeLine(str));

module.exports = {
  encodeLine,
};
