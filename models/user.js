const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    min: 5,
    max: 12,
    required: true
  },
  created: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model("users", user);
