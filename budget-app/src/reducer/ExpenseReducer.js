import { nanoid } from "nanoid";

const ExpenseReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXP':
            action.event.preventDefault()
            return [{ budget: state[0].budget, expenses: [...state[0].expenses, { id: nanoid(), name: action.name, cost: action.cost }] }]
        case 'EDIT_BUDGET':
            return [{ budget: action.newBudget, expenses: [...state[0].expenses] }]
        case 'RESET_EXP':
            return [{ budget: state[0].budget, expenses: [] }]
        case 'DELETE_EXPENSE':
            return [{ budget: state[0].budget, expenses: state[0].expenses.filter(exp => exp.id !== action.id) }]
        default:
            return state
    }
}

export default ExpenseReducer;