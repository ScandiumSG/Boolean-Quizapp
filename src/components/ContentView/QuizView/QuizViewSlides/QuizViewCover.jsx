import PropTypes from "prop-types";

function QuizViewCover({ quizData, numQuestions, onStartQuiz }) {
  return (
    <div className="menu-panel standalone nebula-background quiz-view-cover">
      <h3 id="quiz-title">{quizData.title}</h3>
      <p id="quiz-description">{quizData.description}</p>
      <button id="start-quiz-btn" onClick={onStartQuiz}>
        Start Quiz
      </button>
      <div className="quiz-view-cover-footer">
        <p id="quiz-num-questions">{"Number of questions: " + numQuestions}</p>
        <p id="quiz-autjhor">{"Created by: " + quizData.userId}</p>
      </div>
    </div>
  );
}

QuizViewCover.propTypes = {
  quizData: PropTypes.object.isRequired,
  numQuestions: PropTypes.any.isRequired,
  onStartQuiz: PropTypes.func,
};

export default QuizViewCover;
