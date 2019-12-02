import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from "./images/1.jpg";
import slide2 from "./images/2.jpg";
import slide3 from "./images/3.jpg";

/**
 * Representational Component for the carousel on the welcome page.
 */
class WelcomeCarousel extends Component {

    render() {
        return (
            <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src={slide1} alt="Slide 1" />
                </div>
                <div>
                    <img src={slide2} alt="Slide 2"/>
                </div>
                <div>
                    <img src={slide3} alt="Slide 3"/>
                </div>
            </Carousel>
        )
    }

}
export default WelcomeCarousel;