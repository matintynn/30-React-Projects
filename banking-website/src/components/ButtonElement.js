import styled from "styled-components";
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 8px;
    background: ${({ primary }) => (primary ? '#F8D800' : '#000')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '8px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#F8D800')};
        color: #000;
    }
`