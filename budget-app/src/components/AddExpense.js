import home from '../home.svg';
import { ExpenseContext } from '../contexts/ExpenseContexts';
import { useContext, useState } from "react";

const AddExpense = () => {
    const { dispatch } = useContext(ExpenseContext)
    const [exp, setExp] = useState('')
    const [cost, setCost] = useState('')

    const submitHandle = (e) => {
        dispatch({ type: 'ADD_EXP', name: exp, cost: cost, event: e })
        setExp('')
        setCost('')
    }

    return (
        <div className="container add-expense">
            <h5 className="text-dark">ADD EXPENSE:</h5>
            <div className="bg-primary p-5 rounded-3 shadow">
                <div className="row gap-5 justify-content-between align-items-center">
                    <form className="col-sm-5" onSubmit={(e) => submitHandle(e)}>
                        <input
                            onChange={(e) => setExp(e.target.value)}
                            value={exp}
                            type="text"
                            className="form-control mb-4"
                            placeholder="Type your expense..." />
                        <input
                            onChange={(e) => setCost(e.target.value)}
                            value={cost}
                            type="text"
                            className="form-control mb-4"
                            placeholder="Type the cost..." />
                        <button className="btn-save text-primary"> Save </button>
                    </form>
                    <div className="col-sm-5">
                        <img className="img-fluid" src={home} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddExpense;