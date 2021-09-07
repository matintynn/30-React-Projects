// Import action type from constants
import { actionTypes } from '../constants/actionTypes';

// we define the actions here, these actions will be attached to dispatch()
// action 1: the parameter (products) is the json data from online
export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCT,
        payload: products
    };
};

// action 2: the parameter (product) is the individual product with id
export const selectProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    };
};

// action 3: clean up action
export const removeSelectProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT
    };
};