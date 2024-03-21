import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function QuizListItem({ quizItem }) {
  const navigate = useNavigate()
  
  return (
    <div className="quiz-list-item nebula-background"onClick={() => navigate(`/quiz/${quizItem.id}`)}>
      <h3 className="quiz-list-item-title">{quizItem.title}</h3>
      <p className="quiz-list-item-description">{quizItem.description}</p>
      <div className="quiz-list-item-footer">
        <p className="quiz-list-item-num-questions">
          {quizItem.length + " questions"}
        </p>
        <p className="quiz-list-item-author">{"By " + quizItem.userName}</p>
      </div>
    </div>
  );
}

QuizListItem.propTypes = {
  quizItem: PropTypes.shape({
    title: PropTypes.string,
    userId: PropTypes.string,
    userName: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
    length: PropTypes.number,
  }).isRequired
};

export default QuizListItem;
