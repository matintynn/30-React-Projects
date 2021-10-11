import React from 'react'
import './Menu.scss'
import { MdClose } from 'react-icons/md'

const Menu = ({ isOpen, setIsOpen }) => {
    return (
        <div className={isOpen ? 'menu active' : 'menu'} onClick={() => setIsOpen(!isOpen)}>
            <MdClose color='#fff' size='30px' className='icon' onClick={() => setIsOpen(!isOpen)} />
            <ul>
                <li>
                    <a href="#intro" onClick={() => setIsOpen(!isOpen)}>Home</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => setIsOpen(!isOpen)}>Portfolio</a>
                </li>
                {/* <li>
                    <a href="#works" onClick={() => setIsOpen(!isOpen)}>Works</a>
                </li> */}
                <li>
                    <a href="#testimonials" onClick={() => setIsOpen(!isOpen)}>Testomonials</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setIsOpen(!isOpen)}>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
