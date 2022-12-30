const { generateUUID } = require("../Utils/Random");

let instance;

class Animal {
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

// Since requires are cached, we can export the instance and it won't trigger a new constructor
module.exports = new Animal();
