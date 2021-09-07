// this reducer index.js for combine all the reducers and export the rootReducers
import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

export const rootReducer = combineReducers({
    productReducer: productReducer,
    selectedProductReducer: selectedProductReducer
})

// export default reducers;