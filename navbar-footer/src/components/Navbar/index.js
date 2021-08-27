import React, { useState } from 'react';
import { Nav, NavLink, Bars, Minus, NavMenu, NavBtn, NavBtnLink } from './NavbarElement';
import { FaBullseye } from 'react-icons/fa'
import NavLinkMo from './NavLinkMobile';
import { useSpring, animated } from 'react-spring'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const animation = useSpring({
        config: {
            duration: 250
        },
        delay: 350,
        opacity: click ? 1 : 0,
        transform: click ? `translateY(0%)` : `translateY(-100%)`
    })

    const clickHandle = (e) => {
        e.preventDefault()
        setClick(prev => !prev)
        console.log(click)
    }

    return (
        <>
            <Nav>
                <NavLink to='/'>
                    {/* <h1>LOGO</h1> */}
                    <FaBullseye size='20px' />
                    <h1 style={{ margin: 6 }}>Logo</h1>
                </NavLink>
                {click ? <Minus onClick={(e) => clickHandle(e)} /> : <Bars onClick={(e) => clickHandle(e)} />}
                <NavMenu>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/signup'>Sign Up</NavLink>
                    {/* 2rd nav style */}
                    {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}
                </NavMenu>
                {/* 1st & 3rd nav style */}
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
            {click &&
                <animated.div style={animation}>
                    <NavLinkMo />
                </animated.div>

            }
        </>
    );
}

export default Navbar;