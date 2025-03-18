import React, { useState, useEffect } from "react";
import "./SearchWithSuggestionsHP.css";
import legoSetsData from "./data.json";

const SearchWithSuggestionsHP = ({ onSelect }) => {
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
    // Limit suggestions to 3
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
    <div className="search-container-hero">
      <input
        type="text"
        placeholder="Search for LEGO® sets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">🔍</button>
      {suggestions.length > 0 && (
        <ul className="suggestions-list-hp">
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

export default SearchWithSuggestionsHP;
