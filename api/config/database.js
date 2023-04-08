const mongoose = require("mongoose");

// DataBase Connect
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Database Connect successfull`.bgYellow.black);
    })
    .catch((error) => {
      console.log(`${error.message}`.bgRed.black);
    });
};

// module export
module.exports = connectDatabase;
