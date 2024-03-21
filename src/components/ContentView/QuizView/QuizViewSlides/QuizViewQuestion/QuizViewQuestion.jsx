import PropTypes from "prop-types";
import QuizViewQuestionOption from "./QuizViewQuestionOption";
import "./QuizViewQuestion.css";
import { useEffect, useState } from "react";

function QuizViewQuestion({ question, onNextQuestion, isLastQuestion = false }) {
  const [userAnswers, setUserAnswers] = useState([]);

  const onCheck = (answerOptionId) => {
    if (!userAnswers.includes(answerOptionId)) {
      setUserAnswers([...userAnswers, answerOptionId]);
    } else {
      setUserAnswers(userAnswers.filter((id) => id !== answerOptionId));
    }
  };

  const onSubmit = () => {
    onNextQuestion({ id: question.id, answerOptionIds: userAnswers });
  };

  useEffect(() => {
    setUserAnswers([]);
  }, [question]);

  return (
    <div className="menu-panel standalone quiz-view-question">
      <div className="quiz-question-header">
        <h3 id="quiz-question-num">{"Question " + Number.parseInt(question.order + 1)}</h3>
        <h3 id="quiz-question-text">{question.text}</h3>
      </div>
      <div className="quiz-question-options">
        {question.answerOptions.map((option, index) => (
          <QuizViewQuestionOption key={index} option={option} onCheck={onCheck} isChecked={userAnswers.includes(option.id)} />
        ))}
      </div>
      <button className="quiz-btn" onClick={onSubmit}>
        {isLastQuestion ? "Finish Quiz" : "Next Question"}
      </button>
    </div>
  );
}

QuizViewQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onNextQuestion: PropTypes.func.isRequired,
  isLastQuestion: PropTypes.bool,
};

export default QuizViewQuestion;
