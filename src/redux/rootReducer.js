import { combineReducers } from "redux";
import getPokemonReducer from "./features//GetPokemonList/getPokemonReducer";
import selectPokemonReducer from "./features/SelectPokemon/selectPokemonReducer";
import detailedPokemonReducer from "./features/DetailedPokemon/detailedPokemonReducer";

export const rootReducer = combineReducers({
    getPokemon: getPokemonReducer,
    selectPokemon: selectPokemonReducer,
    detailedPokemon: detailedPokemonReducer
})

