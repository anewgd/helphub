import express from "express";
import { login, test } from "../controllers/login.controller";

const router = express.Router();

router.post("/", login);

export default router;
