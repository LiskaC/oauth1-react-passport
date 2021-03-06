require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth-routes");
const updateRoutes = require("./routes/update-routes");
const retrieveRoutes = require("./routes/retrieve-routes");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000"] // <== URL of React app (it will be running on port 3000)
    })
  );

app.use(
  session({
    secret: "38RDJjdsd4t5udDFGUEI934J",
    resave: true,
    saveUninitialized: true,
    maxAge: 365 * 24 * 60 * 60 * 1000
}));

app.use(cookieParser("38RDJjdsd4t5udDFGUEI934J"));

//initialise passport
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport-setup")(passport);


//connect to mongodb
mongoose.connect('mongodb://localhost:27017/oauth-react-nodejs-app', { useNewUrlParser: true, useUnifiedTopology: true  }, () => {
  console.log("connected to mongodb");
});
mongoose.set('useFindAndModify', false);
var db = mongoose.connection;

//-------------------------END OF MIDDLEWARE-------------------------//

// Routes
app.use("/auth", authRoutes);
app.use("/update", updateRoutes);
app.use("/retrieve", retrieveRoutes);

  app.listen(port, () => {
      console.log(`Listening on ${port} `)
  });

  module.exports = app;