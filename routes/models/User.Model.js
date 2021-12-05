const mongoose = require("mongoose")
const UserSchema = require('../schema/User.Schema').UserSchema

const UserModel = mongoose.model("User", UserSchema);

function getAllUsers() {
    return UserModel.find().exec();
}

function getUserByUsername(username) {
    return UserModel.findOne({ username: username }).exec();
}

function insertUser(user) {
    return UserModel.create(user);
}

function getAllFavoriteJobsByUsername(username) {
    return UserModel.find({ username: username }, 'favorites').exec();
}

function insertFavoriteJobOfUser(username, jobId) {
    return UserModel.findOneAndUpdate({ username: username }, { $addToSet: { favorites: jobId } });
}

function deleteFavoriteJobOfUser(username, jobId) {
    return UserModel.findOneAndUpdate({ username: username }, { $pull: { favorites: jobId } });
}

function getAllCreatedJobsByUsername(username) {
    return UserModel.find({ username: username }, 'created').exec();
}

function insertCreatedJobOfUser(username, jobId) {
    return UserModel.findOneAndUpdate({ username: username }, { $addToSet: { created: jobId } });
}

function deleteCreatedJobOfUser(username, jobId) {
    return UserModel.findOneAndUpdate({ username: username }, { $pull: { created: jobId } });
}

// Make sure to export a function after you create it!
module.exports = {
    getAllUsers,
    getUserByUsername,
    insertUser,
    getAllFavoriteJobsByUsername,
    insertFavoriteJobOfUser,
    deleteFavoriteJobOfUser,
    getAllCreatedJobsByUsername,
    insertCreatedJobOfUser,
    deleteCreatedJobOfUser,
};