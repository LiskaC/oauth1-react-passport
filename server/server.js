require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Listening on ${port} `)
});

app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000"] // <== this will be the URL of our React app (it will be running on port 3000)
    })
  );

  module.exports = app;