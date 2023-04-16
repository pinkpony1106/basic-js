const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const data = new Date(750, 9, 19, 14, 4, 21, 934);
const fakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: "Date",
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";

  if (
    !(date instanceof Date) ||
    Object.prototype.toString.call(date) !== "[object Date]"
  ) {
    throw new Error("Invalid date!");
  }

  if (date.getMonth() >= 2 && date.getMonth() < 5) {
    return "spring";
  } else if (date.getMonth() >= 5 && date.getMonth() < 8) {
    return "summer";
  } else if (date.getMonth() >= 8 && date.getMonth() < 11) {
    return "autumn";
  } else if (
    (date.getMonth() >= 11 && date.getMonth() < 12) ||
    (date.getMonth() >= 0 && date.getMonth() < 2)
  ) {
    return "winter";
  }
}

module.exports = {
  getSeason,
};
