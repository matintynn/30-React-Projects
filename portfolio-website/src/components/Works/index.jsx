import React from 'react'
import './Works.scss'
import { MdPhoneIphone } from 'react-icons/md'
import workImg from '../../images/pro-5.png'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

const Works = () => {
    return (
        <div className='works' id='works'>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <MdPhoneIphone size='40px' />
                                </div>
                                <h2>UX & UI Designer</h2>
                                <p>Designing the UX and UI for the landing page of workstation company. </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={workImg} alt="work project" />
                        </div>
                    </div>
                </div>
            </div>
            <RiArrowLeftSLine size='40px' className='prevArrow' />
            <RiArrowRightSLine size='40px' className='nextArrow' />
        </div>
    )
}

export default Works
