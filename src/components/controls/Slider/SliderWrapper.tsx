import React, { FunctionComponent, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrevArrow from 'components/controls/Slider/NavigationArrow/PrevArrow';
import NextArrow from 'components/controls/Slider/NavigationArrow/RightArrow';

interface SliderProps {
  handleChange?: Function;
  slideToShow: number;
  goto?: number;
}
const SliderWrapper: FunctionComponent<SliderProps> = (props) => {
  const { children, handleChange, slideToShow, goto } = props;
  const refSlider = useRef<Slider>(null);
  const dots = false;
  const infinite = false;
  const speed = 500;

  if (refSlider && goto && goto > 1) {
    refSlider.current?.slickGoTo(15);
  }

  return (
    <>
      <Slider
        ref={refSlider}
        dots={dots}
        infinite={infinite}
        speed={speed}
        slidesToShow={slideToShow}
        slidesToScroll={slideToShow}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        afterChange={() => handleChange}
      >
        {children}
      </Slider>
    </>
  );
};

export default SliderWrapper;
