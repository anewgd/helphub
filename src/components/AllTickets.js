import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";
import "../styles/AllTickets.css";

export default function AllTickets() {
  const [activeTickets, setActiveTickets] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  return (
    <>
      <div className="client-AllTickets-container">
        <div className="client-AllTickets-searchbar-container">
          <div className="client-AllTickets-searchbar">
            <input
              type="text"
              placeholder="Search in all tickets..."
              name="searchItem"
              value={searchItem}
            />
            <BiSearch size={50} />
          </div>
        </div>
      </div>
    </>
  );
}
