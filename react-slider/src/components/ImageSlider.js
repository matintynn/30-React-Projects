import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ImageSlider = () => {
    const [current, setCurrent] = useState(0)
    const length = SliderData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <section className="container">
            {SliderData.map((data, index) => {
                return (
                    <div
                        className={index === current ? 'slide action' : 'slide'}
                        key={index}
                    >
                        {index === current && <img className="image" key={index} src={data.image} alt="images of Vietnam" />}
                    </div>
                )
            })}
            <FaArrowAltCircleLeft key="arrow1" className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight key="arrow2" className="right-arrow" onClick={nextSlide} />
        </section>
    );
}

export default ImageSlider;