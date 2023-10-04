import { User } from "../db/conn";
import { Ticket } from "../db/conn";

export async function getAssignedTickets(req, res) {
  const tickets = await Ticket.find({ assignedAgent: req.params.username });
  res.json(tickets);
}

export async function updateTickets(req, res) {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const { id, agentComment, status } = req.body;

  console.log(id, agentComment, status);

  const ticket = await Ticket.findByIdAndUpdate(id, {
    agentComment: agentComment,
    status: status,
  });
  res.status(200).send(ticket);
}
