import { Ticket } from "../db/conn";

export async function createTicket(req, res) {
  if (!req.body) {
    res.status(400).send({ message: "Content can't be empty!" });
    return;
  } else {
    const newData = new Ticket(req.body);

    try {
      await newData.save();
      res.status(201).send({
        message: `'${req.body.description}' ticket created successfully.`,
      });
      return;
    } catch (error) {
      console.error(
        ` Failed to create ticket '${req.body.description}'`,
        error
      );
    }
  }

  //   console.log(
  //     req.body.description,
  //     "Arrived at backend created by ",
  //     req.body.createdBy
  //   );
}

export async function getTicketsByClient(req, res) {
  if (!req.params.username) {
    res.status(400).send({ message: "username is required!" });
    return;
  }
  console.log(req.params.username);
  const { username } = req.params;
  const tickets = await Ticket.find({ createdBy: username }).exec();
  res.status(200).json(tickets);
}
