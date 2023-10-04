import mongoose from "mongoose";
import { user } from "./schemas/user";
import { ticket } from "./schemas/ticket";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGO_URI, options)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

const User = mongoose.model("User", user);
const Ticket = mongoose.model("Ticket", ticket);

export { User, Ticket };
