const { Lawyer } = require("./Classes/Lawyer");
const { LawyerProxy } = require("./Classes/LawyerProxy");

const law = new Lawyer();
const lawyer = new LawyerProxy(law);

// Since we are not using the proxy, any value is valid
law.setMessage(null);

// An empty message would be valid
console.info("Lawyer direct", law.message);

// Via proxy we can control the way is handled, we can't assign empty values
lawyer.setMessage(null);

// However a valid message can be set
lawyer.setMessage("Test");

console.info("Lawyer message", lawyer.getMessage());

const { LawyerObjProxy } = require("./Objects/LawyerObjProxy");

LawyerObjProxy.message = "value";
LawyerObjProxy.greet();
