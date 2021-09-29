import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    // default btn style is STYLES[0]: btn--primary
    const checkButtonStype = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    // default btn size is SIZES[0]: btn--medium
    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0]

    return (
        <Link>
            <button
                className={`btn ${checkButtonStype} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}

export default Button
