import React, { useState, useEffect } from "react";
import "./SearchWithSuggestions.css";
import legoSetsData from "./data.json";

const SearchWithSuggestions = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = legoSetsData.filter(
      (set) =>
        set.name.toLowerCase().includes(lowerQuery) ||
        set.legoset_id.includes(query)
    );
    // Limit to a maximum of 5 suggestions
    setSuggestions(filtered.slice(0, 3));
  }, [query]);

  const handleSelect = (selectedSet) => {
    setQuery("");
    setSuggestions([]);
    if (onSelect) {
      onSelect(selectedSet);
    }
  };

  return (
    <div className="search-with-suggestions">
      <input
        type="text"
        placeholder="Search for LEGO® sets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">🔍</button>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((set) => (
            <li key={set.legoset_id} onClick={() => handleSelect(set)}>
              {set.name} (ID: {set.legoset_id})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchWithSuggestions;
