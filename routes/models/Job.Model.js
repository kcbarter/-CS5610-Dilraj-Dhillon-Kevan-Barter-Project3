const mongoose = require("mongoose")
const JobSchema = require('../schema/Job.Schema').JobSchema

const JobModel = mongoose.model("Job", JobSchema);

function getJobsByTitle(title) {
    return JobModel.find({ title: /title/i }).exec();
}

function getJobById(id) {
    return JobModel.findById(id).exec();
}

// function insertPokemon(pokemon) {
//     return PokemonModel.create(pokemon);
// }


// function findPokemonByName(name) {
//     return PokemonModel.find({ name: name }).exec();
// }

// Make sure to export a function after you create it!
module.exports = {
    getJobsByTitle,
    getJobById,
};