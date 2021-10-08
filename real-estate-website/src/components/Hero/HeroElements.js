import styled, { css } from 'styled-components'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

export const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

`
export const HeroSlide = styled.div`
    z-index: 1;
    height: 100%;
    width: 100%;
`

export const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before{
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0;
        left: 0;
        overflow: hidden;
        opacity: 0.5;
        background: linear-gradient(
            0deg,
            rgba(0,0,0,0.1) 0%,
            rgba(0,0,0,0.4) 50%,
            rgba(0,0,0,0.7) 100%
        );
    }
`

export const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* object fit prevent img sketching */
    object-fit: cover;
`

export const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: calc(100% - 100px);
    color: #fff;

    h1 {
        font-size: 8vmin;
        text-shadow: 1px 1px 6px rgba(0,0,0,0.2);
        text-transform: uppercase;
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p{
        margin-bottom: 0.8rem;
        font-size: 3.5vmin;
        text-shadow: 1px 1px 6px rgba(0,0,0,0.2);
    }
`

export const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`

export const arrowButton = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #251f1f;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: all 0.3s ease;

    &:hover{
        background: #b58860;
        transform: scale(1.05);
    }
`

export const Arrow = styled(IoMdArrowRoundForward)`
   margin-left: 0.5rem;
`

export const PreArrow = styled(IoArrowBack)`
    ${arrowButton}
`

export const NextArrow = styled(IoArrowForward)`
    ${arrowButton}
`
