import {
    SideMenuContainer,
    Logo,
    ArrowLeft,
    SearchContainer,
    Input,
    SearchIcon
} from "./SideMenuElements";
import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import NavLink from "./NavLink";

const SideMenu = () => {
    const [inactive, setInactive] = useState(false)

    return (
        <SideMenuContainer className={inactive && 'inactive'}>
            <Logo className='logo'>
                <img src={logo} alt="logo" />
                {/* toggle btn */}
                <ArrowLeft onClick={() => setInactive(prev => !prev)} />
            </Logo>
            <SearchContainer className='search-container'>
                <SearchIcon onClick={() => {
                    // Click searchIcon to expand the sideMenu
                    if (inactive) {
                        setInactive(prev => !prev)
                    }
                }} />
                <Input placeholder='Search' />
            </SearchContainer>
            <NavLink inactive={inactive} />
        </SideMenuContainer>
    );
}

export default SideMenu;