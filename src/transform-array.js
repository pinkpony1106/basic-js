const { NotImplementedError } = require("../extensions/index.js");

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
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let temp = arr.slice();

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "--double-next") {
      if (i === temp.length - 1) {
        temp.splice(i, 1);
      } else temp[i] = temp[i + 1];
    }
    if (temp[i] === "--discard-next") {
      if (i === temp.length - 1) {
        temp.splice(i, 1);
      } else temp.splice(i, 2);
    }
    if (temp[i] === "--double-prev") {
      if (i === 0) {
        temp.splice(i, 1);
      } else temp[i] = temp[i - 1];
    }
    if (temp[i] === "--discard-prev") {
      if (i === 0) {
        temp.splice(i, 1);
      } else temp.splice(i - 1, 2);
    }
  }

  return temp;
}

module.exports = {
  transform,
};
