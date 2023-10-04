import mongoose, { Schema } from "mongoose";

const ticket = new mongoose.Schema({
  description: String,
  createdBy: String,
  priority: {
    type: String,
    enum: ["LOW", "MEDIUM", "HIGH"],
    default: "LOW",
  },
  assignedAgent: String,
  status: {
    type: String,
    enum: ["OPEN", "CLOSED"],
    default: "OPEN",
  },
  agentComment: String,
});

export { ticket };
