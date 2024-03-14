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
