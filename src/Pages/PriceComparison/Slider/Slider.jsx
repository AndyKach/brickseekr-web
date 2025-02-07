import React, { useState, useEffect } from "react";
import { fetchSetData } from "../FetchSetData/fetchSetData"; // Adjust if necessary
import ImageDots from "../ImageDots/ImageDots";
import "./Slider.css";

function Slider({ setId }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchSetData(setId); // Fetch data for the given setId
        console.log("Fetched Data:", data); // Log the fetched data to check if we are getting the correct data

        // Check if images are available
        const imageKeys = Object.keys(data.images).filter(
          (key) => key.startsWith("big_image") // Filter keys starting with "big_image"
        );
        console.log("Filtered Image Keys:", imageKeys); // Log filtered image keys

        if (imageKeys.length === 0) {
          console.error("No images found for the set.");
          return; // Exit early if no images are found
        }

        const imagesArray = imageKeys.map((key) => ({
          id: key,
          src: data.images[key],
          alt: `Image of ${data.name}`,
        }));
        console.log("Images Array:", imagesArray); // Log the images array to see if it's correct

        setImages(imagesArray); // Set the images array based on the API response
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
    return <p>Loading images...</p>; // Loading state if images are not available
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
