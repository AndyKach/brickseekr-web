import React from "react";
import "./ScrollButton.css";

function ScrollButton({ targetRef }) {
  const handleScroll = () => {
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Target reference is not set or invalid.");
    }
  };

  return (
    <button className="see-all-button" onClick={handleScroll}>
      SEE ALL
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default ScrollButton;
