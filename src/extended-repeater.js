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
let str = "STRING";
let options = {
  repeatTimes: 3,
};

function repeater(str, options) {
  let result = [];
  console.log(options.hasOwnProperty("addition"));
  if (
    options.hasOwnProperty("addition") ||
    options.hasOwnProperty("additionRepeatTimes") ||
    options.hasOwnProperty("additionSeparator")
  ) {
    let addit = new Array(options.additionRepeatTimes)
      .fill(options.addition)
      .join(options.additionSeparator ? options.additionSeparator : "");
    let string = str + addit;
    result = new Array(options.repeatTimes)
      .fill(string)
      .join(options.separator ? options.separator : "+");
  } else {
    let string = str;
    result = new Array(options.repeatTimes)
      .fill(string)
      .join(options.separator ? options.separator : "+");
  }
  return result;
}

console.log(repeater(str, options));

module.exports = {
  repeater,
};
