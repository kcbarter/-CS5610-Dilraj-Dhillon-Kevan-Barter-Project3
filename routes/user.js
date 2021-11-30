const { response } = require('express');
const express = require('express');
const router = express.Router();
const UserAccessor = require('./models/User.Model');


router.get('/findUserByUsername/:username', function (req, res) {
    return UserAccessor.getUserByUsername(req.params.username)
        .then(userResponse => res.status(200).send(userResponse))
        .catch(error => res.status(400).send(error))
})

module.exports = router; // <== Look at our new friend, module.exports!