const { response } = require('express');
const express = require('express');
const router = express.Router();
const UserAccessor = require('./models/User.Model');


router.get('/findUserByUsername/:username', function (req, res) {
    return UserAccessor.getUserByUsername(req.params.username)
        .then(userResponse => res.status(200).send(userResponse))
        .catch(error => res.status(400).send(error))
})

router.post('/createUser', function (req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(422).send("Missing data");
    }

    UserAccessor.getUserByUsername(req.body["username"])
        .then(userResponse => {
            if (userResponse.length) {
                res.status(402).send("Username already exists")
            } else {
                return UserAccessor.insertUser(req.body)
                    .then(userResponse => res.status(200).send(userResponse))
                    .catch(error => res.status(400).send(error))
            }
        })
})

module.exports = router; // <== Look at our new friend, module.exports!