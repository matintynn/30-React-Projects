import React, { useEffect, useRef } from 'react'
import './Intro.scss'
import heroImg from '../../images/img-3.svg'
import { MdExpandMore } from 'react-icons/md'
import { init } from 'ityped'

const Intro = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer', 'Designer', 'Content Creator']
        })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imageContainer">
                    <img src={heroImg} alt="hero" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Matin Tynn</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <MdExpandMore size='56px' />
                </a>
            </div>
        </div>
    )
}

export default Intro
