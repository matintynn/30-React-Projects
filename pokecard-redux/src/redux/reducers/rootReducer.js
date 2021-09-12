import { combineReducers } from 'redux';
import { pokemonReducer, selectedPokemonReducer } from './pokemonReducer';

export const rootReducers = combineReducers({
    pokemonReducer,
    selectedPokemonReducer
})
