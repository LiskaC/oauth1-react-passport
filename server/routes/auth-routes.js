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
    
    console.log("register request body: " + req.body);

    User.findOne({username, hashPass}, async (err, doc) => {
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
        console.log("in here");
        if (err) throw err;
        if (!user) res.send("No User Exists")
        else {
            req.logIn(user, err => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(req.user);
            })
        }
    }) (req, res) // call function
});


router.get('/user', (req, res) => {
    res.send(req.user);
    console.log(req.body);
});

module.exports = router;