import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; 

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000); // 3 sec main image change
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div className="slider-wrapper">
        <img
          loading='lazy'
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>
      <button className="prev-button" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className="next-button" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
