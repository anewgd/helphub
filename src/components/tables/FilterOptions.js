import React from "react";
import "../../styles/table_styles/FilterOptions.css";
function FilterOptions({ setSelectedFilterOption }) {
  const handleFilterOptionChange = (e) => {
    console.log(e.target.value);
    setSelectedFilterOption(e.target.value);
  };
  return (
    <div className="client-filter-type-container">
      <select onChange={(e) => handleFilterOptionChange(e)}>
        <option default value="">
          Search by...
        </option>
        <option value="Description">Description</option>
        <option value="Agent">Agent</option>
        <option value="Creation date">Date</option>
      </select>
    </div>
  );
}

export default FilterOptions;
