const router = require("express").Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const bcryptSalt = 10;
const User = require("../models/user"); 

//Creates new Users
router.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    
 /*  // allows identification of keys in the req.body object ( returned as: [ object Object ])
     for (var key in req.body) {
        console.log(key);
        }

    // uses an identified key (username) to access the associated value
 console.log("register request body: " + req.body.username);
      
      */

    User.findOne({username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const newUser = new User({
                username,
                password: hashPass
            });
            await newUser.save()
            res.send("New user created");
        }
    })
});


router.post('/login', (req, res) => {
    passport.authenticate("local", (err, user, info) => {
        console.log("in /login passport authenticate");
        if (err) throw err;
        if (!user) res.send("No User Exists")
        else {
            req.logIn(user, err => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log("in /login passport authenticate, requested user: " + req.user);
            })
        }
    }) (req, res) // call func
});


router.get('/user', (req, res) => {
    res.send(req.user);
    console.log(req.body);
});

module.exports = router;