import React, { useEffect } from "react";

import axios from "axios";
import { useState } from "react";
import { set } from "mongoose";
import { ticket } from "../db/schemas/ticket";
import "../styles/Admin.css";

import logo from "../icons/Logo.svg";
import { BiMenuAltRight, BiNotification, BiUserCircle } from "react-icons/bi";

import ActiveTicket from "./ActiveTicket";
import AllTickets from "./AllTickets";
import AssignTicket from "./AssignTicket";
import Dashboard from "./Dashboard";
import CreateUsers from "./CreateUsers";

export default function Admin() {
  const [tickets, setTickets] = useState([]);
  const [agents, setAgents] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedPriority, setPriority] = useState("");
  const [selectedAgent, setAgent] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const [assignTicketSelected, setAssignTicketSelected] = useState(true);
  const [activeTicketSelected, setActiveTicketSelected] = useState(false);
  const [allTicketsSelected, setAllTicketsSelected] = useState(false);
  const [createUsersSelected, setCreateUsersSelected] = useState(false);
  const [dashboardSelected, setDashboardSelected] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/admin",
    })
      .then((result) => {
        console.log(result);
        setTickets(result.data.tickets);
        setAgents(result.data.agents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "selectedPriority") {
      setPriority(e.target.value);
    } else if (e.target.name === "selectedAgent") {
      setAgent(e.target.value);
    }
  };

  const onSubmit = (e, ticket) => {
    e.preventDefault();

    console.log(ticket, selectedAgent, selectedPriority);

    let updateData = {
      id: ticket._id,
      priority: selectedPriority,
      assignedTo: selectedAgent,
    };

    axios({
      method: "PUT",
      url: "/admin",
      data: updateData,
    })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelection = (e) => {
    switch (e.target.id) {
      case "assignTicketSelected":
        setAssignTicketSelected(true);
        setActiveTicketSelected(false);
        setAllTicketsSelected(false);
        setDashboardSelected(false);
        setCreateUsersSelected(false);
        break;
      case "activeTicketSelected":
        setAssignTicketSelected(false);
        setActiveTicketSelected(true);
        setAllTicketsSelected(false);
        setDashboardSelected(false);
        setCreateUsersSelected(false);
        break;
      case "allTicketsSelected":
        setAssignTicketSelected(false);
        setActiveTicketSelected(false);
        setAllTicketsSelected(true);
        setDashboardSelected(false);
        setCreateUsersSelected(false);
        break;
      case "createUsersSelected":
        setAssignTicketSelected(false);
        setActiveTicketSelected(false);
        setAllTicketsSelected(false);
        setDashboardSelected(false);
        setCreateUsersSelected(true);
        break;
      case "dashboardSelected":
        setAssignTicketSelected(false);
        setActiveTicketSelected(false);
        setAllTicketsSelected(false);
        setDashboardSelected(true);
        setCreateUsersSelected(false);
        break;
    }
  };

  const navIconClicked = () => {
    console.log("Nav Icon Clicked!");
    setIsMobile(!isMobile);
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
          <nav id="navbar" className={`navBar ${isMobile ? "responsive" : ""}`}>
            <div
              className="navBar-button"
              id="assignTicketSelected"
              onClick={(e) => handleSelection(e)}
              style={{
                backgroundColor: assignTicketSelected ? "#1a2a55" : "white",
                color: assignTicketSelected ? "white" : "black",
              }}
            >
              Assign Ticket
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
            <div
              className="navBar-button"
              id="createUsersSelected"
              onClick={(e) => handleSelection(e)}
              style={{
                backgroundColor: createUsersSelected ? "#1a2a55" : "white",
                color: createUsersSelected ? "white" : "black",
              }}
            >
              Create Users
            </div>
            <div
              className="navBar-button"
              id="dashboardSelected"
              onClick={(e) => handleSelection(e)}
              style={{
                backgroundColor: dashboardSelected ? "#1a2a55" : "white",
                color: dashboardSelected ? "white" : "black",
              }}
            >
              Dashboard
            </div>
            {/* <div className="navBar-icon">
              <BiMenuAltRight onClick={() => navIconClicked()} />
            </div> */}
          </nav>
          <div>
            {assignTicketSelected ? (
              <AssignTicket />
            ) : activeTicketSelected ? (
              <ActiveTicket />
            ) : allTicketsSelected ? (
              <AllTickets />
            ) : createUsersSelected ? (
              <CreateUsers />
            ) : dashboardSelected ? (
              <Dashboard />
            ) : (
              <></>
            )}
          </div>
        </section>
      </main>

      {/* <div className="admin-container">
        <h1>Admin Page</h1>

        <div>
        <form onSubmit={(e) => onSubmit(e)}>
          {tickets.map((ticket) => (
            <div>
              <div>
                {ticket.description} {ticket.createdBy}
              </div>
              <div>
                <select
                  id={ticket._id}
                  name="selectedPriority"
                  onChange={(e) => handleChange(e)}
                  value={ticket.priority}
                >
                  <option defaultValue={ticket.priority}></option>
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </select>
              </div>
              <div>
                <select
                  id={ticket._id}
                  name="selectedAgent"
                  onChange={(e) => handleChange(e)}
                  value={ticket.assignedTo}
                >
                  <option defaultValue={ticket.assignedTo}></option>
                  <option value="agent1">Agent 1</option>
                  <option value="agent2">Agent 2</option>
                  <option value="agent3">Agent 3</option>
                </select>
              </div>
              <input type="submit" value="Update Ticket" />
              <hr />
            </div>
          ))}
          { <p>created by</p>
          <select
            id="priority"
            name="priority"
            onChange={(e) => handleChange(e)}
            value={selectedPriority}
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select> 
        </form>
      </div>}
        {tickets.map((ticket) => (
          <div className="ticket-container">
            <form className="ticket-form" onSubmit={(e) => onSubmit(e, ticket)}>
              <div className="ticket-info-container">
                <p>Description: {ticket.description}</p>
                <p>Created By: {ticket.createdBy}</p>
              </div>
              <div className="priority-container">
                <select
                  id={ticket._id}
                  name="selectedPriority"
                  onChange={(e) => handleChange(e)}
                >
                  <option key="dlfk" defaultValue=""></option>
                  <option key="low" value="LOW">
                    Low
                  </option>
                  <option key="medium" value="MEDIUM">
                    Medium
                  </option>
                  <option key="high" value="HIGH">
                    High
                  </option>
                </select>
              </div>
              <div className="agent-selection-container">
                <select
                  id={ticket._id}
                  name="selectedAgent"
                  onChange={(e) => handleChange(e)}
                >
                  <option key="none" defaultValue=""></option>
                  {agents.map((agent) => (
                    <option key={agent._id} value={agent.username}>
                      {agent.username}
                    </option>
                  ))}
                </select>
              </div>
              <div className="update-button-container">
                <input
                  className="update-button"
                  type="submit"
                  value="Update Ticket"
                />
              </div>
            </form>
          </div>
        ))}
      </div> */}
    </>
  );
}
