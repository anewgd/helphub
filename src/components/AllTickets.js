import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";
import "../styles/AllTickets.css";

import AllTicketsTable from "./tables/AllTicketsTable";

export default function AllTickets() {
  const [activeTickets, setActiveTickets] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  return (
    <>
      <div className="client-AllTickets-container">
        <div className="client-AllTickets-searchbar-container">
          <AllTicketsTable />
        </div>
      </div>
    </>
  );
}
