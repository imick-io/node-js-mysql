const express = require("express");

const errorController = require("./controllers/error.controller");

const db = require("./utils/database");

db.execute("SELECT * FROM users").then((res) => {
  console.log(res[0]);
});

const app = express();

app.use(errorController.get404);

app.listen(3000);
