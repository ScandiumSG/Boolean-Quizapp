import { PieChart } from "@mui/x-charts/PieChart";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function QuizViewResults({ results }) {
  console.log(results);
  const missedCorrectAnswers = (data) => {
    if (data.highestPossibleScore > 0) {
      return data.highestPossibleScore - data.correct;
    } else {
      return 0;
    }
  };

  const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    legend: { hidden: true },
  };

  let navigate = useNavigate();
  return (
    <div className="menu-panel standalone quiz-view-results">
      <div className="text-group">
        <h3 className="quiz-view-results-header">Your total score:</h3>
        <p id="total-score">{results.score}</p>
      </div>
      <div className="text-group">
        <p>
          You got {results.correct}/{results.highestPossibleScore} correct{results.correct === results.highestPossibleScore ? "!" : "."}
        </p>
        {missedCorrectAnswers(results) > 0 && (
          <p>
            You missed {missedCorrectAnswers(results)} correct answer option{parseInt(missedCorrectAnswers(results)) > 1 ? "s" : ""}.
          </p>
        )}
      </div>
      {results.highestPossibleScore && (
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: results.correct, label: "Correct", color: "green" },
                { id: 1, value: missedCorrectAnswers(results.correct), label: "Missed", color: "yellow" },
                { id: 2, value: results.wrong, label: "Incorrect", color: "red" },
              ],
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          width={250}
          height={250}
          {...sizing}
        />
      )}
      <div className="quiz-view-results-footer">
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
