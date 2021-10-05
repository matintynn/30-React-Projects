import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 200;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    cursor: pointer;
    font-size: 2rem;
    background: transparent;
    outline: none;
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 70px);
    text-align: center;
    padding-left: 0;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 50px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    list-style: none;
    transition: 0.3s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #F8D800;
        transition: 0.3s ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const SidebarRoute = styled(LinkR)`
border-radius: 8px;
background: linear-gradient(135deg, #FDEB71 0%, #F8D800 100%);
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover{
    transition: 0.3s ease-in-out;
    background: #fff;
    color: #010606;
}
`

// export const Nav = styled.div``
// export const Nav = styled.div``