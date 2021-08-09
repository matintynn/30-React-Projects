import { nanoid } from "nanoid";

export const fruitReducer = (state, action) => {
    switch (action.type) {
        case "ADD_FRUIT":
            return [...state, {
                name: action.fruit.name,
                cal: action.fruit.cal,
                id: nanoid()
            }]
        case "REMOVE_FRUIT":
            return state.filter(fruit => fruit.id !== action.id)
        default:
            return state
    }
}