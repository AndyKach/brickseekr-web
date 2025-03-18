import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./TopSets.css";

function TopSets() {
  const [legoSets, setLegoSets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { page } = useParams();
  const navigate = useNavigate();

  // Default to page 1 if no page is provided.
  const currentPage = page ? parseInt(page, 10) : 1;
  const itemsPerPage = 50;

  // Redirect if an invalid page is provided (e.g., not 1 or 2)
  useEffect(() => {
    if (currentPage !== 1 && currentPage !== 2) {
      navigate("/top-sets/1", { replace: true });
    }
  }, [currentPage, navigate]);

  useEffect(() => {
    const fetchTopSets = async () => {
      try {
        const response = await fetch(
          "https://ibex-smart-smoothly.ngrok-free.app/sets/getLegosetsTopRating?legosets_count=100",
          {
            method: "GET",
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Assuming the API returns an array of sets in data.result
        let setsArray = data.result;
        // Sort sets by rating descending (optional)
        setsArray.sort((a, b) => b.rating - a.rating);
        setLegoSets(setsArray);
      } catch (error) {
        console.error("Error fetching top sets:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopSets();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedSets = legoSets.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <header className="topsets-header">
        <h1>Top LEGO Sets to Invest in Now</h1>
        <p className="subheader">
          Curated sets with the best investment potential based on exclusive
          market insights.
        </p>
      </header>
      <div className="lego-container">
        {displayedSets.map((set) => (
          <Link to={`/search?q=${set.id}`} className="lego-link" key={set.id}>
            <div className="lego-box">
              <img
                src={set.images.normalSize}
                alt={`LEGO ${set.id} ${set.name}`}
                className="lego-image"
              />
              <p className="lego-name">{`LEGO ${set.id} ${set.name}`}</p>
              <p className="set-rating">Rating: {set.rating}/100</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <Link
          to="/top-sets/1"
          className={`page-link ${currentPage === 1 ? "active" : ""}`}
        >
          1
        </Link>
        <Link
          to="/top-sets/2"
          className={`page-link ${currentPage === 2 ? "active" : ""}`}
        >
          2
        </Link>
      </div>
    </>
  );
}

export default TopSets;
