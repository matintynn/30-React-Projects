import React from 'react'
import submitted from '../submitted.svg'

const FormSuccess = () => {
    return (
        <div>
            <div className="right-container">
                <img src={submitted} alt='successfully submitted' />
                <h3>Submitted successful</h3>
            </div>
        </div>
    )
}

export default FormSuccess
