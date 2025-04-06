import express from "express";
import { getPins } from "../controllers/pin.controller.js";

const router = express.Router();

router.get("/", getPins);

export default router;