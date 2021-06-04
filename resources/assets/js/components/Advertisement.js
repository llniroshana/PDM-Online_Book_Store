import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Advertisement extends Component {
    render() {
        return (
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src="img/1.jpg" />
                </div>
                <div>
                    <img src="img/2.jpg" />
                </div>
                <div>
                    <img src="img/3.jpg" />
                </div>
            </Carousel>
        );
    }
}


export default Advertisement;