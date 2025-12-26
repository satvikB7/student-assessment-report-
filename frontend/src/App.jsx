// React imports
import { useEffect, useState } from "react";

// Import components
import ScoreSummary from "./components/ScoreSummary.jsx";
import ScoreChart from "./components/ScoreChart.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";

function App() {
  // React states for storing the student report and loading condition
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch student data from backend API when page loads
  useEffect(() => {
    fetch("http://localhost:4000/api/report")
      .then((res) => res.json())
      .then((data) => {
        setReport(data); // Set the report data
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Show loading text while data is being fetched
  if (loading) {
    return <div className="app-container">Loading...</div>;
  }

  // In case no data is available
  if (!report) {
    return <div className="app-container">No report data available.</div>;
  }

  // Destructure data from the fetched report
  const { overallScore, maxScore, scores, name, studentId } = report;

  // Render layout
  return (
    <div className="app-container">
      {/* Header section showing student info and overall score */}
      <header className="header">
        <div>
          <h1 className="title">Speaking Assessment Report</h1>
          <p className="subtitle">
            Student: {name} &middot; ID: {studentId}
          </p>
        </div>
        <div className="overall-box">
          <div className="overall-label">Overall Score</div>
          <div className="overall-value">
            {overallScore.toFixed(1)} / {maxScore}
          </div>
        </div>
      </header>

      {/* Main content: Summary and Feedback sections */}
      <main className="content">
        {/* Summary of scores section */}
        <section className="summary-section">
          <h2 className="section-title">Summary of Scores</h2>
          <div className="summary-layout">
            {/* Left side: progress bars */}
            <ScoreSummary scores={scores} maxScore={maxScore} />
            {/* Right side: radar chart */}
            <ScoreChart scores={scores} maxScore={maxScore} />
          </div>
        </section>

        {/* Feedback section */}
        <section className="feedback-section">
          <h2 className="section-title">Descriptive Feedback</h2>
          <FeedbackSection overallScore={overallScore} scores={scores} />
        </section>
      </main>
    </div>
  );
}

export default App;
