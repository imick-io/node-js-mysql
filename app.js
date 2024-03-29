const express = require("express");
const app = express();

const errorController = require("./controllers/error.controller");
const userRoutes = require("./routes/user");

// Parse the body to json
app.use(express.json());

// Routes middlewares
app.use("/users", userRoutes);
app.use(errorController.get404);

// Start the server
app.listen(3000);
