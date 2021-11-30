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

router.get('/findJobByTitle/:jobTitle', function (req, res) {
    return JobAccessor.getJobByTitle(req.params.jobTitle)
        .then(jobResponse => res.status(200).send(jobResponse))
        .catch(error => res.status(400).send(error))
})

// router.get('/findAll', function (request, response) {
//     return PokemonAccessor.getAllPokemon()
//         .then(pokemonResponse => response.status(200).send(pokemonResponse))
//         .catch(error => response.status(400).send(error))
// })

// router.get('/find/:pokemonName', function (req, res) {
//     return PokemonAccessor.findPokemonByName(req.params.pokemonName)
//         .then(pokemonResponse => res.status(200).send(pokemonResponse))
//         .catch(error => res.status(400).send(error))
// })

// router.post('/create', (request, response) => {
//     const { name, health } = request.body;
//     if (!name || !health) {
//         return response.status(422).send("Missing data");
//     }

//     return PokemonAccessor.findPokemonByName(name)
//         .then((pokemonResponse) => {
//             if (pokemonResponse.length) {
//                 response.status(402).send("Pokemon with that name already exists")
//             } else {
//                 PokemonAccessor.insertPokemon(request.body)
//                     .then(pokemonResponse => response.status(200).send(pokemonResponse))
//                     .catch(error => response.status(400).send(error))
//             }
//         })
// })

module.exports = router; // <== Look at our new friend, module.exports!