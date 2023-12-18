import e from "cors";
import React, { useState } from "react";

import { BiChevronDown } from "react-icons/bi";

export default function CreateTicket() {
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [createTicketClicked, setCreateTicketClicked] = useState(false);

  const handleCreateTicket = (e) => {
    e.preventDefault();
    setCreateTicketClicked(true);
  };

  return (
    <>
      <div className="client-createTicket-container">
        <div className="create-ticket-form-container">
          {createTicketClicked ? <div className="message">Message</div> : <></>}
          <form
            className="create-ticket-form"
            onSubmit={(e) => handleCreateTicket(e)}
          >
            <div className="ticket-description-container">
              <label htmlFor="ticket-description"></label>
              <textarea
                rows="8"
                cols="50"
                name="ticket-description"
                placeholder="Ticket description"
                required
              ></textarea>
            </div>
            <div className="options">
              <select className="ticketypes" name="ticketType" required>
                <option defaultValue="">Choose a ticket type</option>
                <option value="type1">Type 1</option>
                <option value="type3">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
              <input type="submit" value="Create Ticket" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
