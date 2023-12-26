const addDays = require("date-fns/addDays");

let dateAfterXDays = (days) => {
  let date = addDays(new Date(22, 7, 2020), days);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getYear()}`;
};

module.exports = dateAfterXDays;
