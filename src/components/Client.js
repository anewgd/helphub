import React, { Component, useEffect } from "react";
import axios, { all } from "axios";
import { useState } from "react";

import "../styles/Client.css";
import "../styles/CreateTicket.css";
import logo from "../icons/Logo.svg";
import notification from "../icons/notification.svg";

import CreateTicket from "./CreateTicket";
import ActiveTicket from "./ActiveTicket";
import AllTickets from "./AllTickets";
export default function Client() {
  const [newTicket, setNewTicket] = useState("");
  const [tickets, setTickets] = useState([]);
  const [message, setMessage] = useState("");

  const [createTicketSelected, setCreateTicketSelected] = useState(true);
  const [activeTicketSelected, setActiveTicketSelected] = useState(false);
  const [allTicketsSelected, setAllTicketsSelected] = useState(false);

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

  const handleSelection = (e) => {
    switch (e.target.id) {
      case "createTicketSelected":
        setCreateTicketSelected(true);
        setActiveTicketSelected(false);
        setAllTicketsSelected(false);
        break;
      case "activeTicketSelected":
        setCreateTicketSelected(false);
        setActiveTicketSelected(true);
        setAllTicketsSelected(false);
        break;
      case "allTicketsSelected":
        setCreateTicketSelected(false);
        setActiveTicketSelected(false);
        setAllTicketsSelected(true);
        break;
    }
  };

  return (
    <>
      <div className="client-titleBar">
        <div className="client-logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="client-title-container">Client Page</div>
        <div className="client-notification-container">
          <img src={notification} alt="notification icon" />
        </div>
        <div className="client-account-container">
          <h4>User's Name</h4>
        </div>
      </div>
      <div className="client-navBar">
        <div
          className="client-navBar-button"
          id="createTicketSelected"
          onClick={(e) => handleSelection(e)}
          style={{
            backgroundColor: createTicketSelected ? "#1a2a55" : "white",
            color: createTicketSelected ? "white" : "black",
          }}
        >
          Create Ticket
        </div>
        <div
          className="client-navBar-button"
          id="activeTicketSelected"
          onClick={(e) => handleSelection(e)}
          style={{
            backgroundColor: activeTicketSelected ? "#1a2a55" : "white",
            color: activeTicketSelected ? "white" : "black",
          }}
        >
          Active Tickets
        </div>
        <div
          className="client-navBar-button"
          id="allTicketsSelected"
          onClick={(e) => handleSelection(e)}
          style={{
            backgroundColor: allTicketsSelected ? "#1a2a55" : "white",
            color: allTicketsSelected ? "white" : "black",
          }}
        >
          All Tickets
        </div>
      </div>
      <div>
        {createTicketSelected ? (
          <CreateTicket />
        ) : activeTicketSelected ? (
          <ActiveTicket />
        ) : allTicketsSelected ? (
          <AllTickets />
        ) : (
          <></>
        )}
      </div>
      {/* <div className="client-container">
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
      </div> */}
    </>
  );
}
