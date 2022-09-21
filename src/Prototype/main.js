const { Dog } = require("./Class/Dog");

// A good way to share properties is to create multiples instances of the same class

console.info("Dog.prototype", Dog.prototype);
console.info("dog.__prototype__", Reflect.getPrototypeOf(Dog));

// Methods are added to the prototype so every instance will have the same properties
console.info("gohan", Object.getOwnPropertyNames(Dog.prototype));

const { SuperDog } = require("./Class/SuperDog");

const gohan = new SuperDog("Gohan");

// Since the prototype it's inherited from Dog, now super dog has Dogs prototype
console.info("Gohan can fly", gohan.fly());
console.info("Gohan can bark", gohan.barf());
console.info("Gohan has a name", gohan.name);

const { DogObj } = require("./Object/DogObj");

// Same behaviour can be achieved with object.create
const maya = Object.create(DogObj);

console.info("Maya", maya.barf());

// Since it extends the prototype to any objects created from this one, we can actually add properties
DogObj.__proto__.pee = "pee";

console.info("Maya can", maya.pee);

// The prototype of DogObj is the same prototype from any sub object
console.info("isPrototypeOf", DogObj.isPrototypeOf(maya));
