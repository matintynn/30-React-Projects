import React from 'react'
import './Header.css'
import heroImg from '../../images/hero-img.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img
                src={heroImg}
                alt="hero pic"
                className="headerImg" />
        </div>
    )
}

export default Header
