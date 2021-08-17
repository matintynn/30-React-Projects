
export const moviesReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            return action.data.Search
        default:
            return state
    }
}