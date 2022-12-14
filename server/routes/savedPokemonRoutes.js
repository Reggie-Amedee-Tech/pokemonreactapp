const SavedPokemonController = require('../controller/savedPokemonController')

module.exports = function(app) {
    app.post("/api/pokemon/addPokemon", SavedPokemonController.addPokemon);
    app.get("/api/pokemon/allPokemonList", SavedPokemonController.allPokemonList);
    app.get("/api/pokemon/allPokemonList/:id", SavedPokemonController.getListDetails);
}

