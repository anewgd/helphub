import React, { useEffect } from "react";

import axios from "axios";
import { useState } from "react";
import { set } from "mongoose";
import { ticket } from "../db/schemas/ticket";
import "../styles/Admin.css";

export default function Admin() {
  const [tickets, setTickets] = useState([]);
  const [agents, setAgents] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedPriority, setPriority] = useState("");
  const [selectedAgent, setAgent] = useState("");

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

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>

      {/* <div>
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
          {/* <p>created by</p>
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
      </div> */}
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
    </div>
  );
}
