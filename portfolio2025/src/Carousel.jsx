import React, { useState, useRef } from 'react';
import './css/uxdesign.css';

const Carousel = () => {
    const images = [
        "./src/assets/replaceframe.png",
        "./src/assets/replaceframe.png",
        "./src/assets/replaceframe.png",
        "./src/assets/replaceframe.png",
        "./src/assets/replaceframe.png",
        "./src/assets/replaceframe.png",
        "./src/assets/replaceframe.png",
        "./src/assets/replaceframe.png",

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        carouselRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        carouselRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    };

    return (
        <div className='carousel-container' ref={carouselRef} style={{ display: 'flex', alignItems: 'center', overflowX: 'auto', scrollBehavior: 'smooth' }}>
            {/* <img className='left' src="./src/assets/arrow-left.svg" alt="Previous" onClick={goToPrevious} /> */}
                  {images.map((src, index) => (
                <img key={index} src={src} alt={`Slide ${index}`} style={{ width: '250px', height: 'auto', marginRight: '20px' }} />
            ))}
            {/* <img className='right' src="./src/assets/arrow-right.svg" alt="Next" onClick={goToNext}  /> */}
        </div>
    );
};

export default Carousel;
