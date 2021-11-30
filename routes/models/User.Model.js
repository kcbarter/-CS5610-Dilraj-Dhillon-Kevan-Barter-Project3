const mongoose = require("mongoose")
const UserSchema = require('../schema/User.Schema').UserSchema

const UserModel = mongoose.model("User", UserSchema);

function getUserByUsername(username) {
    return UserModel.find({ username: username }).exec();
}



// Make sure to export a function after you create it!
module.exports = {
    getUserByUsername,

};