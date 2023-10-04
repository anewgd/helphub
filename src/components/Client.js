import React, { Component, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import "../styles/Client.css";

export default function Client() {
  const [newTicket, setNewTicket] = useState("");
  const [tickets, setTickets] = useState([]);
  const [message, setMessage] = useState("");

  const user = localStorage.getItem("currentUser");
  const currentUser = JSON.parse(user);

  useEffect(() => {
    axios({
      method: "GET",
      url: "client/" + currentUser.username,
    })
      .then((result) => {
        console.log(result.data);
        setTickets(result.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [message]);
  const onSubmit = (e) => {
    e.preventDefault();

    //const user = localStorage.getItem("currentUser");

    console.log(`Submitted ${newTicket} by ${currentUser.username}`);

    const newItem = {
      description: newTicket,
      createdBy: currentUser.username,
    };

    axios({
      method: "POST",
      url: "/client",
      data: newItem,
    })
      .then((result) => {
        console.log(result.data.message);
        setMessage(result.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setNewTicket(e.target.value);
  };

  return (
    <div className="client-container">
      <h3>Create Ticket</h3>
      <p>{message}</p>
      <form className="ticket-form" onSubmit={(e) => onSubmit(e)}>
        <div className="description-container">
          <textarea
            id="newTicket"
            type="text"
            placeholder="Enter a description"
            name="newTicket"
            onChange={(e) => handleChange(e)}
            value={newTicket}
          />
        </div>

        <div className="submit-container">
          <input
            className="submit-button"
            type="submit"
            value="Create Ticket"
          />
        </div>
      </form>

      <h3>Tickets</h3>
      <div className="ticket-container">
        {tickets.map((ticket) => (
          <div className="ticket" key={ticket._id}>
            <p>
              {ticket.description} - {ticket.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
