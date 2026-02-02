import express from "express";
import cors from "cors";
import helmet from "helmet";

import authRoutes from "./routes/auth.routes.js";

const app = express();

/* Middlewares */
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Health Check */
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

/* Routes */
app.use("/api/auth", authRoutes);

/* 404 */
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

/* Error Handler */
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: "Server Error",
  });
});

export default app;
