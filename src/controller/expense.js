import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { expenseCreateSchema } from "../validators/index.js";

const prisma = new PrismaClient();

export const getExpense = async (req, res) => {
  const { token } = req.cookies;

  const { userId } = jwt.verify(token, "secret");

  try {
    const expenseUser = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        username: true,
        createdAt: true,
        expenses: true,
      },
    });

    res.json(expenseUser);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getExpenseById = async (req, res) => {
  try {
    const expenseCheck = await prisma.expense.findFirst({
      where: { id: req.params.id },
    });

    if (!expenseCheck)
      return res.send({ message: "Data pengeluaran tidak ada" });

    const expenseUser = await prisma.expense.findFirst({
      where: {
        id: req.params.id,
      },
    });

    res.json(expenseUser);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createExpense = async (req, res) => {
  const { token } = req.cookies;

  const { userId } = jwt.verify(token, "secret");

  try {
    const { error, value } = expenseCreateSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { amount, category, notes } = value;

    const expenseUser = await prisma.expense.create({
      data: {
        amount: amount,
        notes: notes,
        category: category,
        userId: userId,
      },
    });

    res.json({
      expense: expenseUser,
      message: "Successfully created expense!",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const editExpense = async (req, res) => {
  const { amount, category, notes } = req.body;

  try {
    const expenseCheck = await prisma.expense.findFirst({
      where: { id: req.params.id },
    });

    if (!expenseCheck)
      return res.send({ message: "Data pengeluaran tidak ada" });

    const updateExpense = await prisma.expense.update({
      where: { id: req.params.id },
      data: {
        amount,
        category,
        notes,
      },
    });

    res.json({
      message: "Successfully updated expense!",
      data: updateExpense,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const expenseCheck = await prisma.expense.findFirst({
      where: { id: req.params.id },
    });

    if (!expenseCheck)
      return res.send({ message: "Data pengeluaran tidak ada" });

    await prisma.expense.delete({ where: { id: req.params.id } });

    res.json({
      message: "Successfully deleted expense!",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
