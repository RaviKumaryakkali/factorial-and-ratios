const getFactorial = require("../factorial/index");
const getratio = require("../ratio/index");
const ratioAndFactorial = (a, b, c) => {
  let ratio = getratio(a, b);
  let factorial = getFactorial(c);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
