import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./HomePage.css";
import index_img from "./hp_main.jpg";
import index_topsets from "./TopSets.jpg";
import HomePage_mini_photo from "./mini_photo.png";
import SearchWithSuggestionsHP from "../../components/SearchWithSuggestionsHP/SearchWithSuggestionsHP";

function HomePage() {
  const navigate = useNavigate();

  const handleSelect = (selectedSet) => {
    if (selectedSet && selectedSet.legoset_id) {
      navigate(`/search?q=${encodeURIComponent(selectedSet.legoset_id)}`);
    }
  };

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${index_img})` }}
      >
        <SearchWithSuggestionsHP onSelect={handleSelect} />
      </section>
      <section className="feature-cards">
        <div className="card">
          <img src={index_topsets} alt="Top Sets" />
          <h3>Top 100 Sets</h3>
          <p>Discover the most popular Lego sets to invest.</p>
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
