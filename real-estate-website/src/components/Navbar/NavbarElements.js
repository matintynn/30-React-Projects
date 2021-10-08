import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    /* background: tan; */
`

// Similar/ universal style - reusable
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const Logo = styled(Link)`
    ${NavLink}
    font-weight: bold;
`

export const MenuBars = styled(FaBars)`
    display: none;
    font-size: 20px;

    @media screen and (max-width: 768px){
        display: block;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavMenuLinks = styled(Link)`
    ${NavLink}
`
export const NavBtn = styled.div`
    margin-right: 24px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`
// export const a = styled.div``