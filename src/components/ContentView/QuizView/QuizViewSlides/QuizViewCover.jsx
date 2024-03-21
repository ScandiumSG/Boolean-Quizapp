import { userContext } from "@/contexts/contexts";
import { manageQuizUrl, requestWithoutData } from "@/utils/apiUtil";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function QuizViewCover({ quizData, numQuestions, onStartQuiz }) {
  const { user } = useContext(userContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const deleteQuiz = async () => {
    await fetch(manageQuizUrl + `/${quizData.id}`, requestWithoutData(user, "DELETE"))
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not delete quiz.");
        }
      })
      .catch(() => console.error("Error deleting quiz feed."));
  };

  const onDeleteQuiz = async () => {
    await deleteQuiz();
    navigate("/");
  };

  useEffect(() => {
    if (user && user.role === 1) {
      setIsAdmin(true);
    }
  }, [user]);

  return (
    <div className="menu-panel standalone nebula-background quiz-view-cover">
      {isAdmin ? (
        <div className="quiz-view-cover-header">
          <button id="delete-btn" onClick={onDeleteQuiz}>
            Delete
          </button>
        </div>
      ) : null}
      <h3 id="quiz-title">{quizData.title}</h3>
      <p id="quiz-description">{quizData.description}</p>
      <button className="quiz-btn" onClick={onStartQuiz}>
        Start Quiz
      </button>
      <div className="quiz-view-cover-footer">
        <p id="quiz-num-questions">{numQuestions + " Questions"}</p>
        <p id="quiz-author">{"By " + quizData.userName}</p>
      </div>
    </div>
  );
}

QuizViewCover.propTypes = {
  quizData: PropTypes.object.isRequired,
  numQuestions: PropTypes.any.isRequired,
  onStartQuiz: PropTypes.func,
};

export default QuizViewCover;
