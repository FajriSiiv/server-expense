import express from "express";
import {
  createExpense,
  deleteExpense,
  editExpense,
  getExpense,
  getExpenseById,
} from "../controller/expense.js";

import { Login, Logout, Register } from "../controller/user.js";
import { isLoggedIn } from "../middleware/auth.js";
const router = express.Router();

// expense endpoint
router.get("/v1/api/expense", isLoggedIn, getExpense);
router.get("/v1/api/expense/:id", isLoggedIn, getExpenseById);
router.post("/v1/api/expense", isLoggedIn, createExpense);
router.patch("/v1/api/expense/:id", isLoggedIn, editExpense);
router.delete("/v1/api/expense/:id", isLoggedIn, deleteExpense);

// user endpoint
router.post("/v1/api/register", Register);
router.post("/v1/api/login", Login);
router.get("/v1/api/logout", isLoggedIn, Logout);

export default router;
