const express = require("express");
const product = require("./routes/productRoute");

// init app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use("/api/v1", product);

module.exports = app;
