import { createContext, useReducer, useState } from "react";
import ExpenseReducer from "../reducer/ExpenseReducer";

export const ExpenseContext = createContext()

// const initialExpense = {
//     budget: 3000,
//     expenses: [
//         { id: 1, name: 'Air ticket', cost: 1200 },
//         { id: 2, name: 'Street food', cost: 200 }
//     ]
// }

const initialExpense = [{
    budget: 3000,
    expenses: []
}]

const ExpenseContextProvider = (props) => {
    const [state, dispatch] = useReducer(ExpenseReducer, initialExpense)
    const [searchText, setSearchText] = useState('')

    return (
        <ExpenseContext.Provider value={{
            // destructure the obj of expenses here is easy for later use, which dont have do it in other components
            // note: bc I assigned array for initialExpense, so I have to destructure it like below
            budget: state[0].budget,
            // filter out here for the search feature
            expenses: state[0].expenses.filter(exp => exp.name.includes(searchText)),
            searchText,
            setSearchText,
            // budget: state.budget,
            // expenses: state.expenses,
            dispatch
        }}>
            {props.children}
        </ExpenseContext.Provider>
    );
}

export default ExpenseContextProvider;