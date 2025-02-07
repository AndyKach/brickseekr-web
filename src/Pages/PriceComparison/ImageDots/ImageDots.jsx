import React from "react";
import "./ImageDots.css";

function ImageDots({ totalDots, currentSlide, setCurrentSlide }) {
  return (
    <div className="dots">
      {Array.from({ length: totalDots }).map((_, index) => (
        <span
          key={index}
          className={`dot ${index === currentSlide ? "active" : ""}`}
          onClick={() => setCurrentSlide(index)}
        ></span>
      ))}
    </div>
  );
}

export default ImageDots;
