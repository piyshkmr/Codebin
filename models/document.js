const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = new mongoose.model("documents", documentSchema);
