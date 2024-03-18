import PropTypes from "prop-types";

function QuizListItem({ title, description, numQuestions, authorName }) {
  return (
    <div className="quiz-list-item">
      <h3 className="quiz-list-item-title">{title}</h3>
      <p className="quiz-list-item-description">{description}</p>
      <div className="quiz-list-item-footer">
        <p className="quiz-list-item-num-questions">
          {numQuestions + " questions"}
        </p>
        <p className="quiz-list-item-author">{"By " + authorName}</p>
      </div>
    </div>
  );
}

QuizListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  numQuestions: PropTypes.any.isRequired,
  authorName: PropTypes.string.isRequired,
};

export default QuizListItem;
