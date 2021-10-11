import React, { useEffect, useState } from 'react'
import './Portfolio.scss'
import pro1 from '../../images/pro-1.png'
import PortfolioList from '../PortfolioList'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio
} from '../../data/data'

const Portfolio = () => {
    const [selected, setSelected] = useState('featured')
    const [data, setData] = useState([])
    // should put this on the data folder separately
    const list = [
        {
            id: 'featured',
            title: 'Featured',
        },
        {
            id: 'web',
            title: 'Web App',
        },
        {
            id: 'mobile',
            title: 'Mobile App',
        },
        {
            id: 'design',
            title: 'Design',
        },
    ]

    useEffect(() => {

        switch (selected) {
            // case 'featured':
            //     setData(featuredPortfolio);
            //     break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        id={item.id}
                        active={selected === item.id}
                        setSelected={setSelected}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(data => (
                    <div className="item">
                        <img
                            src={data.img}
                            alt={data.title}
                        />
                        <h3>{data.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
