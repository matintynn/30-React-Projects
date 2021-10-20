import React from 'react'
import './Navbar.css'
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = false;
    return (
        <div className='navbar'>
            <div className="topLeft">
                <FaFacebookSquare size='22px' />
                <FaInstagramSquare size='22px' />
                <FaTwitterSquare size='22px' />
            </div>
            <div className="topCenter">
                <ul className="toplist">
                    <li className='toplistItem'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='toplistItem'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='toplistItem'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className='toplistItem'>
                        <Link to='/write'>Write</Link>
                    </li>
                    <li className='toplistItem'>
                        {user && <Link to='/'>Logout</Link>}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img
                        className='topImg'
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="avatar"
                    />
                ) : (
                    <ul className='login-regis'>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                    </ul>
                )
                }

                <FaSearch />
            </div>
        </div>
    )
}

export default Navbar
