import "./QuizInputField.css";
import PropTypes from "prop-types";
import { useState } from "react";

const QuizInputField = ({
  labelTitle,
  quizData,
  parentIdentifier,
  fieldIdentifier,
  changeFunction,
  charLimit
}) => {
  const [fieldIsCorrect, setFieldIsCorrect] = useState(false);
  const [fieldValue, setFieldValue] = useState(
    quizData["questions"][parentIdentifier]["answerOptions"][
      fieldIdentifier
    ]["text"]
  );
  const [disableInput, setDisableInput] = useState(false)

  const handleTextChange = (e) => {
    if (e.target.value.length >= charLimit) {
      setDisableInput(true)
      return
    } 
    setDisableInput(false)
    setFieldValue(e.target.value);
    changeFunction(
      parentIdentifier,
      fieldIdentifier,
      e.target.value,
      fieldIsCorrect
    );
  };

  const handleRadioChange = (e) => {
    if (e.target.value === "true") {
      setFieldIsCorrect(true);
      changeFunction(parentIdentifier, fieldIdentifier, fieldValue, true);
    } else {
      setFieldIsCorrect(false);
      changeFunction(parentIdentifier, fieldIdentifier, fieldValue, false);
    }
  };

  return (
    <div className="quiz-label-container question-options">
      <label htmlFor={fieldIdentifier}>
        {parseInt(labelTitle) + 1}:  {disableInput && 
          <span style={{color: "red"}}>
            Max character limit reached.
          </span>}
      </label>
      <input
        type="text"
        id={fieldIdentifier}
        value={quizData["questions"][parentIdentifier]["answerOptions"][fieldIdentifier]["text"]}
        onChange={(e) => handleTextChange(e)}
      />
      <div className="question-options-group">
        <input
          checked={
            quizData["questions"][parentIdentifier]["answerOptions"][fieldIdentifier]["isCorrect"] === false
          }
          type="radio"
          className="radio_button_item"
          id={parentIdentifier + "_" + fieldIdentifier + "_radio_false"}
          name={parentIdentifier + "_" + fieldIdentifier + "_radio"}
          value={false}
          onChange={(e) => handleRadioChange(e)}
        />
        <label
          className="radio_button_label"
          htmlFor={parentIdentifier + "_" + fieldIdentifier + "_radio_false"}
          style={{ color: "red" }}
        >
          ✕
        </label>
        <input
          checked={
            quizData["questions"][parentIdentifier]["answerOptions"][fieldIdentifier]["isCorrect"] === true
          }
          type="radio"
          className="radio_button_item"
          id={parentIdentifier + "_" + fieldIdentifier + "_radio_true"}
          name={parentIdentifier + "_" + fieldIdentifier + "_radio"}
          value={true}
          onChange={(e) => handleRadioChange(e)}
        />
        <label
          className="radio_button_label"
          htmlFor={parentIdentifier + "_" + fieldIdentifier + "_radio_true"}
          style={{ color: "green" }}
        >
          ✓
        </label>
      </div>
    </div>
  );
};

QuizInputField.propTypes = {
  labelTitle: PropTypes.string,
  parentIdentifier: PropTypes.number,
  fieldIdentifier: PropTypes.string,
  quizData: PropTypes.object,
  changeFunction: PropTypes.func,
  charLimit: PropTypes.number,
};

export default QuizInputField;
