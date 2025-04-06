import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import pinRoutes from "./routes/pin.route.js";
import commentRoutes from "./routes/comment.route.js";
import boardRoutes from "./routes/board.route.js";
import connectDB from "./utils/connectDB.js";

const app = express();
app.use(express.json());

const allowedOrigins = [process.env.CLIENT_URI, "http://localhost:5173"];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
}));

const PORT = process.env.PORT || 3000;

app.use("/pinnacle/users", userRouter);
app.use("/pinnacle/pins", pinRoutes);
app.use("/pinnacle/comments", commentRoutes);
app.use("/pinnacle/boards", boardRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`✨ Server is running on http://127.0.0.1:${PORT}`);
});
