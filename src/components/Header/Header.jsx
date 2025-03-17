import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "./logo_brick.png";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Reset search and close mobile menu on route change
  useEffect(() => {
    setSearchQuery("");
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const cleanedQuery = searchQuery
      .split(" ")
      .map((word) => word.trim())
      .filter((word) => word !== "")
      .join(" ");
    if (cleanedQuery) {
      navigate(`/search?q=${encodeURIComponent(cleanedQuery)}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="NavBar">
        {/* Left Section: Logo + Hamburger (on mobile) + Desktop Nav (desktop only) */}
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
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section: Desktop Search Bar (desktop only) */}
        <div className="right-section">
          {location.pathname !== "/" && (
            <form className="search-bar" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search for LEGO sets..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit">🔍</button>
            </form>
          )}
        </div>
      </div>

      {/* Mobile: When hamburger is clicked, show mobile navigation above search */}
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

        {/* Mobile Search Bar (always visible on mobile) */}
        {location.pathname !== "/" && (
          <div className="mobile-search">
            <form className="search-bar" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search for LEGO sets..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit">🔍</button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
