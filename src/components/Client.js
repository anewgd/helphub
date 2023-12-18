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
import { BiNotification, BiUserCircle } from "react-icons/bi";
export default function Client() {
  const [newTicket, setNewTicket] = useState("");
  const [tickets, setTickets] = useState([]);
  const [message, setMessage] = useState("");

  const [createTicketSelected, setCreateTicketSelected] = useState(true);
  const [activeTicketSelected, setActiveTicketSelected] = useState(false);
  const [allTicketsSelected, setAllTicketsSelected] = useState(false);

  const user = localStorage.getItem("currentUser");
  const currentUser = JSON.parse(user);

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "client/" + currentUser.username,
  //   })
  //     .then((result) => {
  //       console.log(result.data);
  //       setTickets(result.data.reverse());
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [message]);
  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   //const user = localStorage.getItem("currentUser");

  //   console.log(`Submitted ${newTicket} by ${currentUser.username}`);

  //   const newItem = {
  //     description: newTicket,
  //     createdBy: currentUser.username,
  //   };

  //   axios({
  //     method: "POST",
  //     url: "/client",
  //     data: newItem,
  //   })
  //     .then((result) => {
  //       console.log(result.data.message);
  //       setMessage(result.data.message);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
      <main className="main-container">
        <section className="header-section">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="left">
            <div className="notification-container">
              <BiNotification size="2rem" />
            </div>
            <div className="account-container">
              <BiUserCircle size="2rem" />
            </div>
          </div>
        </section>
        <section className="body-section">
          <div className="navBar">
            <div
              className="navBar-button"
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
              className="navBar-button"
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
              className="navBar-button"
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
        </section>
      </main>
    </>
  );
}
