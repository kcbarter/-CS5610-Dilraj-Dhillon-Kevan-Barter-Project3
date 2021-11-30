const { response } = require('express');
const express = require('express');
const router = express.Router();
const JobAccessor = require('./models/Job.Model');

router.get('/findAllJobs', function (req, res) {
    return JobAccessor.getAllJobs()
        .then(jobResponse => res.status(200).send(jobResponse))
        .catch(error => res.status(400).send(error))
})

router.get('/findJobsByTitle/:jobTitle', function (req, res) {
    return JobAccessor.getJobsByTitle(req.params.jobTitle)
        .then(jobResponse => res.status(200).send(jobResponse))
        .catch(error => res.status(400).send(error))
})

router.get('/findJobById/:jobId', function (req, res) {
    return JobAccessor.getJobById(req.params.jobId)
        .then(jobResponse => res.status(200).send(jobResponse))
        .catch(error => res.status(400).send(error))
})

router.post('/createJob', function (req, res) {
    const { title, company, location, description, email } = req.body;
    if (!title || !company || !location || !description || !email) {
        return res.status(422).send("Missing data");
    }

    return JobAccessor.insertJob(req.body)
        .then(jobResponse => res.status(200).send(jobResponse))
        .catch(error => res.status(400).send(error))
})

router.put('/updateJob/:jobId', function (req, res) {
    return JobAccessor.updateJob(req.params.jobId, req.body)
        .then(jobResponse => res.status(200).send(jobResponse))
        .catch(error => res.status(400).send(error))
})

module.exports = router; // <== Look at our new friend, module.exports!