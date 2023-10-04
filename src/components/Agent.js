import React, { useEffect } from "react";

import axios from "axios";
import { ticket } from "../db/schemas/ticket";

import "../styles/Agent.css";

export default function Agent() {
  const [tickets, setTickets] = React.useState([]);
  const [comment, setComment] = React.useState("");
  const [status, setStatus] = React.useState("");

  const user = localStorage.getItem("currentUser");
  const currentUser = JSON.parse(user);

  useEffect(() => {
    axios({
      method: "GET",
      url: "agent/" + currentUser.username,
    })
      .then((result) => {
        console.log(result);
        setTickets(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "status") {
      setStatus(e.target.value);
    } else if (e.target.name === "comment") {
      setComment(e.target.value);
    }
  };
  const onSubmit = (e, ticket) => {
    e.preventDefault();

    console.log(ticket, comment, status);

    let updateData = {
      id: ticket._id,
      agentComment: comment,
      status: status,
    };

    axios({
      method: "PUT",
      url: "/agent",
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
    <div className="agent-container">
      <h1>Agent Page</h1>

      {tickets.map((ticket) => (
        <div className="ticket-container">
          <form onSubmit={(e) => onSubmit(e, ticket)}>
            <div className="ticket-info">
              <p>Description: {ticket.description}</p>
              <p>Created By: {ticket.createdBy}</p>
              <p>Priority: {ticket.priority}</p>
            </div>
            <div className="comment-container">
              <textarea
                placeholder="Add Comment"
                name="comment"
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            <div className="status-container">
              <select name="status" onChange={(e) => handleChange(e)}>
                <option defaultValue=""></option>
                <option value="OPEN">Open</option>
                <option value="CLOSED">Closed</option>
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
