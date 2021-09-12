import { actionTypes } from "./actionTypes";

// Set pokemons action
export const setPokemon = (pokemons) => {
    return {
        type: actionTypes.SET_POKEMON,
        payload: pokemons
    }
}

export const cleanUp = () => {
    return {
        type: actionTypes.CLEAN_UP,
    }
}

export const selectedPokemon = (pokemon) => {
    return {
        type: actionTypes.SELECTED_POKEMON,
        payload: pokemon
    }
}

export const removeSelectedPokemon = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_POKEMON,
    }
}

export const setUrl = (url) => {
    return {
        type: actionTypes.SET_URL,
        payload: url
    }
}

export const nextUrl = (url) => {
    return {
        type: actionTypes.NEXT_URL,
        payload: url
    }
}

export const prevUrl = (url) => {
    return {
        type: actionTypes.PREV_URL,
        payload: url
    }
}