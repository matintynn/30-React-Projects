import React from 'react'
import './HeroSection.css'
import Button from '../button/Button'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <h1>Discovery Mexico</h1>
            <p>Chasing the wind under the Mexican sky</p>
            <div className="hero-btns">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
