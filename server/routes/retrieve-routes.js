const router = require("express").Router();
const User = require("../models/user"); 

router.get('/markers', (req, res) => {
    User.find({hasCharger: true }, 'username coordinates', (err, docs) => {
        if (err) throw err;
        res.send(docs)
    })
});

module.exports = router;