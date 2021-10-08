import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const DropdownContainer = styled.div`
    position: fixed;
    z-index: 800;
    width: 100%;
    height: 100%;
    background: #b58860;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`

export const DropdownWrapper = styled.div`
`

export const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 70px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 60px);
    }
`

export const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

