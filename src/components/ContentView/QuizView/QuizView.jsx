import { useContext, useEffect, useState } from "react";
import "./QuizView.css";
import { useNavigate, useParams } from "react-router-dom";
import QuizViewCover from "./QuizViewSlides/QuizViewCover";
import QuizViewQuestion from "./QuizViewSlides/QuizViewQuestion/QuizViewQuestion";
import QuizViewResults from "./QuizViewSlides/QuizViewResults";
import { userContext } from "@/contexts/contexts";
import { baseQuizUrl, requestData, requestWithoutData } from "@/utils/apiUtil";

const QuizView = () => {
  const { id } = useParams();
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(-1);
  const [quizDetails, setQuizDetails] = useState(undefined);
  const [questions, setQuestions] = useState(undefined);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userQuizResults, setUserQuizResults] = useState({});

  const fetchQuiz = async () => {
    try {
      await fetch(`${baseQuizUrl}/${id}`, requestWithoutData(user, "GET"))
        .then((res) => res.json())
        .then((res) => res.data)
        .then((res) => {
          setQuizDetails({ ...res });
          setQuestions([...res.questions]);
        });
    } catch (error) {
      console.error("Error fetching quiz: " + error);
    }
  };

  const onSubmitQuestion = (questionAnswers) => {
    setUserAnswers([...userAnswers, questionAnswers]);
    setSlideIndex(slideIndex + 1);
  };

  const submitQuiz = async () => {
    const dataPost = {
      userId: user.id,
      questions: userAnswers,
    };

    await fetch(`${baseQuizUrl}/${id}`, requestData(user, dataPost, "POST"))
      .then((res) => res.json())
      .then((res) => res.data)
      .then((res) => setUserQuizResults({ ...res }));
  };

  useEffect(() => {
    if (!user) {
      navigate("/quiz");
    }

    if (id && !quizDetails) {
      fetchQuiz();
    }
  }, []);

  useEffect(() => {
    document.getElementsByClassName("scroll-container")[0].scrollTo(0, 0);
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
            return <QuizViewResults results={userQuizResults} />;
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
