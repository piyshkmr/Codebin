const mongoose = require("mongoose");

const DB_CONNECTION_URL = process.env.DB || "mongodb://localhost/codebin";

mongoose
  .connect(DB_CONNECTION_URL)
  .then(() => console.log("Connected to db.."))
  .catch((err) => console.log(err));
