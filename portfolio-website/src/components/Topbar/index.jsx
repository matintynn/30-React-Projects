import React from 'react'
import './Topbar.scss'
import { MdPerson, MdEmail, MdMenu, MdClose } from 'react-icons/md'

const Topbar = ({ isOpen, setIsOpen }) => {
    return (
        <div className={isOpen ? 'topbar active' : 'topbar'}>
            <div className="wrapper">
                <div className="left">
                    {/* change to Link later */}
                    <a href="#intro" className='logo'>My Portfolio</a>
                    <div className="itemContainer">
                        <MdPerson className='icon' /> <span>647-618-9671</span>
                    </div>
                    <div className="itemContainer">
                        <MdEmail className='icon' /> <span>contact.me@myport.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <MdClose color='#fff' size='32px' /> : <MdMenu size='32px' />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
