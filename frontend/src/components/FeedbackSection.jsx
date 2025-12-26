// Individual feedback generators per skill

function getPronunciationFeedback(score) {
  if (score >= 8) return "Uses a full range of pronunciation features with precision and subtlety.";
  if (score >= 7) return "Shows mostly effective pronunciation with good control.";
  if (score >= 6) return "Generally clear pronunciation, some issues with stress and rhythm.";
  return "Needs improvement—listener effort required to understand.";
}

function getFluencyFeedback(score) {
  if (score >= 8) return "Speaks fluently with very few hesitations. Ideas flow smoothly.";
  if (score >= 7) return "Generally fluent with occasional self-correction.";
  if (score >= 6) return "Can maintain speech but sometimes pauses or repeats.";
  return "Frequent pauses and hesitation interrupt conversation flow.";
}

function getVocabularyFeedback(score) {
  if (score >= 8) return "Wide and precise vocabulary use. Flexible with idiomatic expressions.";
  if (score >= 7) return "Good range of words and collocations. Minor errors don’t hinder meaning.";
  if (score >= 6) return "Adequate vocabulary for familiar topics, some word choice errors.";
  return "Limited word range leading to repetition and vague expressions.";
}

function getGrammarFeedback(score) {
  if (score >= 8) return "Complex structures used naturally with rare errors.";
  if (score >= 7) return "Uses variety of tenses and patterns with good control.";
  if (score >= 6) return "Mix of simple and complex sentences, some consistent basic errors.";
  return "Frequent grammatical mistakes that reduce accuracy and clarity.";
}

function getOverallFeedback(score) {
  if (score >= 8) return "Excellent command of English with precise and natural communication.";
  if (score >= 6) return "Good command with occasional inaccuracy, still easy to understand.";
  return "Limited command requiring improvement in fluency, vocabulary, and control.";
}

// Compact UI for feedback per section
function FeedbackItem({ title, score, feedback }) {
  return (
    <div className="feedback-item">
      <h3 className="feedback-title">{title} ({score.toFixed(1)})</h3>
      <p className="feedback-text">{feedback}</p>
    </div>
  );
}

// Main Feedback Section combining all feedbacks
function FeedbackSection({ overallScore, scores }) {
  return (
    <div className="feedback-grid">
      <FeedbackItem title="Overall Performance" score={overallScore} feedback={getOverallFeedback(overallScore)} />
      <FeedbackItem title="Pronunciation" score={scores.pronunciation} feedback={getPronunciationFeedback(scores.pronunciation)} />
      <FeedbackItem title="Fluency & Coherence" score={scores.fluency} feedback={getFluencyFeedback(scores.fluency)} />
      <FeedbackItem title="Vocabulary" score={scores.vocabulary} feedback={getVocabularyFeedback(scores.vocabulary)} />
      <FeedbackItem title="Grammar" score={scores.grammar} feedback={getGrammarFeedback(scores.grammar)} />
    </div>
  );
}

export default FeedbackSection;
