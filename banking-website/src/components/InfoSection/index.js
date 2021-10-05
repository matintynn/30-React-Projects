import React from 'react'
// import { Button } from 'react-scroll'
import { Button } from '../ButtonElement'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column1,
    Column2,
    Img,
    ImgWrap,
} from './InfoElements'

const InfoSection = ({ lightBg, imgStart, id, lightText, topLine, headLine, description, darkText, buttonLabel, img, primary, dark, dark2, alt }) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                {/* <img className='promo-img' src={test} alt={alt} /> */}
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
