import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

// Navbar container
export const Nav = styled.nav`
    background-color: #5D5FEF;
    height: 60px;
    display: flex;
    /* for 1st & 2rd nav styles */
    justify-content: space-between;
    align-items: center;
    /* this padding act like a container*/
    padding: 0rem calc((100vw - 1000px) / 2);
    position: relative;
    z-index: 1000;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

// link
export const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    h1{
        color: white;
        padding: 0;
        margin: 0;
    }

    &.active {
        font-weight: bold;
    }
`

// hambuger menu
export const Bars = styled(FaBars)`
    color: white;
    margin-right: 16px;
    font-size: 2rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const Minus = styled(FaTimes)`
    color: white;
    margin-right: 16px;
    font-size: 2rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

// Navlink container which holding links
export const NavMenu = styled.div`
    /* bc the logo has padding 16px, so set the navmenu
    16px to balance the navbar */
    margin-right: -16px;
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;

        /* 3rd nav */
        /* width: 100vw;
        white-space: nowrap; */
    }
`

export const NavBtn = styled.nav`
    
    margin-right: 16px;
    display: none;

    @media screen and (min-width: 768px) {
        /* 3rd nav */
        display: flex;
        align-items: center;
        justify-content: flex-end;
        /* width: 100vw; */
    }
`
export const NavBtnLink = styled(Link)`
    border: none;
    border-radius: 4px;
    padding: 10px 22px;
    color: white;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: all .1s ease-in;
    background-color: white;
    color: black;

    /* 2rd nav */
    margin-left: 16px;

    &:hover {
        background-color: #141414;
        color: white;
        transition: all .3s ease-in;
    }
`

export const NavLinkMobile = styled.div`
    width: 100%;

    a{
        display: block;
        padding: 30px 0;
        text-align: center;
        text-decoration: none;
        color: white;
        background-color: #5D5FEF;

        &:hover{
            background-color: #5052d5;
        }
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`