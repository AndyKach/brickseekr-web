import { useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Brick Seekr</h2>
        <nav className="footer-nav">
          <span onClick={() => handleNavigation("/")} className="footer_navig">
            Home
          </span>
          <span
            onClick={() => handleNavigation("/about-us")}
            className="footer_navig"
          >
            About
          </span>
          {/* <Link to="/services" className="footer_navig">Services</Link> */}
          {/* <Link to="/blog" className="footer_navig">Blog</Link> */}
          <span
            onClick={() => handleNavigation("/about-us")}
            className="footer_navig"
          >
            Contact
          </span>
        </nav>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </button>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Brick Seekr — All rights reserved</p>
        <p>
          Designed and developed by <strong>Your Company</strong>
        </p>
      </div>
    </footer>
  );
}
