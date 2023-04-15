const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
let email = "very.unusual.@.unusual.com@usual.com";

function getEmailDomain(email) {
  let x = 0;
  let result = "";
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      x++;
    }
    if (x === 1) {
      result = email.split("@")[1];
    } else if (x === 2) {
      result = email.split("@")[2];
    }
  }

  return result;
}

module.exports = {
  getEmailDomain,
};
