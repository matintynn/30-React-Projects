import { useState } from 'react'
import image from '../image.svg'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'

const Form = () => {
    const [isSubmited, setIsSubmited] = useState(false)

    const submitedHandle = () => {
        setIsSubmited(!isSubmited)
    }
    return (
        <div className='popup-container'>
            <div className="promotion-img">
                <img src={image} alt='promotion' />
            </div>
            <div className="form-container">
                {isSubmited
                    ? <FormSuccess />
                    : <FormSignup submitedHandle={submitedHandle} />
                }
            </div>
        </div>
    )
}

export default Form
