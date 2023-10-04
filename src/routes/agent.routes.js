import express from "express";
import {
  getAssignedTickets,
  updateTickets,
} from "../controllers/agent.controller";

const router = express.Router();

router.get("/:username", getAssignedTickets);
router.put("/", updateTickets);
export default router;
