import express from "express";

import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/auth.controller.js";

import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

/* Public */
router.post("/register", registerUser);
router.post("/login", loginUser);

/* Private */
router.get("/me", protect, getMe);

export default router;
