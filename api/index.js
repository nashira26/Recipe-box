import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
import recipeRoutes from "./routes/recipeRoute.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.listen(3000, () => console.log("Server listening on port 3000"));
app.use(express.json());
app.use(cookieParser());
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/recipe", recipeRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({ success: false, message, statusCode });
});
