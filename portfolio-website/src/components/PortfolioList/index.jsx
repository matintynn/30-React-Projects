import React from 'react'
import './PortfolioList.scss'

const PortfolioList = ({ title, id, setSelected, active }) => {
    return (
        <li
            className={active ? 'portfolioList active' : 'portfolioList'}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}

export default PortfolioList
