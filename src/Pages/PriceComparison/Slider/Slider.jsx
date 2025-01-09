import React, { useState } from "react";
import img1 from "./peelybone.png";
import img2 from "./peelybone2.png";
import img3 from "./peelybone3.png";
import ImageDots from "../ImageDots/ImageDots";
import "./Slider.css";

function Slider() {
  const images = [
    { id: "slide-1", src: img1, alt: "img1" },
    { id: "slide-2", src: img2, alt: "img2" },
    { id: "slide-3", src: img3, alt: "img3" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="slider">
        <div className="slider-images">
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={`Set_image ${index === currentSlide ? "active" : ""}`}
            />
          ))}
        </div>
        <button onClick={handlePrev} className="nav-button" id="prev">
          ❮
        </button>
        <button onClick={handleNext} className="nav-button" id="next">
          ❯
        </button>
      </div>
      <ImageDots
        totalDots={images.length}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </>
  );
}
export default Slider;
