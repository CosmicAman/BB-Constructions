import React, { useState, useEffect, useRef } from 'react';
import './CardSlider.css';

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderIntervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []); // Run once when the component mounts

  const startAutoSlide = () => {
    stopAutoSlide();
    sliderIntervalRef.current = setInterval(() => {
      goToNextSlide();
    }, 6000); // Change card every 6 seconds
  };

  const stopAutoSlide = () => {
    if (sliderIntervalRef.current) {
      clearInterval(sliderIntervalRef.current);
    }
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
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
    <div className="card-slider">
      <div
        className="card-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img loading='lazy' src={card.image} alt={`Card ${index + 1}`} className="card-image" />
            <div className="card-intro">{card.intro}</div>
          </div>
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

export default CardSlider;
