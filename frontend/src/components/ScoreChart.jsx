import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Register radar chart elements
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Chart component
function ScoreChart({ scores, maxScore }) {
  // Labels for axes
  const labels = ["Pronunciation", "Fluency", "Vocabulary", "Grammar"];
  
  // Values for each skill
  const values = [
    scores.pronunciation,
    scores.fluency,
    scores.vocabulary,
    scores.grammar
  ];

  // Radar chart data
  const data = {
    labels,
    datasets: [
      {
        label: "Scores",
        data: values,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(54, 162, 235, 1)"
      }
    ]
  };

  // Radar chart look/style settings
  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: maxScore,
        ticks: { stepSize: 1 }  // Scale 0–9
      }
    },
    plugins: {
      legend: { display: false }  // Hide chart legend
    }
  };

  return (
    <div className="score-chart-card">
      <Radar data={data} options={options} />
    </div>
  );
}

export default ScoreChart;
