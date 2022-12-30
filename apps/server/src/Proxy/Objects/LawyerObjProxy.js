const Lawyer = {
  message: "",
  greet: () => console.log("Hello test"),
};

const proxy = {
  set: (object, property, value) => {
    // By using reflect we can return true or false if the property was omdified
    if (value) Reflect.set(object, property, value);
  },
  // JS proxy, doesn't work for custom properties
  greet: () => {
    console.log("Custom method proxy");
  },
};

// Javascript proxy class, receivse a handler to modify the normal behaviours in a javascript object
const LawyerObjProxy = new Proxy(Lawyer, proxy);
module.exports = { LawyerObjProxy };
