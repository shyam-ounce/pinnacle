import express from "express";
import { commentController } from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/test", commentController);

export default router;