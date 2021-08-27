import { Link } from 'react-router-dom'
import { NavLinkMobile } from './NavbarElement';

const NavLinkMo = () => {
    return (
        <NavLinkMobile>
            <Link to='/services'>Services</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/signup'>Sign Up</Link>
        </NavLinkMobile>
    );
}

export default NavLinkMo;