const express = require("express");
const app = express();

app.use(express.json());

// In-memory data
let expenses = [];
let income = [];

/* ======================
   HOME (Direct Link)
====================== */
app.get("/", (req, res) => {
  res.send(`
    <h2>Personal Finance Tracker API</h2>
    <ul>
      <li><a href="/api/dashboard">/api/dashboard</a></li>
      <li><a href="/api/expenses">/api/expenses</a></li>
      <li><a href="/api/income">/api/income</a></li>
    </ul>
  `);
});

/* ======================
   DASHBOARD
====================== */
app.get("/api/dashboard", (req, res) => {
  res.json({
    totalExpenses: expenses.length,
    totalIncome: income.length
  });
});

/* ======================
   EXPENSES
====================== */
app.get("/api/expenses", (req, res) => {
  res.json(expenses);
});

app.post("/api/expenses", (req, res) => {
  expenses.push(req.body);
  res.status(201).json({
    message: "Expense added",
    data: req.body
  });
});

/* ======================
   INCOME
====================== */
app.get("/api/income", (req, res) => {
  res.json(income);
});

app.post("/api/income", (req, res) => {
  income.push(req.body);
  res.status(201).json({
    message: "Income added",
    data: req.body
  });
});

/* ======================
   SERVER
====================== */
const server = app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

module.exports = { app, server };
