import React, { useState } from "react";
import "./Slider.css";
import image1 from "./peelybone.png";
import image2 from "./peelybone2.png";
import image3 from "./peelybone3.png";

const Slider = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <button id="prev" className="nav-button" onClick={goToPrevious}>
        ❮
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="Set_image"
      />
      <button id="next" className="nav-button" onClick={goToNext}>
        ❯
      </button>
      <div className="dots">
        {images.map((_, index) => (
          <label
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></label>
        ))}
      </div>
    </div>
  );
};

export default Slider;
