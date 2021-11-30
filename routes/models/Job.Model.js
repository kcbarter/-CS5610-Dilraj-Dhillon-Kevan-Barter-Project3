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

function getJobByTitle(title) {
    return JobModel.find({ title: title }).exec();
}

// function insertPokemon(pokemon) {
//     return PokemonModel.create(pokemon);
// }

// Make sure to export a function after you create it!
module.exports = {
    getAllJobs,
    getJobsByTitle,
    getJobById,
    getJobByTitle,
};