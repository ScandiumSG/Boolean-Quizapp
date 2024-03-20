import PropTypes from 'prop-types'
import "./QuizInputQuestionField.css"
import { useState } from 'react'

const QuizInputQuestionField = ({ labelTitle, quizData, questionIndex, fieldIdentifier, changeFunction, charLimit}) => {
    const [disableInput, setDisableInput] = useState(false)

    const handleChange = (e) => {
        if (e.target.value.length >= charLimit) {
            setDisableInput(true)
            return
          } 
          setDisableInput(false)
          changeFunction(e, questionIndex)
    }

    return (
        <div className="quiz-label-container quiz-question-container">
            <label htmlFor={fieldIdentifier}>{labelTitle}:  {disableInput && 
                <span style={{color: "red"}}>
                    Max character limit reached.
                </span>}
            </label>
            <input 
                type="text"
                id={fieldIdentifier}
                value={quizData["questions"][questionIndex][fieldIdentifier]}
                onChange={(e) => handleChange(e)}
            /><br/>
        </div>
    )
}

QuizInputQuestionField.propTypes = {
    questionIndex: PropTypes.number,
    labelTitle: PropTypes.string,
    fieldIdentifier: PropTypes.string,
    quizData: PropTypes.object,
    changeFunction: PropTypes.func,
    charLimit: PropTypes.number,
}

export default QuizInputQuestionField