// app.js
// DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");
const bagelsController = require("./controllers/bagelsController.js");

// CONFIGURATION

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/bagels", bagelsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Bagel Lab!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
