import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CgMenu, CgClose } from 'react-icons/cg'
import Button from '../button/Button'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 768) {
            setButton(false)
        } else {
            setButton(true)
        }
    };


    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        WANDERIFY.
                    </Link>
                    <div className="menu-icon">
                        {click ? <CgClose style={{ color: '#fff' }} size='24px' onClick={handleClick} /> : <CgMenu onClick={handleClick} style={{ color: '#fff' }} size='24px' />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <Link to='/' onClick={handleClick} className='nav-links'>
                            Home
                        </Link>
                        <Link to='/' onClick={handleClick} className='nav-links'>
                            Tours
                        </Link>
                        <Link to='/' onClick={handleClick} className='nav-links'>
                            Contact
                        </Link>
                        <Link to='/' onClick={handleClick} className='signup-btn'>
                            SIGN UP
                        </Link>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </div>
        </>
    )
}

export default Navbar
