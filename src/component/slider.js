import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import slide1 from '../assets/images/home_slider/1.jpeg';
const H3 = styled.h3`
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
const SliderComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={slide1} alt="First slide" />
                <Carousel.Caption>
                    <H3>First slide label</H3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <H3>Second slide label</H3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide1} alt="Third slide" />
                <Carousel.Caption>
                    <H3>Third slide label</H3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default SliderComponent;
