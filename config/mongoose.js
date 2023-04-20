const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/EmpReview");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting DB"));

db.once("open", () => {
  console.log("Successfully connected to the database");
});

module.export = db;
