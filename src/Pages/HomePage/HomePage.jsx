import { Link } from "react-router-dom";
import React from 'react';
import './HomePage.css';
import index_img from './index_batman.png';
import HomePage_mini_photo from './mini_photo.png';


function HomePage() {
  return (
    <>
    <section className="hero" style={{backgroundImage: `url(${index_img})`}}>
    <div className="search-container-hero">
        <input type="text" placeholder="Search for Lego sets..."></input>
        <button>🔍</button>
    </div>
    </section>
    <section className="feature-cards">
    <div className="card">
        <img src={index_img} alt="Top Sets"></img>
        <h3>Top 100 Sets</h3>
        <p>Discover the most popular Lego sets of all time.</p>
        <Link to="/top-sets" className="cta-button">Explore</Link>
    </div>
    <div className="card">
        <img src={HomePage_mini_photo} alt="About Us"></img>
        <h3>About Us</h3>
        <p>Learn more about how we help you save on Lego.</p>
        <Link to="/about-us" className="cta-button">Learn More</Link>
    </div>
</section>
</>
  )
}

export default HomePage;