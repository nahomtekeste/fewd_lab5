import React, { useState } from "react";
import DisplayFoodItems from "./DisplayFoodItems";

function Search({ details }) {
   const [searchField, setSearchField] = useState("");

  const filtered = details.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase())|| entry.description.toLowerCase().includes(searchField.toLowerCase());
  });

  const availableList = filtered.filter((entry) => {
    return entry.available==="yes";
  });
 
  return (
      <div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Search ..."
              onChange={(e) =>  setSearchField(e.target.value)}
            />
          </div>
          <DisplayFoodItems foodList={availableList} />
      </div>
  
  );
}

export default Search;

