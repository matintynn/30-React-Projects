import { RiMoneyDollarCircleLine, RiPieChartLine, RiAlarmWarningLine } from 'react-icons/ri';
import { ExpenseContext } from '../contexts/ExpenseContexts';
import { useContext, useState } from 'react';

const CostManagement = () => {
    const { budget, expenses, dispatch } = useContext(ExpenseContext)
    const [isEdit, setIsEdit] = useState(false)
    // set newBudget = current budget to compare when submit save btn
    const [newBudget, setNewBudget] = useState(budget)
    const total = expenses.reduce((sum, exp) => {
        return sum += parseInt(exp.cost)
    }, 0)

    const alertType = total > budget ? 'budget-danger' : 'bg-white'
    const iconType = total > budget ? 'icon-bg-danger' : 'bg-icons'
    const iconColor = total > budget ? 'icon-danger' : 'text-primary'

    const textForRemain = (budget - total) > (budget / 2) ? 'Good' : (budget - total) < 0 ? 'Budget overun' : (budget - total) === 0 ? 'no remaining' : 'Not much left'
    const textForSpent = (budget - total) > (budget / 3) ? 'So far so good' : (budget - total) < 0 ? 'Spent over budget!' : (budget - total) === 0 ? 'Spent well' : 'About to alarm'

    const changeHandle = () => {
        setIsEdit(!isEdit)
        if (newBudget !== budget) {
            dispatch({ type: 'EDIT_BUDGET', newBudget })
        }
    }

    return (
        <div className="pb-5">
            <div className="pb-1">
                <h5 className="text-white mb-0 mt-4">OVERVIEW:</h5>
                <p className="text-white opacity-50">Cost management</p>
            </div>
            <div className="container">
                <div className="row gap-3 mb-5">
                    <div className="shadow d-flex flex-column align-items-center col-sm bg-white rounded-3">
                        <div className="d-flex flex-column align-items-center mt-3">
                            <div className="bg-icons">
                                <RiMoneyDollarCircleLine size="2.3em" className="text-primary" />
                            </div>
                            <p className="text-muted">Budget</p>
                        </div>
                        {/* <h1 className="mt-0 mb-0"><strong>${budget}</strong></h1>
                        <p className="btn btn-outline-primary mt-3" onClick={() => dispatch({ type: 'EDIT_BUDGET' })}>Edit</p> */}
                        {isEdit ?
                            (<div>
                                <input type="text" className="mt-0 mb-0 edit-input text-muted form-control" placeholder={budget} onChange={(e) => setNewBudget(e.target.value)} />
                                <p className="btn btn-outline-primary mt-3 d-flex justify-content-center" onClick={() => changeHandle()}>Save</p>
                            </div>) :
                            (<div>
                                <h1 className="mt-0 mb-0"><strong>${budget}</strong></h1>
                                <p className="btn btn-outline-primary mt-3 d-flex justify-content-center" onClick={() => changeHandle()}>Edit</p>
                            </div>)
                        }
                    </div>
                    <div className={`shadow d-flex flex-column align-items-center col-sm rounded-3 ${alertType}`}>
                        <div className="d-flex flex-column align-items-center mt-3">
                            <div className={`${iconType}`}>
                                <RiPieChartLine size="2.3em" className={`${iconColor}`} />
                                {/* <RiPieChartLine size="2.3em" className="text-primary" /> */}
                            </div>
                            <p className="text-muted">Remaining</p>
                        </div>
                        <h1 className="mt-0 mb-0"><strong>${budget - total}</strong></h1>
                        <p className="text-muted mt-3">{textForRemain}</p>
                    </div>
                    <div className={`shadow d-flex flex-column align-items-center col-sm rounded-3 ${alertType}`}>
                        <div className="d-flex flex-column align-items-center mt-3">
                            <div className={`${iconType}`}>
                                <RiAlarmWarningLine size="2.3em" className={`${iconColor}`} />
                            </div>
                            <p className="text-muted">Spent</p>
                        </div>
                        <h1 className="mt-0 mb-0"><strong>${total}</strong></h1>
                        <p className="text-muted mt-3">{textForSpent}</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CostManagement;