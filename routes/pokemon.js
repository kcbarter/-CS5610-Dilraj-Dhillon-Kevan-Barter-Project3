const express = require('express');
const router = express.Router();
const PokemonAccessor = require('./models/Pokemon.Model');

// Returns all known pokemon
router.get('/findAll', function (request, response) {
  return PokemonAccessor.getAllPokemon()
    .then(pokemonResponse => response.status(200).send(pokemonResponse))
    .catch(error => response.status(400).send(error))
})

router.get('/find/:pokemonName', function (req, res) {
  return PokemonAccessor.findPokemonByName(req.params.pokemonName)
    .then(pokemonResponse => res.status(200).send(pokemonResponse))
    .catch(error => res.status(400).send(error))
})

router.post('/create', (request, response) => {
  const { name, health } = request.body;
  if (!name || !health) {
    return response.status(422).send("Missing data");
  }

  return PokemonAccessor.findPokemonByName(name)
    .then((pokemonResponse) => {
      if (pokemonResponse.length) {
        response.status(402).send("Pokemon with that name already exists")
      } else {
        PokemonAccessor.insertPokemon(request.body)
          .then(pokemonResponse => response.status(200).send(pokemonResponse))
          .catch(error => response.status(400).send(error))

      }

    })
})

module.exports = router; // <== Look at our new friend, module.exports!