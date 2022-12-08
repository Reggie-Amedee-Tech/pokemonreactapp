const SavedPokemonController = require('../controller/savedPokemonController')

module.exports = function(app) {
    app.post("/api/pokemon/addPokemon", SavedPokemonController.addPokemon)
}

