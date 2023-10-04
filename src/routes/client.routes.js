import express from "express";

import {
  createTicket,
  getTicketsByClient,
} from "../controllers/client.controller";

const router = express.Router();

router.post("/", createTicket);
router.get("/:username", getTicketsByClient);

export default router;
