import "./QuizInputField.css"
import PropTypes from 'prop-types'
import { useState } from 'react'

const QuizInputField = ({ labelTitle, quizData, parentIdentifier, fieldIdentifier, changeFunction}) => {
    const [fieldIsCorrect, setFieldIsCorrect] = useState(false)
    const [fieldValue, setFieldValue] = useState(quizData["questions"][parentIdentifier][`${parentIdentifier}_options`][fieldIdentifier][0])

    const handleTextChange = (e) => {
        setFieldValue(e.target.value)
        changeFunction(parentIdentifier, fieldIdentifier, e.target.value, fieldIsCorrect)
    }

    const handleRadioChange = (e) => {
        if (e.target.value === "true") {
            setFieldIsCorrect(true)
            changeFunction(parentIdentifier, fieldIdentifier, fieldValue, true)
        } else {
            setFieldIsCorrect(false)
            changeFunction(parentIdentifier, fieldIdentifier, fieldValue, false)
        }
    }

    return (
        <div className="quiz-label-container question-options">
            <label htmlFor={fieldIdentifier}>{labelTitle}:</label>
            <input 
                type="text"
                id={fieldIdentifier}
                value={quizData["questions"][parentIdentifier][`${parentIdentifier}_options`][fieldIdentifier][0]}
                onChange={(e) => handleTextChange(e)}
            />
            <input 
                checked={quizData["questions"][parentIdentifier][`${parentIdentifier}_options`][fieldIdentifier][1] === false}
                type="radio"
                className="radio_button_item"
                id={parentIdentifier+"_"+fieldIdentifier + "_radio_false"}
                name={parentIdentifier+"_"+fieldIdentifier + "_radio"}
                value={false}
                onChange={(e) => handleRadioChange(e)}
            />
            <label 
                className="radio_button_label" 
                htmlFor={parentIdentifier+"_"+fieldIdentifier + "_radio_false"}
                style={{color: "red"}}
            >
                ✕
            </label>
            <input 
                checked={quizData["questions"][parentIdentifier][`${parentIdentifier}_options`][fieldIdentifier][1] === true}
                type="radio"
                className="radio_button_item"
                id={parentIdentifier+"_"+fieldIdentifier + "_radio_true"}
                name={parentIdentifier+"_"+fieldIdentifier + "_radio"}
                value={true}
                onChange={(e) => handleRadioChange(e)}
            />
            <label 
                className="radio_button_label" 
                htmlFor={parentIdentifier+"_"+fieldIdentifier + "_radio_true"}
                style={{color: "green"}}
            >
                ✓
            </label>
        </div>
    )
}

QuizInputField.propTypes = {
    labelTitle: PropTypes.string,
    parentIdentifier: PropTypes.number,
    fieldIdentifier: PropTypes.string,
    quizData: PropTypes.object,
    changeFunction: PropTypes.func,
}

export default QuizInputField