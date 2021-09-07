import { actionTypes } from "../constants/actionTypes"

const initalState = {
    products: [],
}

export const productReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCT:
            return { ...state, products: action.payload };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SELECTED_PRODUCT:
            return { ...state, ...action.payload }
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}