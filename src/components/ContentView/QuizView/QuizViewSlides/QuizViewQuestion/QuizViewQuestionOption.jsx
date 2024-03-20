import PropTypes from "prop-types";

function QuizViewQuestionOption({ option, onCheck, isChecked }) {
  return (
    <div className={isChecked ? "quiz-question-option checked" : "quiz-question-option"} onClick={() => onCheck(option.id)}>
      <div className="checkbox">{isChecked ? "●" : "○"}</div>
      <p>{option.text}</p>
    </div>
  );
}

QuizViewQuestionOption.propTypes = {
  option: PropTypes.object.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default QuizViewQuestionOption;
