import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='banner-img'>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1484136540910-d66bb475348d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhciUyMG1lY2hhbmljcyUyMGJhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='banner-img'>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhciUyMG1lY2hhbmljcyUyMGJhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='banner-img'>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1458408990864-27997f8c2984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhciUyMG1lY2hhbmljcyUyMGJhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;