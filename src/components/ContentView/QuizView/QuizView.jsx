import { useEffect, useState } from "react";
import "./QuizView.css";
import { useParams } from "react-router-dom";
import QuizViewCover from "./QuizViewSlides/QuizViewCover";
import QuizViewQuestion from "./QuizViewSlides/QuizViewQuestion";

const QuizView = () => {
  const { id } = useParams();
  const [slideIndex, setSlideIndex] = useState(-1);
  const [quiz, setQuiz] = useState(undefined);
  const [userAnswers, setUserAnswers] = useState([]);

  const fetchQuiz = async () => {
    try {
      const response = await fetch("https://bobbb.azurewebsites.net/play/quiz/" + id);
      const quizData = await response.json();
      setQuiz(quizData.data);
    } catch (error) {
      console.error("Error fetching quiz: " + error);
    }
  };

  useEffect(() => {
    if (id && !quiz) {
      fetchQuiz();
    }
  }, []);

  return (
    <>
      {(() => {
        if (!quiz) return <div className="page-loading">Loading...</div>;
        switch (true) {
          case slideIndex === -1:
            return <QuizViewCover quizData={quiz} numQuestions={quiz.questions.length} onStartQuiz={() => setSlideIndex(slideIndex + 1)} />;
          default:
            return <QuizViewQuestion />;
        }
      })()}
    </>
  );
};

export default QuizView;
