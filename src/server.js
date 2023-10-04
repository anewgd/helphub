// tvar express = require("express");

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import login from "./routes/login.routes";
import client from "./routes/client.routes";
import agent from "./routes/agent.routes";

import admin from "./routes/admin.routes";

//import loginRouter from "./routes/login.routes";

//var bodyParser = require("body-parser");

//var cors = require("cors");

const app = express();

const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.use("/login", login);
app.use("/client", client);
app.use("/agent", agent);

app.use("/admin", admin);
// app.use("/", loginRouter);

// app.post("/", (req, res) => {
//   const { username, password } = req.body;

//   res.status(200).send({ message: `USER: ${username}, PASS: ${password}` });
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

export default app;
