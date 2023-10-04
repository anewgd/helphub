import mongoose from "mongoose";

const user = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    enum: ["ADMIN", "CLIENT", "AGENT"],
    required: true,
  },
});

export { user };
