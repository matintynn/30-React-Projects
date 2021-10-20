import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="email" placeholder='Enter your email' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password' />
                <button className="loginBtn">Login</button>
            </form>
            <button className="btn">
                <Link to='/register'>Register</Link>
            </button>
        </div>
    )
}

export default Login
