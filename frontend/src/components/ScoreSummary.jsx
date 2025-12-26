// Each skill row
function ScoreRow({ label, value, max }) {
  // Calculate percentage width for progress bar
  const percentage = (value / max) * 100;

  return (
    <div className="score-row">
      {/* Skill name and numeric score */}
      <div className="score-row-header">
        <span className="score-label">{label}</span>
        <span className="score-value">
          {value.toFixed(1)} / {max}
        </span>
      </div>

      {/* Progress bar visualization */}
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

// Summary section listing all skills
function ScoreSummary({ scores, maxScore }) {
  return (
    <div className="score-summary-card">
      <ScoreRow label="Pronunciation" value={scores.pronunciation} max={maxScore} />
      <ScoreRow label="Fluency" value={scores.fluency} max={maxScore} />
      <ScoreRow label="Vocabulary" value={scores.vocabulary} max={maxScore} />
      <ScoreRow label="Grammar" value={scores.grammar} max={maxScore} />
    </div>
  );
}

export default ScoreSummary;
