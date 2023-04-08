// Require All Module
const colors = require("colors");
const dotenv = require("dotenv");
const app = require("./app.js");
const connectDatabase = require("./config/database.js");

// Config Envirenment Variable
dotenv.config({ path: "api/config/config.env" });
const PORT = process.env.PORT || 9090;

// database connect function

// App Listen
app.listen(PORT, () => {
  connectDatabase();
  console.log(`Your server is running on port ${PORT}`.bgGreen.black);
});
