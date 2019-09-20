const mongoose = require("mongoose");
const User = require("./models/user");

const user = new User({
  name: "Alison",
  email: "alison@here.com",
  password: "1234567"
});

user.save();

mongoose.connect("mongodb://localhost:27017/signup", {
  useNewUrlParser: true
});
