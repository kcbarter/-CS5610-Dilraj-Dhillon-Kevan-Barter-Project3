const Schema = require('mongoose').Schema;

exports.UserSchema = new Schema({
    username: String,
    password: String,
    favorites: [String],
    created: [String],
    // this explicitly declares what collection we're using
}, { collection: 'users' });