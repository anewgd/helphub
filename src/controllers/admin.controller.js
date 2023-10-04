import { Ticket } from "../db/conn";
import { User } from "../db/conn";

export async function getAllTickets(req, res) {
  const tickets = await Ticket.find().exec();
  const agents = await User.find({ role: "AGENT" }).exec();
  const data = {
    tickets,
    agents,
  };

  res.status(200).send(data);
}

export async function getAllUnassignedTickets(req, res) {
  const tickets = await Ticket.find({ assignedTo: null }).exec();
}

export async function getAllAgents(req, res) {
  const agents = await User.find({ role: "AGENT" }).exec();
  res.status(200).json(agents);
}

export async function updateTicket(req, res) {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const { id, priority, assignedTo } = req.body;

  console.log(id, priority, assignedTo);
  const ticket = await Ticket.findByIdAndUpdate(id, {
    assignedAgent: assignedTo,
    priority: priority,
  });
  res.status(200).send(ticket);
}
