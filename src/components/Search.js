import React, { useState } from "react";
import DisplayFoodItems from "./DisplayFoodItems";

function Search({ details, onSearchUpdate }) {
  const [searchField, setSearchField] = useState("");

  // Handle search input and pass filtered results to the parent component
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchField(value);

    const filtered = details.filter((entry) => {
      return (
        entry.name.toLowerCase().includes(value) || // Search by food name
        entry.description.toLowerCase().includes(value) || // Search by description
        (entry.speaker && entry.speaker.toLowerCase().includes(value)) // Search by speaker name
      );
    });

    // Send filtered results back to the parent
    onSearchUpdate(filtered);
  };

  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder="Search by talk name, description, or speaker..."
        value={searchField}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
