declare module 'react-slick' {
    import * as React from 'react';
  
    interface SliderProps {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      arrows?: boolean;
      autoplay?: boolean;
      autoplaySpeed?: number;
      pauseOnHover?: boolean;
      adaptiveHeight?: boolean;
      className?: string;
      centerMode?: boolean;
      variableWidth?: boolean;
      beforeChange?: (currentSlide: number, nextSlide: number) => void;
      afterChange?: (currentSlide: number) => void;
      responsive?: Array<{
        breakpoint: number;
        settings: Partial<SliderProps>;
      }>;
    }
  
    class Slider extends React.Component<SliderProps> {}
  
    export default Slider;
  }
  