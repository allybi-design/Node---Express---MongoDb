const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;


exports.loginUser = (req, res, next) => {
  res.render("index", { title: "Welcome to - Express", route: "Log In" });
};

exports.regUser = (req, res, next) => {
  res.render("register", {
    title: "Welcome to - Express",
    route: "Register"
  });
};

exports.findUser = async (req, res, next) => {
    await User.findOne({ email: req.body.email }, (err, user) => {
    console.log(user)
    if (err) throw err

    const match = bcrypt.compare(req.body.password, user.password);
 
    if(match) {
        //login
        res.render("welcome", { greeting: `Welcome ${user.name.toUpperCase()}` });
    } else {
        // password error
        res.render("error", {status: 400, message: "Password Error"})   
    }
  });
};

exports.saveUser = async (req, res) => {
  let hashedPW = bcrypt.hashSync(req.body.password, saltRounds);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPW
  });

  const result = await user.save();

  console.log(result);
  res.render("welcome", { greeting: `Welcome ${result.name.toUpperCase()}` });
};

exports.logoutUser = (req,res) => {
    res.render('index')
}