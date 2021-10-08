import React, { useEffect, useRef, useState } from 'react'
import {
    HeroSection,
    HeroWrapper,
    HeroSlide,
    HeroSlider,
    HeroImage,
    HeroContent,
    SliderButtons,
    PreArrow,
    NextArrow,
    // Arrow,
} from './HeroElements'
import { SliderData as slides } from '../../data/SliderData'
import { Button } from '../Button'

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 3000)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    })

    const nextSlide = () => {
        // clean up the timeout every we click
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const preSlide = () => {
        // clean up the timeout every we click
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    // check if no data
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => (
                    <HeroSlide key={index}>
                        {index === current &&
                            <HeroSlider>
                                <HeroImage src={slide.image} alt={slide.alt} />
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button
                                        to={slide.path}
                                        primary='true'
                                        css={`max-width: 140px;`}
                                    >
                                        {slide.label}
                                    </Button>
                                </HeroContent>
                            </HeroSlider>
                        }
                    </HeroSlide>
                ))}
                <SliderButtons>
                    <PreArrow onClick={preSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
