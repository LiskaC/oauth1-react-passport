const router = require("express").Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/user"); 

router.post('/charger', (req, res) => {
    const username = req.body.username;
    

    User.findOneAndUpdate({username: req.body.username }, {
        //hasCharger needs to be changed to the req.body.hasCharger once there is a way for people to toggle this between true/false
                hasCharger: true,
                coordinates: 
                {latitude: req.body.latitude, 
                longitude: req.body.longitude} 
    }).then(() => {
        res.send("USER updated");
    }).catch(err => console.log(err))
});

module.exports = router;