const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.get("/api/health", (req, res) => res.send("Backend is running"));

app.post("/api/feedback", async (req, res) => {
  const { name, rating } = req.body;
  await pool.query("INSERT INTO FeedbackEntries(name, rating) VALUES($1,$2)", [name, rating]);
  res.json({ status: "ok" });
});

app.listen(4000, () => console.log("Backend running on port 4000"));

