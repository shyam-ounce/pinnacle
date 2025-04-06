import express from "express";
import { boardController } from "../controllers/board.controller.js";

const router = express.Router();

router.get("/test", boardController);

export default router;