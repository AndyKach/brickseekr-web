import { Link } from "react-router-dom";
import React from 'react';
import './AboutUs.css';
import AboutUs_background from './about_us_background.png';
import AboutUs_mini_photo from './mini_photo.png';

function AboutUs() {
    return (
        <>
    <section className="about-hero" style={{
                    backgroundImage: `url(${AboutUs_background})`
                }}>
        <div className="hero-content" >
            <h1>About Us</h1>
            <p> Welcome to BrickSeekr, your ultimate destination for finding the best Lego deals online! 
                Born as a diploma thesis project at Prague University of Economics and Business, BrickSeekr has grown into a 
                platform dedicated to helping Lego enthusiasts, collectors, and parents explore, compare, 
                and save on their favorite sets. Dive into a world of creativity and discover how we make 
                building your dreams affordable.</p>
        </div>
    </section>
        <div class="about-content">
        <section class="about-section">
            <img src={AboutUs_mini_photo} alt="Our Mission" class="icon" />
            <h2>Our Mission</h2>
            <p>At BrickSeekr, we strive to help Lego fans find the best deals on their favorite sets.</p>
        </section>
        <section class="about-section">
            <img src={AboutUs_mini_photo} alt="Our Team" class="icon" />
            <h2>Our Team</h2>
            <p>We are passionate about Lego and dedicated to making it easier for you to explore and compare.</p>
        </section>
        <section class="about-section">
            <img src={AboutUs_mini_photo} alt="Contact Us" class="icon" />
            <h2>Contact Us</h2>
            <p>Questions? Feedback? Reach out to us anytime at <a href="mailto:support@brickseekr.com">support@brickseekr.com</a>.</p>
        </section>
    </div>
    </>
    );
}

export default AboutUs;
