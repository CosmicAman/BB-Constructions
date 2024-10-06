import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderIntervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    sliderIntervalRef.current = setInterval(() => {
      goToNextSlide();
    }, 4000); // Change image every 3 seconds
  };

  const stopAutoSlide = () => {
    if (sliderIntervalRef.current) {
      clearInterval(sliderIntervalRef.current);
    }
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleClickNext = () => {
    stopAutoSlide();
    goToNextSlide();
    startAutoSlide();
  };

  const handleClickPrev = () => {
    stopAutoSlide();
    goToPrevSlide();
    startAutoSlide();
  };

  return (
    <div className="slider">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image}
            alt={`Slide ${index + 1}`}
            className="slider-image"
          />
        ))}
      </div>
      <button className="prev-button" onClick={handleClickPrev}>
        &#10094;
      </button>
      <button className="next-button" onClick={handleClickNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
