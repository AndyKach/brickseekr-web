import { Link } from "react-router-dom";
import React from 'react';
import './AboutUs.css';
import AboutUs_background from "./about_us_background.png";
import AboutUs_OurMission from "./OurMission.jpg";
import AboutUs_ContactUs from "./ContactUs.jpg";
import AboutUs_OurTeam from "./OurTeam.jpg";

function AboutUs() {
  return (
    <>
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${AboutUs_background})`,
        }}
      >
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            {" "}
            Welcome to BrickSeekr, your ultimate destination for finding the
            best Lego® deals online! Born as a diploma thesis project at Prague
            University of Economics and Business, BrickSeekr has grown into a
            platform dedicated to helping Lego enthusiasts, collectors, and
            parents explore, compare, and save on their favorite sets. Dive into
            a world of creativity and discover how we make building your dreams
            affordable.
          </p>
        </div>
      </section>
      <div className="about-content">
        <section className="about-section">
          <img src={AboutUs_OurMission} alt="Our Mission" className="icon" />
          <h2>Our Mission</h2>
          <p>
            At BrickSeekr, we strive to help fans find the best deals on their
            favorite sets.
          </p>
        </section>
        <section className="about-section">
          <img src={AboutUs_OurTeam} alt="Our Team" className="icon" />
          <h2>Our Team</h2>
          <p>BrickSeekr is created by Andrei Kachanov, a big LEGO fan.</p>
        </section>
        <section className="about-section">
          <img src={AboutUs_ContactUs} alt="Contact Us" className="icon" />
          <h2>Contact Us</h2>
          <p>
            Questions? Feedback? Reach out to us anytime at{" "}
            <a href="mailto:brickseekr.info@gmail.com">
              brickseekr.info@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
