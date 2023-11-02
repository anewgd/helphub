import React, { useState } from "react";

import { BiChevronDown } from "react-icons/bi";

export default function CreateTicket() {
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketType, setTicketType] = useState("");

  return (
    <>
      <div className="client-createTicket-container">
        <div className="client-grid">
          <div className="client-ticket-description-container">
            <textarea
              className="client-ticket-description"
              placeholder="Enter ticket description here"
            ></textarea>
          </div>
          <div className="client-ticket-type-container">
            <select required>
              <option default value="">
                Choose ticket type..
              </option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
          </div>
          <div className="client-createTicket-button">Create Ticket</div>
        </div>
      </div>
    </>
  );
}
