const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    hasCharger: Boolean,
    coordinates: {latitude: Number, longitude: Number}
});

const User = mongoose.model("user", userSchema)

module.exports = User;