import { AiFillHome, AiFillHeart, AiFillMessage, AiFillTrophy } from "react-icons/ai";
import { NavLinkContainer, LinkContainer } from "./SideMenuElements";
import { NavLink as Link } from 'react-router-dom'

const NavLink = ({ inactive }) => {
    // Note: these navlinks just for mockup the dashboard sidebar UI
    // in real world, I will create pages and replace <li> tag in the styled-component by <NavLink> component from react-router-dom
    return (
        <NavLinkContainer className={inactive && 'align'}>
            <LinkContainer>
                <AiFillHome />
                {/* add exact to '/' to get only 1 active class */}
                {!inactive && <Link exact to='/'>Home</Link>}
            </LinkContainer>
            <LinkContainer>
                <AiFillHeart />
                {!inactive && <Link to='/favorites'>Favorites</Link>}
            </LinkContainer>
            <LinkContainer>
                <AiFillMessage />
                {!inactive && <Link to='message'>Message</Link>}
            </LinkContainer>
            <LinkContainer>
                <AiFillTrophy />
                {!inactive && <Link to='rewards'>Rewards</Link>}
            </LinkContainer>
        </NavLinkContainer>
    );
}

export default NavLink;