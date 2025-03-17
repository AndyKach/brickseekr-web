import React, { useState, useEffect } from "react";
import { fetchSetData } from "../FetchSetData/fetchSetData";
import ImageDots from "../ImageDots/ImageDots";
import "./Slider.css";

function Slider({ setId }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchSetData(setId);
        // Use data.legoset.images instead of data.images
        const imagesObj = data.legoset.images;
        // Filter keys starting with "big_image"
        const imageKeys = Object.keys(imagesObj).filter((key) =>
          key.startsWith("big_image")
        );
        if (imageKeys.length === 0) {
          console.error("No big images found for the set.");
          return;
        }
        const imagesArray = imageKeys.map((key) => ({
          id: key,
          src: imagesObj[key],
          alt: `Image of ${data.legoset.name}`,
        }));
        setImages(imagesArray);
      } catch (error) {
        console.error("Error fetching set data:", error);
      }
    };

    loadImages();
  }, [setId]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return <p>Loading images...</p>;
  }

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
