import { actionTypes } from '../actions/actionTypes';

const initialState = {
    // set object bc we might have many states
    pokemons: [],
    currentUrl: 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=000',
    nextUrl: '',
    prevUrl: ''
}

export const pokemonReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_POKEMON:
            return { ...state, pokemons: payload }
        case actionTypes.CLEAN_UP:
            return { ...state, pokemons: [] }
        case actionTypes.SET_URL:
            return { ...state, currentUrl: payload };
        case actionTypes.NEXT_URL:
            return { ...state, nextUrl: payload };
        case actionTypes.PREV_URL:
            return { ...state, prevUrl: payload }
        default:
            return state;
    }
}

export const selectedPokemonReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_POKEMON:
            return { ...state, ...payload };
        case actionTypes.REMOVE_SELECTED_POKEMON:
            return {};
        default:
            return state;
    }
}