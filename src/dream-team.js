const { NotImplementedError } = require("../extensions/index.js");

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
let team = ["Matt", "  Ann", "dmitry", "Max", 0];

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let teamName = "";

  let tempArray = [];

  members.forEach((member) => {
    if (typeof member === "string") {
      const m = member.trim().charAt(0).toUpperCase();
      tempArray.push(m);
    }
  });

  return tempArray.sort().join("");
}
console.log(createDreamTeam(team));

module.exports = {
  createDreamTeam,
};
