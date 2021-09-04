import { BUY_ICECREAM } from "./iceCreamActions"

const initialState = {
    numOfIceCream: 15
}

export const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return { ...state, numOfIceCream: state.numOfIceCream - 1 }
        default:
            return state
    }
}