import React, { useState, useEffect, useRef } from "react";
import "./Rating.css";

function Rating() {
  const [rating, setRating] = useState(0); // Initialize rating
  const [showInfo, setShowInfo] = useState(false); // State for popup visibility
  const popupRef = useRef(null); // Reference for the popup

  useEffect(() => {
    // Simulate fetching rating
    const fetchRating = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setRating(80); // Example rating fetched
      } catch (error) {
        console.error("Failed to fetch rating:", error);
      }
    };

    fetchRating();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowInfo(false); // Close popup
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
    event.stopPropagation(); // Prevent this click from propagating to the document
    setShowInfo((prev) => !prev); // Toggle popup visibility
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
              The rating is calculated based on various metrics, including user
              reviews, performance, and popularity.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rating;
