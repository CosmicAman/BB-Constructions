import React, { useState, useEffect } from 'react';
import './CardSlider.css'; // Import CSS for styling

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 6000); // Change card every 6 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="card-slider">
      <div
        className="card-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Use transform to slide
      >
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={`Card ${index + 1}`} className="card-image" />
            <div className="card-intro">{card.intro}</div>
          </div>
        ))}
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

export default CardSlider;
