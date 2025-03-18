import React, { useState, useEffect, useRef } from "react";
import "./Rating.css";

function Rating({ value = 0, googleValue = 0 }) {
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
      <span className="rating-value">
        {rating === 0 ? "Not Available" : rating} / 100
      </span>
      <button className="info-button" onClick={toggleInfo}>
        ?
      </button>
      {showInfo && (
        <div className="info-popup" ref={popupRef}>
          <div className="info-popup-content">
            <p>
              <strong>Unlock Smarter LEGO Investing!</strong>
            </p>
            <p>
              Our exclusive LEGO rating system gives collectors and investors
              the edge they need:
            </p>
            <ul>
              <li>
                <strong>Pricing Analysis:</strong> Comparison between shop
                prices and the recommended set prices.
              </li>
              <li>
                <strong>Value Efficiency:</strong> Assessment based on price per
                piece, highlighting better value.
              </li>
              <li>
                <strong>Theme Growth:</strong> Annual growth trends of specific
                LEGO themes.
              </li>
              <li>
                <strong>Popularity Insights:</strong> User-driven data
                indicating overall set popularity and demand.
              </li>
              <br></br>
            </ul>
            <p>
              Trust our rating as your guide to discovering LEGO treasures with
              outstanding long-term value.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rating;
