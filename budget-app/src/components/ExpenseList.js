// import { nanoid } from 'nanoid'
import { useContext } from 'react';
import { RiDeleteBin2Line } from "react-icons/ri";
import { ExpenseContext } from '../contexts/ExpenseContexts';

const ExpenseList = () => {
    // const expenses = [
    //     { id: nanoid(), name: "Air ticket", cost: 1200 },
    //     { id: nanoid(), name: "Book hostel", cost: 300 },
    //     { id: nanoid(), name: "Round trip bus tickets", cost: 120 },
    //     { id: nanoid(), name: "Temple entrance fee", cost: 10 },
    //     { id: nanoid(), name: "Explore jungle tour", cost: 100 }
    // ]
    const { expenses, dispatch } = useContext(ExpenseContext)

    return (
        <div className="my-3">
            <ul className="list-group">
                {expenses.map(expense => {
                    return <li key={expense.id} className="list-group-item d-flex justify-content-between align-items-center py-3 list">
                        <p className="m-0">{expense.name}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="m-0 me-3 h6">${expense.cost}</p>
                            <div className="icon-btn">
                                <RiDeleteBin2Line size="1.6em" onClick={() => dispatch({ type: 'DELETE_EXPENSE', id: expense.id })} />
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default ExpenseList;