import { useContext, useEffect, useState } from "react";
import "./QuizView.css";
import { useNavigate, useParams } from "react-router-dom";
import QuizViewCover from "./QuizViewSlides/QuizViewCover";
import QuizViewQuestion from "./QuizViewSlides/QuizViewQuestion/QuizViewQuestion";
import QuizViewResults from "./QuizViewSlides/QuizViewResults";
import { userContext } from "@/contexts/contexts";
import { baseQuizUrl } from "@/utils/apiUtil";

const QuizView = () => {
  const { id } = useParams();
  const { user } = useContext(userContext)
  const navigate = useNavigate()
  const [slideIndex, setSlideIndex] = useState(-1);
  const [quizDetails, setQuizDetails] = useState(undefined);
  const [questions, setQuestions] = useState(undefined);
  const [userAnswers, setUserAnswers] = useState([]);

  const fetchQuiz = async () => {
    const request = {
        method: "GET",
        headers: {
            "authorization": `Bearer ${user.token}`,
            "content-type": "application/json",
        },
    }

    try {
      await fetch(`${baseQuizUrl}/${id}`, request)
        .then((res) => res.json())
        .then((res) => res.data)
        .then((res) => {
            setQuizDetails({...res})
            setQuestions([...res.questions])
        })
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
    if (!user) {
      navigate("/quiz")
    }

    if (id && !quizDetails) {
      fetchQuiz();
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
