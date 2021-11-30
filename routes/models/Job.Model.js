const mongoose = require("mongoose")
const JobSchema = require('../schema/Job.Schema').JobSchema

const JobModel = mongoose.model("Job", JobSchema);

function getAllJobs() {
    return JobModel.find().exec();
}

function getJobsByTitle(title) {
    return JobModel.find({ title: { $regex: title, $options: 'i' } }).exec();
}

function getJobById(id) {
    return JobModel.findById(id).exec();
}

function insertJob(job) {
    return JobModel.create(job);
}

function updateJob(id, job) {
    return JobModel.findByIdAndUpdate(id, job)
}

// Make sure to export a function after you create it!
module.exports = {
    getAllJobs,
    getJobsByTitle,
    getJobById,
    insertJob,
    updateJob,
};