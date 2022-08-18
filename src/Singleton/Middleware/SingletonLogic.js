const Animal = require("../Class/Animal");
const { Person } = require("../Class/Person");

// Since person was already called in main.js, we shouldn't be able to create a new instance

// const person3 = new Person();
// console.info("Person 3", person3);

const person4 = Person.getInstance();
console.info("Person 4", person4);

console.info("Animal 2", Animal);

const { PersonObj } = require("../Objects/PersonObj");

console.info("Counter from singleton", PersonObj.getCount());
