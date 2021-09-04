import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";

export const rootReducers = combineReducers({
    // ES6 syntax
    cakeReducer,
    iceCreamReducer
    // cakeReducer: cakeReducer,
    // iceCreamReducer: iceCreamReducer
})
