import PropTypes from "prop-types";

function QuizViewCover({ quizData, numQuestions, onStartQuiz }) {
  return (
    <div className="menu-panel standalone nebula-background quiz-view-cover">
      <h3 id="quiz-title">{quizData.title}</h3>
      <p id="quiz-description">{quizData.description}</p>
      <button className="quiz-btn" onClick={onStartQuiz}>
        Start Quiz
      </button>
      <div className="quiz-view-cover-footer">
        <p id="quiz-num-questions">{numQuestions + " Questions"}</p>
        <p id="quiz-author">{"By " + quizData.userName}</p>
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
