const { generateUUID } = require("../Utils/Random");

let instance;

class Person {
  constructor() {
    // Since it's a singleton, we can't create new instances
    if (instance) throw new Error("Instance already created");

    this.count = 0;
    this.serialID = generateUUID();
    instance = this;
  }

  increase() {
    this.count = this.count + 1;
  }

  static getInstance() {
    return instance;
  }
}

module.exports = { Person };
