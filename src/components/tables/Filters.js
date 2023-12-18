import React, { useState } from "react";

import "../../styles/table_styles/Filters.css";
import { BiFilterAlt, BiSearch, BiSolidFilterAlt } from "react-icons/bi";

import FilterOptions from "./FilterOptions";

export default function Filters({ columnFilters, setColumnFilters }) {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [selectedFilterOption, setSelectedFilterOption] =
    useState("Description");

  const description =
    columnFilters.find((f) => f.id === selectedFilterOption)?.value || "";
  //   const handleChange = (e) => {
  //     setSearchItem(e.target.value);
  //   };

  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

  const onFilterClicked = (e) => {
    console.log("filter clicked");
    setIsFilterActive(!isFilterActive);
  };

  const handleFilterOptionChange = (e) => {
    console.log(e.target.value);
    setSelectedFilterOption(e.target.value);
  };
  return (
    <>
      <div className="client-ActiveTicket-searchbar-container">
        <div className="client-ActiveTicket-searchbar">
          <BiSearch size="1rem" opacity={0.5} alignmentBaseline="central" />
          <input
            type="text"
            placeholder={`Search by ${selectedFilterOption}`}
            name="searchItem"
            value={description}
            onChange={(e) =>
              onFilterChange(`${selectedFilterOption}`, e.target.value)
            }
          />
          {/* <div className="client-filter-type-container">
            <select onChange={(e) => handleFilterOptionChange(e)}>
              <option default value="">
                Search by...
              </option>
              <option value="Description">Description</option>
              <option value="Agent">Agent</option>
              <option value="Creation date">Date</option>
            </select>
          </div> */}
          <div className="client-filter-icon-container">
            {isFilterActive ? (
              <BiSolidFilterAlt
                className="filter-icon"
                onClick={(e) => onFilterClicked(e)}
                size="1rem"
                opacity={0.5}
                alignmentBaseline="central"
              />
            ) : (
              <BiFilterAlt
                className="filter-icon"
                onClick={(e) => onFilterClicked(e)}
                size="1rem"
                opacity={0.5}
                alignmentBaseline="central"
              />
            )}
          </div>
        </div>
        {isFilterActive ? (
          <FilterOptions setSelectedFilterOption={setSelectedFilterOption} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
