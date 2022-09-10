const mongoose = require("mongoose");
require("dotenv").config();

const mongo_URL = process.env.DATABASE_URL;

/*
Connection with MongoDB
*/
mongoose.connect(mongo_URL);

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("connected", () => {
  console.log("Connected with MongoDB");
});

module.exports = db;
