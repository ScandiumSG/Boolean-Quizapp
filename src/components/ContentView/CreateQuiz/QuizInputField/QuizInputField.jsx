import "./QuizInputField.css"
import PropTypes from 'prop-types'
import { useState } from 'react'

const QuizInputField = ({ labelTitle, quizData, quizTitle, changeFunction}) => {
    const [fieldIsCorrect, setFieldIsCorrect] = useState(false)


    return (
        <>
            <label htmlFor="quizTitle">{labelTitle}:</label>
            <input 
                type="text"
                id={quizTitle}
                value={quizData[quizTitle[0]]}
                onChange={(e) => changeFunction(e, fieldIsCorrect)}
            />
            <input 
                type="radio"
                name={quizTitle + "_radio"}
                value={false}
                onClick={(e) => setFieldIsCorrect(e.target.value)}
            />
            <input 
                type="radio"
                name={quizTitle + "_radio"}
                value={true}
                onClick={(e) => setFieldIsCorrect(e.target.value)}
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