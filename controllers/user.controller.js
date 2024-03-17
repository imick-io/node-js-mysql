const User = require("../models/user");

exports.all = (req, res, next) => {
  User.all()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred" });
    });
};

exports.findById = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred" });
    });
};

exports.create = (req, res, next) => {
  const user = new User(req.body.name, req.body.email);
  user
    .create()
    .then((result) => {
      res.status(201).json({ message: "User created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred" });
    });
};
