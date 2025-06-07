const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/affirmation", (req, res) => {
  const data = fs.readFileSync(__dirname + "/affirmations.json", "utf-8");
  const affirmations = JSON.parse(data);
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  res.json({ affirmation: random });
});

app.listen(PORT, () => {
  console.log(`CozyNest backend running at http://localhost:${PORT}`);
});
