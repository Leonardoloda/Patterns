console.clear();

const readLine = require("readline");

const interface = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const patterns = ["Singleton", "Proxy"];

console.info("Welcome to your patterns trainer \n");

for (let index = 0; index < patterns.length; index++) {
  console.info(`${index + 1}. ${patterns[index]}`);
}

// interface.question("\nWhat pattern do you wanna know about?", (input) => {
//   console.info("Input: ", input);
// });

require("./src/Proxy/main");
