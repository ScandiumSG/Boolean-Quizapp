import { useEffect, useState } from "react";
import "./QuizView.css";
import { useParams } from "react-router-dom";
import QuizViewCover from "./QuizViewSlides/QuizViewCover";
import QuizViewQuestion from "./QuizViewSlides/QuizViewQuestion/QuizViewQuestion";
import QuizViewResults from "./QuizViewSlides/QuizViewResults";

const QuizView = () => {
  const { id } = useParams();
  const [slideIndex, setSlideIndex] = useState(-1);
  const [quizDetails, setQuizDetails] = useState(undefined);
  const [questions, setQuestions] = useState(undefined);
  const [userAnswers, setUserAnswers] = useState([]);

  const setMockQuizData = () => {
    setQuizDetails({ id: 1, userId: "4d2b9157-8675-4f83-a2a1-5b2d261167da", title: "Math Quiz", description: "Test your math skills" });
    setQuestions([
      {
        id: 1,
        text: "What is 2 + 2? (plus additional test to see if long titles look ok)",
        order: 0,
        answerOptions: [
          {
            id: 1,
            text: "4",
          },
          { id: 2, text: "3" },
          { id: 3, text: "666" },
          { id: 4, text: "22" },
          { id: 5, text: "78598569859" },
        ],
      },
      {
        id: 2,
        text: "What is the capital of France?",
        order: 1,
        answerOptions: [
          { id: 6, text: "Paris" },
          { id: 7, text: "London" },
        ],
      },
    ]);
  };

  const fetchQuiz = async () => {
    try {
      const response = await fetch("https://bobbb.azurewebsites.net/play/quiz/" + id);
      const quiz = await response.json();
      setQuizDetails({ title: quiz.data.title, description: quiz.data.description, userId: quiz.data.userId });
      setQuestions(quiz.data.questions);
    } catch (error) {
      console.error("Error fetching quiz: " + error);
    }
  };

  const onSubmitQuestion = (questionAnswers) => {
    setUserAnswers([...userAnswers, questionAnswers]);
    setSlideIndex(slideIndex + 1);
  };

  const submitQuiz = () => {
    //TODO: connect to submit answers url and handle further
    console.log(userAnswers);
  };

  useEffect(() => {
    if (id && !quizDetails) {
      //TODO: change to fetchQuiz()
      setMockQuizData();
    }
  }, []);

  useEffect(() => {
    if (questions && slideIndex === questions.length) {
      submitQuiz();
    }
  }, [slideIndex]);

  return (
    <>
      {(() => {
        if (!quizDetails || !questions) return <div className="page-loading">Loading...</div>;
        switch (true) {
          case slideIndex === -1:
            return <QuizViewCover quizData={quizDetails} numQuestions={questions.length} onStartQuiz={() => setSlideIndex(slideIndex + 1)} />;
          case parseInt(slideIndex) === questions.length:
            return <QuizViewResults />;
          default:
            return (
              <QuizViewQuestion
                question={questions[slideIndex]}
                onNextQuestion={onSubmitQuestion}
                isLastQuestion={parseInt(slideIndex + 1) === questions.length}
              />
            );
        }
      })()}
    </>
  );
};

export default QuizView;
