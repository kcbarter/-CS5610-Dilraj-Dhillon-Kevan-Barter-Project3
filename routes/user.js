const express = require('express');
const router = express.Router();
const UserAccessor = require('./models/User.Model');
const auth_middleware = require('./auth_middleware.js')

router.get('/findAllUsers', function (req, res) {
    return UserAccessor.getAllUsers()
        .then(userResponse => res.status(200).send(userResponse))
        .catch(error => res.status(400).send(error))
})

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
            if (userResponse) {
                res.status(402).send("Username already exists")
            } else {
                return UserAccessor.insertUser(req.body)
                    .then(userResponse => res.status(200).send(userResponse))
                    .catch(error => res.status(400).send(error))
            }
        })
})

router.get('/findAllFavoriteJobsByUsername/:username', function (req, res) {
    return UserAccessor.getAllFavoriteJobsByUsername(req.params.username)
        .then(userResponse => res.status(200).send(userResponse))
        .catch(error => res.status(400).send(error))
})

router.post('/createFavoriteJobOfUser/:username/:jobId', function (req, res) {
    return UserAccessor.insertFavoriteJobOfUser(req.params.username, req.params.jobId)
        .then(userResponse => res.status(200).send(userResponse))
        .catch(error => res.status(400).send(error))
})

router.delete('/deleteFavoriteJobOfUser/:username/:jobId', function (req, res) {
    return UserAccessor.deleteFavoriteJobOfUser(req.params.username, req.params.jobId)
        .then(userResponse => res.status(200).send(userResponse))
        .catch(error => res.status(400).send(error))
})

router.get('/findAllCreatedJobsByUsername/:username', function (req, res) {
    return UserAccessor.getAllCreatedJobsByUsername(req.params.username)
        .then(userResponse => res.status(200).send(userResponse))
        .catch(error => res.status(400).send(error))
})

router.post('/createCreatedJobOfUser/:username/:jobId', function (req, res) {
    return UserAccessor.insertCreatedJobOfUser(req.params.username, req.params.jobId)
        .then(userResponse => res.status(200).send(userResponse))
        .catch(error => res.status(400).send(error))
})

router.delete('/deleteCreatedJobOfUser/:username/:jobId', function (req, res) {
    return UserAccessor.deleteCreatedJobOfUser(req.params.username, req.params.jobId)
        .then(userResponse => res.status(200).send(userResponse))
        .catch(error => res.status(400).send(error))
})

router.post('/authenticate', function (req, res) {
    let { username, password } = req.body; // make sure form is strings
    if (!username || !password) {
        return res.status(422).send('Must include both password and username');
    }

    return UserAccessor.getUserByUsername(username)
        .then((userResponse) => {
            if (!userResponse) {
                return res.status(404).send("No user found with that username");
            }
            if (userResponse.password === password) {
                req.session.username = username;
                return res.status(200).send({ username });
            } else {
                return res.status(404).send("No user found with that password");
            }
        })
        .catch((error) => console.error(`Something went wrong: ${error}`));
})

router.get('/whoIsLoggedIn', auth_middleware, function (req, res) {
    const username = req.session.username;
    return res.send(username);
})

router.delete('/logOut', function (req, res) {
    req.session.destroy();
    return res.status(200).send(req.session);
})

module.exports = router; // <== Look at our new friend, module.exports!