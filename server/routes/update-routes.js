const router = require("express").Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/user"); 

router.post('/charger', (req, res) => {
    const username = req.body.username;
    

    User.findOneAndUpdate({username: req.body.username }, {
                hasCharger: true,
                coordinates: 
                {latitude: req.body.latitude, 
                longitude: req.body.longitude} 
    }).then(() => {
        res.send("USER updated");
    }).catch(err => console.log(err))
});

module.exports = router;