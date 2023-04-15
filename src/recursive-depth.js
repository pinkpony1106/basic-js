const { NotImplementedError } = require("../extensions/index.js");

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

class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      const z = 1 + Math.max(0, ...arr.map((x) => this.calculateDepth(x)));
      return z;
    } else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator,
};
