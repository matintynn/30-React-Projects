import styled from 'styled-components'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'

export const SideMenuContainer = styled.div`
    position: fixed;
    top: 0;
    width: 300px;
    height: 100%;
    padding: 30px 20px;
    background: white;
    color: #1E272B;
    transition: width .3s ease-in;

    &.inactive{
        width: 85px;
        /* display: flex;
        flex-direction: column;
        align-items: center; */

        & div.logo svg{
            right: -70px;
        }

        & div.search-container {

            input{
                display: none;
            }
        } 
    }
`

export const Logo = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        margin-left: -3px;
    }
`

export const ArrowLeft = styled(FaArrowCircleLeft)`
    color: #acbcc4;
    position: absolute;
    right: 0px;
    z-index: 100;
    font-size: 26px;
    cursor: pointer;
`

export const SearchContainer = styled.div`
    margin: 2rem 0;
    padding: 6px 10px;
    background: #acbcc4;
    display: flex;
    width: 100%;
    height: 35px;
    border-radius: 6px;
    position: relative;
    transition: width .3s ease-in;
`

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
`;

export const SearchIcon = styled(BiSearch)`
    color: #1E272B;
    font-size: 26px;
    cursor: pointer;
    /* position: absolute; */
`
export const NavLinkContainer = styled.ul`
    display: flex;
    flex-direction: column;
    &.align{
        justify-content: center;
        align-items: center;
    }
`

export const LinkContainer = styled.li`
    display: flex;
    padding: 1rem 0;
    align-items: center;
    color: #1E272B;
    cursor: pointer;

    svg{
        font-size: 26px;
    }

    a{
        margin-left: 10px;
        font-size: 24px;
        color: #1E272B;

        &.active{
            font-weight: bold;
        }
    }
    /* justify-content: space-between; */
`
// export const = styled
// export const = styled
