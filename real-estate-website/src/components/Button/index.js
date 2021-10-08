import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#251f1f' : '#CD853F')};
    white-space: nowrap;
    outline: none;
    border: none;
    max-width: 150px;
    /* max-width: 200px; */
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    color: ${({ primary }) => (primary ? '#fff' : '#0001da')};
    font-size: ${({ big }) => (big ? '20px' : '14px')};

    &:hover {
        transform: translateY(-2px);
    }
`