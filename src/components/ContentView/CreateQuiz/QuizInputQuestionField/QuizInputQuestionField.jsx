import PropTypes from 'prop-types'

const QuizInputQuestionField = ({ labelTitle, quizData, questionIndex, fieldIdentifier, changeFunction}) => {

    return (
        <div className="quiz-label-container">
            <label htmlFor={fieldIdentifier}>{labelTitle}:</label>
            <input 
                type="text"
                id={fieldIdentifier}
                value={quizData["questions"][fieldIdentifier]}
                onChange={(e) => changeFunction(e, questionIndex)}
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
}

export default QuizInputQuestionField