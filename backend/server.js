const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const studentReport = {
  studentId: "SS-001",
  name: "Satvik K",
  overallScore: 7.2,
  maxScore: 9,
  scores: {
    pronunciation: 8,
    fluency: 6.7,
    vocabulary: 6.2,
    grammar: 6.4
  }
};

app.get("/api/report", (req, res) => {
  res.json(studentReport);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
