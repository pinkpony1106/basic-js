const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let result = [];
  let string = typeof str === "string" ? str : String(str);
  if (
    options.hasOwnProperty("addition") ||
    options.hasOwnProperty("additionRepeatTimes") ||
    options.hasOwnProperty("additionSeparator")
  ) {
    let addit = new Array(options.additionRepeatTimes)
      .fill(
        typeof options.addition === "string"
          ? options.addition
          : String(options.addition)
      )
      .join(options.additionSeparator ? options.additionSeparator : "|");
    string += addit;
    result = new Array(options.repeatTimes)
      .fill(string)
      .join(options.separator ? options.separator : "+");
  } else {
    result = new Array(options.repeatTimes)
      .fill(string)
      .join(options.separator ? options.separator : "+");
  }
  return result;
}

module.exports = {
  repeater,
};
