import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./HomePage.css";
import index_img from "./index_batman.png";
import HomePage_mini_photo from "./mini_photo.png";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${index_img})` }}
      >
        <form className="search-container-hero" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search for LEGO sets..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">🔍</button>
        </form>
      </section>

      <section className="feature-cards">
        <div className="card">
          <img src={index_img} alt="Top Sets" />
          <h3>Top 100 Sets</h3>
          <p>Discover the most popular Lego sets of all time.</p>
          <Link to="/top-sets" className="cta-button">
            Explore
          </Link>
        </div>
        <div className="card">
          <img src={HomePage_mini_photo} alt="About Us" />
          <h3>About Us</h3>
          <p>Learn more about how we help you save on Lego.</p>
          <Link to="/about-us" className="cta-button">
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
