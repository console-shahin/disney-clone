import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Carousel, Wrap} from "./ImageSliderStyle"
import {
    sliderBadging,
    sliderBadag,
    sliderScale,
    sliderScales
}
from './utils'

const ImageSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3600,
    };
    
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={ sliderBadging } alt="" />
            </Wrap>
            <Wrap>
                <img src={sliderBadag} alt="" />
            </Wrap>
            <Wrap>
                <img src={sliderScale} alt="" />
            </Wrap>
            <Wrap>
                <img src={sliderScales} alt="" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider
