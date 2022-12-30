const { generateUUID } = require("../../Utils/Random");
const id = generateUUID();

let counter = 0;

const PersonObj = Object.freeze({
  increase: () => {
    return ++counter;
  },

  decrease: () => {
    return --counter;
  },

  getCount: () => {
    return counter;
  },
});

module.exports = { PersonObj, id, counter };
