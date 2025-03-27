import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "./logo_brick.png";
import SearchWithSuggestions from "../SearchWithSuggestions/SearchWithSuggestions";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Callback when a suggestion is selected from the search autocomplete
  const handleSelect = (selectedSet) => {
    if (selectedSet && selectedSet.legoset_id) {
      navigate(`/search?q=${encodeURIComponent(selectedSet.legoset_id)}`);
    }
  };

  return (
    <header>
      <div className="NavBar">
        {/* Left Section: Logo, Hamburger, and Navigation */}
        <div className="left-section">
          <Link to="/" className="logo-link">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <button className="hamburger" onClick={toggleMenu}>
            &#9776;
          </button>
          <nav className="desktop-nav">
            <ul>
              <li>
                <Link to="/top-sets">Top Sets</Link>
              </li>
              <li>
                <Link to="/about-us">About The Project</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section: Desktop Search Bar */}
        <div className="right-section">
          {location.pathname !== "/" && (
            <SearchWithSuggestions onSelect={handleSelect} />
          )}
        </div>
      </div>

      {/* Mobile Navigation and Search */}
      <div className="mobile-nav-container">
        {isMenuOpen && (
          <nav className="mobile-nav">
            <ul>
              <li>
                <Link to="/top-sets">Top Sets</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
        )}

        {location.pathname !== "/" && (
          <div className="mobile-search">
            <SearchWithSuggestions onSelect={handleSelect} />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
