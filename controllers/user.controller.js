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
