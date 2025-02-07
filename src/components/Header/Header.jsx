import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "./logo_brick.png";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Tracks current page path

  // 🛑 Reset search input when the page is refreshed or URL changes
  useEffect(() => {
    setSearchQuery(""); // Clear search input
  }, [location.pathname]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Remove extra spaces at the end of each word & trim leading/trailing spaces
    let cleanedQuery = searchQuery
      .split(" ") // Split words
      .map((word) => word.trim()) // Trim spaces at the end of each word
      .filter((word) => word !== "") // Remove empty words from excessive spaces
      .join(" "); // Join words back together with single spaces

    if (cleanedQuery !== "") {
      navigate(`/search?q=${encodeURIComponent(cleanedQuery)}`);
    }
  };

  return (
    <header>
      <div className="NavBar">
        <Link to="/" className="navig">
          <picture>
            <img src={logo} alt="logo" className="logo" />
          </picture>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/search?q=77072" className="navig">
                Price Comparison
              </Link>
            </li>
            <li>
              <Link to="/top-sets" className="navig">
                Top Sets
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="navig">
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Show search bar on all pages EXCEPT Home Page */}
        {location.pathname !== "/" && (
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search for LEGO sets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>
        )}
      </div>
    </header>
  );
}

export default Header;
