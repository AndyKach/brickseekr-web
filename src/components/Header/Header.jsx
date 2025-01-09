import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo_brick.png";

function Header() {
  return (
    <header>
      <div class="NavBar">
        <a href="index.html">
          <picture>
            <Link to="/" className="navig">
              <img src={logo} alt="logo" className="logo"></img>
            </Link>
          </picture>
        </a>
        <nav>
          <ul>
            <li>
              <Link to="/price-comparison" className="navig">
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
      </div>
    </header>
  );
}

export default Header;
