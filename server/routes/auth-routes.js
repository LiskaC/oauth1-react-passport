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
                password: hashPass,
                hasCharger: false,
                geometry: {latitude: 0, longitude: 0} // should these be null as placeholders? 
            });
            await newUser.save()
            res.send("New user created");
        }
    })
});


router.post('/login', (req, res) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists")
        else {
            req.logIn(user, err => {
                if (err) throw err;
                res.send("Successfully Authenticated");
            })
        }
    }) (req, res) // call func
});


router.get('/user', (req, res) => {
    res.send(req.user);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.send(req.user)
});



module.exports = router;