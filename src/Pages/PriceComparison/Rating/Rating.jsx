import React, { useState, useEffect, useRef } from "react";
import "./Rating.css";

function Rating({ value = 0, googleValue = 0 }) {
  // Accept values as props
  const [rating, setRating] = useState(value);
  const [showInfo, setShowInfo] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    setRating(value); // Update state when prop changes
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowInfo(false);
      }
    };

    if (showInfo) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (showInfo) {
        document.removeEventListener("click", handleClickOutside);
      }
    };
  }, [showInfo]);

  const toggleInfo = (event) => {
    event.stopPropagation();
    setShowInfo((prev) => !prev);
  };

  return (
    <div className="rating-container">
      <label htmlFor="rating-progress">Rating:</label>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${rating}%` }}></div>
      </div>
      <span className="rating-value">{rating} / 100</span>

      {/* Info Button */}
      <button className="info-button" onClick={toggleInfo}>
        ?
      </button>

      {/* Pop-Up Banner */}
      {showInfo && (
        <div className="info-popup" ref={popupRef}>
          <div className="info-popup-content">
            <p>
              The rating is based on reviews, popularity, and user feedback.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rating;
