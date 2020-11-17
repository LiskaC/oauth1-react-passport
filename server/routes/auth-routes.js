const router = require("express").Router();
const User = require("../schemas/user"); 

router.post('/register', (req, res) => {
    console.log(req.body);
})


router.post('/login', (req, res) => {
    console.log(req.body);
})


router.get('/user', (req, res) => {
    console.log(req.body);
})

module.exports = router;