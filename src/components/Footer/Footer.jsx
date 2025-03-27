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
          <span
            onClick={() =>
              (window.location.href = "mailto:brickseekr.info@gmail.com")
            }
            className="footer_navig"
          >
            Contact
          </span>
        </nav>
        <button
          className="back-to-top"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to Top
        </button>
      </div>

      <div className="footer-disclaimer">
        <p>
          BrickSeekr is an independent price comparison website and is not
          affiliated with, endorsed by, or sponsored by The LEGO Group. LEGO®,
          the LEGO logo, and the Minifigure are trademarks of the LEGO Group.
          All product names, images, and descriptions used on this site are for
          informational and comparative purposes only. Prices and availability
          are subject to change and are collected from third-party retailers.
          BrickSeekr does not guarantee the accuracy of the listed prices or
          product availability. BrickSeekr does not collect, store, or process
          any personal data. This website is solely for informational purposes
          and does not track users.
        </p>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 Brick Seekr. Created and maintained by{" "}
          <strong>Andrei Kachanov</strong>.
        </p>
        <p>An independent LEGO® price comparison site.</p>
      </div>
    </footer>
  );
}