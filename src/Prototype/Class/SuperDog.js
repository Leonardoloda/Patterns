const { Dog } = require("./Dog");

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    return "el perro volador";
  }
}

module.exports = { SuperDog };
