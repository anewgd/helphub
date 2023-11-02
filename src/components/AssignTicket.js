import React, { useState } from "react";

import "../styles/AssignTicket.css";

import { BiSearch } from "react-icons/bi";

export default function AssignTicket() {
  const [activeTickets, setActiveTickets] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  return (
    <>
      <div className="admin-AssignTicket-container">
        <div className="admin-AssignTicket-searchbar-container">
          Assign Ticket
        </div>
      </div>
    </>
  );
}
