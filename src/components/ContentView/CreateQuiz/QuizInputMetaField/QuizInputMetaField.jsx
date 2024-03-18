import "./QuizInputMetaField.css"
import PropTypes from 'prop-types'

const QuizInputMetaField = ({ labelTitle, quizData, questionIndex, fieldIdentifier, changeFunction}) => {

    return (
        <div className="quiz-label-container quiz-meta-container">
            <label htmlFor={fieldIdentifier}>{labelTitle}:</label>
            <input 
                type="text"
                id={fieldIdentifier}
                value={quizData[fieldIdentifier]}
                onChange={(e) => changeFunction(e, questionIndex)}
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
}

export default QuizInputMetaField