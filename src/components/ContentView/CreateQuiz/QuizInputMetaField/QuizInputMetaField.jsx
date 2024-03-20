import { useState } from "react"
import "./QuizInputMetaField.css"
import PropTypes from 'prop-types'

const QuizInputMetaField = ({ labelTitle, quizData, questionIndex, fieldIdentifier, changeFunction, charLimit}) => {
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
        <div className="quiz-label-container quiz-meta-container">
            <label htmlFor={fieldIdentifier}>{labelTitle}:  {disableInput && 
                <span style={{color: "red"}}>
                    Max character limit reached.
                </span>}
          </label>
            <input 
                type="text"
                id={fieldIdentifier}
                value={quizData[fieldIdentifier]}
                onChange={(e) => handleChange(e)}
            /><br/>
        </div>
    )
}

QuizInputMetaField.propTypes = {
    questionIndex: PropTypes.number,
    labelTitle: PropTypes.string,
    fieldIdentifier: PropTypes.string,
    quizData: PropTypes.object,
    changeFunction: PropTypes.func,
    charLimit: PropTypes.number,
}

export default QuizInputMetaField