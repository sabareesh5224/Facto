import React, { useState, useEffect } from 'react';
import './Slider.css'; 

const Slider = () => {
    const slides = [
        'Discover the Reality Behind the Noise',
        'Your Beacon in a Sea of Information',
        'Illuminate Your Understanding with Facts'
        
      ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedButton, setClickedButton] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setClickedButton('next');
    setTimeout(() => setClickedButton(null), 200); // Reset clickedButton after 200ms
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    setClickedButton('prev');
    setTimeout(() => setClickedButton(null), 200); // Reset clickedButton after 200ms
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-carousel">
      <button className={`prev-btn ${clickedButton === 'prev' ? 'clicked' : ''}`} onClick={prevSlide}>{'<'}</button>
      <button className={`next-btn ${clickedButton === 'next' ? 'clicked' : ''}`} onClick={nextSlide}>{'>'}</button>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
        >
          <h2>{slide}</h2>
        </div>
      ))}
    </div>
  );
};

export default Slider;

