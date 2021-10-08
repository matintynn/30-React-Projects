import React from 'react'
import { menuData } from '../../data/MenuData'
import { Button } from '../Button'
// import { FaBars } from 'react-icons/fa'
import {
    Nav,
    Logo,
    MenuBars,
    NavMenu,
    NavMenuLinks,
    NavBtn
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <Logo to='/'>ITSHOME</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav >
    )
}

export default Navbar
