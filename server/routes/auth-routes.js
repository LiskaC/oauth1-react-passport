const router = require("express").Router();
const User = require("../schemas/user"); 

router.post('/register', (req, res) => {
    console.log(req.body);

    User.findOne({username: req.body.username}, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            });
            await newUser.save()
            res.send("New user created");
        }
    })
});


router.post('/login', (req, res) => {
    console.log(req.body);
});


router.get('/user', (req, res) => {
    console.log(req.body);
});

module.exports = router;