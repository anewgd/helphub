import express from "express";
import {
  getAllTickets,
  getAllAgents,
  updateTicket,
} from "../controllers/admin.controller";
const router = express.Router();

router.get("/", getAllTickets);
router.get(":agents", getAllAgents);
router.put("/", updateTicket);
export default router;
