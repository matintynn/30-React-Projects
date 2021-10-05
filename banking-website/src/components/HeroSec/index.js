import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSecElements'
import { Button } from '../ButtonElement'
import video from '../../videos/video-bg.mp4'

const HeroSec = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Your Future Banking Starts Here</HeroH1>
                    <HeroP>
                        The most secure and reliable virtual banking on the internet.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button
                            to='signup'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                        >
                            Get start {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSec
