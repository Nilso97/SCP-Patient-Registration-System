const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.DATABASE_URL;

mongoose.connect(url);

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("connected", () => {
  console.log(`Connected with MongoDB at ${url}`);
});

module.exports = db;
