import React from "react";
import "./ScrollButton.css";

function ScrollButton({ targetRef }) {
  // Scroll to the referenced section
  const handleScroll = () => {
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Target reference is not set or invalid.");
    }
  };

  return (
    <button className="bd_all" onClick={handleScroll}>
      <p className="bd_all_txt">See all</p>
    </button>
  );
}

export default ScrollButton;
