const mongoose = require("mongoose")
const UserSchema = require('../schema/User.Schema').UserSchema

const UserModel = mongoose.model("User", UserSchema);

function getAllUsers() {
    return UserModel.find().exec();
}

function getUserByUsername(username) {
    return UserModel.find({ username: username }).exec();
}

function insertUser(user) {
    return UserModel.create(user);
}

function getAllUserFavoritesByUsername(username) {
    return UserModel.find({ username: username }, 'ofFavorites').exec();
}

// Make sure to export a function after you create it!
module.exports = {
    getAllUsers,
    getUserByUsername,
    insertUser,
    getAllUserFavoritesByUsername,
};