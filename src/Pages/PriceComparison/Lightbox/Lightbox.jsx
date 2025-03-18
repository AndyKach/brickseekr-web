import React, { useState } from "react";
import "./Lightbox.css";

function Lightbox({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      {/* Thumbnail Gallery */}
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="thumbnail"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeLightbox}>
              ✖
            </button>
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="large-image"
            />
            {images.length > 1 && (
              <>
                <button className="nav-button prev" onClick={handlePrev}>
                  ❮
                </button>
                <button className="nav-button next" onClick={handleNext}>
                  ❯
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Lightbox;
