import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function QuizViewResults(props) {
  let navigate = useNavigate();
  return (
    <div className="menu-panel standalone quiz-view-results">
      <h3 className="quiz-view-results-header">You got 3/3 correct!</h3>
      <div className="quiz-view-results-footer">
        <button className="quiz-btn">Scoreboard</button>
        <button className="quiz-btn" onClick={() => navigate("/")}>
          Exit
        </button>
      </div>
    </div>
  );
}

QuizViewResults.propTypes = {};

export default QuizViewResults;
