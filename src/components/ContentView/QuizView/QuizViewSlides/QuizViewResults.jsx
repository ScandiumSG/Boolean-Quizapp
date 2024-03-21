import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function QuizViewResults({results}) {
  const missedCorrectAnswers = (data) => {
    return (data.highestPossibleScore - data.correct)
  }

  let navigate = useNavigate();
  return (
    <div className="menu-panel standalone quiz-view-results">
      <h3 className="quiz-view-results-header">You got {results.correct}/{results.highestPossibleScore} correct!</h3>
      <p>Your total score was: {results.score}</p>
      {missedCorrectAnswers(results) > 0 && <p>You missed {missedCorrectAnswers(results)} correct answer options.</p>}
      <div className="quiz-view-results-footer">
        <button className="quiz-btn">Scoreboard</button>
        <button className="quiz-btn" onClick={() => navigate("/")}>
          Exit
        </button>
      </div>
    </div>
  );
}

QuizViewResults.propTypes = {
  results: PropTypes.object,
};

export default QuizViewResults;
