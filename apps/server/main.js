require("dotenv");

const app = require("express")();

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
  console.info(`App running on port ${SERVER_PORT}`);
});
