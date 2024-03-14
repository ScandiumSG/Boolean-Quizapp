import "./QuizInputField.css"
import PropTypes from 'prop-types'
import { useState } from 'react'

const QuizInputField = ({ labelTitle, quizData, quizTitle, changeFunction}) => {
    const [fieldIsCorrect, setFieldIsCorrect] = useState(false)
    const [fieldValue, setFieldValue] = useState(quizData[quizTitle[0]])

    const handleTextChange = (e) => {
        setFieldValue(e.target.value)
        changeFunction(quizTitle, e.target.value, fieldIsCorrect)
    }

    const handleRadioChange = (e) => {
        if (e.target.value === "true") {
            setFieldIsCorrect(true)
            changeFunction(quizTitle, fieldValue, true)
        } else {
            setFieldIsCorrect(false)
            changeFunction(quizTitle, fieldValue, false)
        }
    }

    return (
        <>
            <label htmlFor="quizTitle">{labelTitle}:</label>
            <input 
                type="text"
                id={quizTitle}
                value={quizData[quizTitle[0]]}
                onChange={(e) => handleTextChange(e)}
            />
            <input 
                checked={!fieldIsCorrect}
                type="radio"
                name={quizTitle + "_radio"}
                value={false}
                onChange={(e) => handleRadioChange(e)}
            />
            <input 
                checked={fieldIsCorrect}
                type="radio"
                name={quizTitle + "_radio"}
                value={true}
                onChange={(e) => handleRadioChange(e)}
            />
        </>
    )
}

QuizInputField.propTypes = {
    labelTitle: PropTypes.string,
    quizTitle: PropTypes.string,
    quizData: PropTypes.object,
    changeFunction: PropTypes.func,
}

export default QuizInputField