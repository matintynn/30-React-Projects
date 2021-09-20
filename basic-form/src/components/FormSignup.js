import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { formValidation } from './formValidation'
import { useForm } from './useForm'

const FormSignup = ({ submitedHandle }) => {
    const { values, errors, handleChange, handleSubmit } = useForm(formValidation, submitedHandle)
    const [showPass, setShowPass] = useState('password')

    const passwordToggle = () => {
        if (showPass === 'password') {
            setShowPass('text')
        } else {
            setShowPass('password')
        }
    }

    return (
        <div className='form-content-right'>
            <form
                className="form"
                onSubmit={e => handleSubmit(e)}
            >
                <h1>Sign-up today for free trial</h1>
                <div className="form-input">
                    <label htmlFor="username" className='form-label'>
                        Username:
                        <input
                            id='username'
                            type="text"
                            name='username'
                            autocomplete="off"
                            className='form-input'
                            placeholder='Enter your username...'
                            value={values.username}
                            onChange={e => handleChange(e)}
                        />
                        {errors.username && <p>{errors.username}</p>}
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="email" className='form-label'>
                        Email:
                        <input
                            id='email'
                            type="email"
                            name='email'
                            autocomplete="off"
                            className='form-input'
                            placeholder='Enter your email...'
                            value={values.email}
                            onChange={e => handleChange(e)}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="password" className='form-label'>
                        Password:
                        <div className="password-input">
                            <input
                                id='password'
                                type={showPass}
                                name='password'
                                autocomplete="off"
                                className='form-input'
                                placeholder='Enter your username...'
                                value={values.password}
                                onChange={e => handleChange(e)}
                            />
                            {showPass === 'password'
                                ? <AiFillEye onClick={() => passwordToggle()} className='showpass-icon' size='22px' />
                                : <AiFillEyeInvisible onClick={() => passwordToggle()} className='showpass-icon' size='22px' />
                            }
                        </div>
                        {errors.password && <p>{errors.password}</p>}
                    </label>
                </div>
                <button className="btn-submit" type='submit'>
                    Sign-up
                </button>
                <p className="form-login">
                    Already have an account? Login <a href="#">here</a>
                </p>
            </form>
        </div>
    )
}

export default FormSignup
