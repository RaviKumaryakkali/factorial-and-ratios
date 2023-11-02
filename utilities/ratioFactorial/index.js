const getFactorial = require("../factorial/index");
const getratio = require("../ratio/index");
const ratioAndFactorial = (a, b, c) => {
  let key = getratio(a, b);
  let value = getFactorial(c);
  return { key, value };
};
module.exports = ratioAndFactorial;
