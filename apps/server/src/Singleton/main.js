console.clear();

const Animal = require("./src/Class/Animal");
const { Person } = require("./src/Class/Person");

const person1 = new Person();
const person2 = Person.getInstance();

// Person 1 directly created with the constructor
console.info("Person 1", person1);
// Person 2 can't be created via constructor so we need to get the instance
console.info("Person 2", person2);

const animal1 = Animal;

// Since we freeze the class, we can't modify it's values
// animal1.increase();

console.info("Animal 1", animal1);

const { PersonObj } = require("./src/Singleton/Objects/PersonObj");

console.info("Counter in main", PersonObj.getCount());
PersonObj.increase();
console.info("Counter in main", PersonObj.getCount());

require("./src/Middleware/SingletonLogic");
