class Dog {
  constructor(name) {
    this.name = name;
    this.age = 2;
  }

  barf() {
    return `${this._name} says wow`;
  }
}

module.exports = { Dog };
