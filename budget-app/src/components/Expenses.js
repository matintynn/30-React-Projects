import { RiSearchLine } from "react-icons/ri";
import ExpenseList from "./ExpenseList";
import { ExpenseContext } from '../contexts/ExpenseContexts';
import { useContext } from "react";

const Expenses = () => {
    const { searchText, setSearchText, dispatch } = useContext(ExpenseContext)

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-dark">EXPENSES:</h5>
                <p
                    className="btn btn-outline-primary"
                    onClick={() => dispatch({ type: 'RESET_EXP' })}
                >
                    Reset expenses
                </p>
            </div>
            <div className="form-control d-flex py-3">
                <RiSearchLine
                    className="text-muted"
                    size="1.6em" />
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    type="text"
                    className="custom-input"
                    placeholder="Search expense..." />
            </div>
            <ExpenseList />
        </div>
    );
}

export default Expenses;