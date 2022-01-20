const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const requireLogin = require("../Middleware/requireLogin");
let User = require("../model/User");
require("dotenv").config();

exports.Register = (req, res) => {
  const Username = req.body.Username;
  const Password = req.body.Password;
  if (!Username || !Password) {
    res.status(422).json({ msg: "Please Enter Username or Password" });
  }
  User.findOne({ Username: Username })
    .then((users) => {
      if (users) {
        res.json({ msg: "There is an Existing Account" });
      }
    })
    .catch((err) => res.status(400).json("The Error is : " + err));
  bcrypt.hash(Password, 12).then((hashedpassword) => {
    const newUser = new User({ Username, Password: hashedpassword });
    newUser
      .save()
      .then(() => res.json({ msg: "user Added" }))
      .catch((err) =>
        res.status(400).json({ msg: "Error Posting a Data : " + err })
      );
  });
};

exports.protected = (req, res) => {
  res.json(req.user);
};
exports.Signin = (req, res) => {
  const Username = req.body.Username;
  const Password = req.body.Password;

  User.findOne({ Username: Username })
    .then((users) => {
      if (!users) {
        res.status(402).json("Please Enter The Right Username");
      }
      bcrypt
        .compare(Password, users.Password)
        .then((doMatch) => {
          if (doMatch) {
            const token = jwt.sign({ _id: users._id }, process.env.JWT_SECRET);
            res.json({ token });
          } else {
            return res.status(422).json("Invalid Username or Password");
          }
        })
        .catch((err) => console.log("There is an Error Signing in : " + err));
    })
    .catch((err) => res.status(400).json("The Error is : " + err));
};
