import { combineReducers } from "redux";
import getPokemonReducer from "./features//GetPokemonList/getPokemonReducer";
import selectPokemonReducer from "./features/SelectPokemon/selectPokemonReducer";

export const rootReducer = combineReducers({
    getPokemon: getPokemonReducer,
    selectPokemon: selectPokemonReducer
})

