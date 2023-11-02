import React, { useState } from "react";

import "../styles/ActiveTicket.css";

import { BiSearch } from "react-icons/bi";

import { useReactTable } from "@tanstack/react-table";

import ActiveTicketTable from "./tables/ActiveTicketTable";

import { useEffect, useMemo } from "react";
import axios from "axios";

export default function ActiveTicket() {
  const [activeTickets, setActiveTickets] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  return (
    <>
      <div className="client-ActiveTicket-container">
        <div className="client-ActiveTicket-searchbar-container">
          <div className="client-ActiveTicket-searchbar">
            <input
              type="text"
              placeholder="Search in active tickets..."
              name="searchItem"
              value={searchItem}
            />
            <BiSearch size={50} />
          </div>
        </div>
        <div className="client-ActiveTicket-table-container">
          <ActiveTicketTable />
        </div>
      </div>
    </>
  );
}
