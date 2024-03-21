/* eslint-disable no-unused-vars */
import "./CreateQuiz.css";
import { useState, useContext, useEffect } from "react";
import QuizInputField from "./QuizInputField/QuizInputField";
import QuizInputMetaField from "./QuizInputMetaField/QuizInputMetaField";
import QuizInputQuestionField from "./QuizInputQuestionField/QuizInputQuestionField";
import { useNavigate } from "react-router-dom";
import { userContext } from "@/contexts/contexts";
import { validateData } from "@/utils/postUtils";
import { manageQuizUrl, requestData } from "@/utils/apiUtil";

const primaryFields = {
  title: "Quiz title",
  description: "Quiz description",
  questions: [
    {
      "text": "Biggest desert?",
      "order": 0,
      "answerOptions": [
        {
          "text": "Sahara", 
          "isCorrect": false,
        },
        {
          "text": "Gobi", 
          "isCorrect": false,
        },
      ]
    },
  ],
};

const generateEmptyTemplate = (obj) => {
  const res = {};

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      res[key] = value.map((question) => {
        const emptyQuestion = {};
        for (const [questionKey, questionValue] of Object.entries(question)) {
          if (questionKey === "text") {
            emptyQuestion[questionKey] = ""
          } else if (questionKey === "answerOptions") {
            emptyQuestion[questionKey] = questionValue.map(option => ({ text: "", isCorrect: false }));
          } else {
            emptyQuestion[questionKey] = questionValue;
          }
        }
        return emptyQuestion;
      });
    } else if (typeof value === "object" && value !== null) {
      res[key] = generateEmptyTemplate(value);
    } else {
      res[key] = Array.isArray(value) ? value.map(() => "") : "";
    }
  }

  return res;
};

const CreateQuiz = () => {
  const [quizData, setQuizData] = useState(
    generateEmptyTemplate(primaryFields)
  );
  const [errorMessage, setErrorMessage] = useState("")
  const { user } = useContext(userContext)
  const navigate = useNavigate()

  const charLimit = {
    title: 80,
    description: 1000,
    question: 150,
    answer: 80,
  }

  const handleMetaChange = (e) => {
    setQuizData({ ...quizData, [e.target.id]: e.target.value });
  };

  const handleQuestionTextChange = (event, questionIndex) => {
    const modifiedQuestions = quizData.questions.map((question, index) => {
      // If true, we need to make changes then return
      if (index === questionIndex) {
        return {
          ...question,
          ["text"]: event.target.value,
        };
      } else {
        return question;
      }
    });
    setQuizData({ ...quizData, questions: [...modifiedQuestions]});
  };

  const handleQuestionChange = (
    questionIndex,
    fieldIdentifier,
    fieldValue,
    truthy
  ) => {
    const modifiedQuestions = quizData.questions.map((question, index) => {
      // If true, we need to make changes then return
      if (index === questionIndex) {
        const newValue = {"text": fieldValue, "isCorrect": truthy};
        const answerOptions = [...(question.answerOptions)];
        answerOptions[fieldIdentifier] = newValue
        return {
          ...question, ["answerOptions"]: answerOptions
        };
      } else {
        return question;
      }
    });

    setQuizData({ ...quizData, questions: modifiedQuestions });
  };

  const addQuestionOption = (questionIndex) => {
    const newFieldValue = {"text": "", "isCorrect": false};
    const data = quizData;
    data.questions[questionIndex]["answerOptions"].push(newFieldValue)
    setQuizData({ ...data });
  };

  const addQuestion = () => {
    const newQuestionIndex = quizData.questions.length;
    const newQuestionData = {
      ["text"]: "",
      ["Order"]: newQuestionIndex,
      ["answerOptions"]: [
        {"text": "", "isCorrect": false},
        {"text": "", "isCorrect": false},
      ]
    };
    const data = quizData;
    data.questions.push(newQuestionData);
    setQuizData({ ...data });
  };

  const submitQuiz = async () => {
    let data = quizData
    data = {...data, "userId": user.id}
    
    const validation = validateData(data)
    if (validation !== "") {
      setErrorMessage(validation)
      return;
    }


    await fetch(manageQuizUrl, requestData(user, data, "POST"))
      .then((res) => res.json())
      .then((res) => console.log(res))
    navigate("/quiz")
  }

  useEffect(() => {
    if (!user) {
      navigate("/quiz")
    }
  }, [])

  if (!quizData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="page-header">Create New Quiz</h1>
      <h2 className="menu-header">Quiz Details</h2>
      <div className="menu-panel question-container">
        <QuizInputMetaField
          labelTitle={"Quiz name"}
          fieldIdentifier={"title"}
          quizData={quizData}
          changeFunction={handleMetaChange}
          charLimit={charLimit.title}
        />
        <QuizInputMetaField
          labelTitle={"Quiz description"}
          fieldIdentifier={"description"}
          quizData={quizData}
          changeFunction={handleMetaChange}
          charLimit={charLimit.description}
        />
      </div>
      {Object.entries(quizData.questions).map(([key, option]) => (
        <div key={key}>
          <h2 className="menu-header">{"Question " + (parseInt(key) + 1)}</h2>
          <div
            key={key}
            id={"question-container-" + (parseInt(key) + 1)}
            className="menu-panel question-container"
          >
            <QuizInputQuestionField
              key={key}
              questionIndex={parseInt(key)}
              labelTitle="Question text"
              fieldIdentifier={"text"}
              quizData={quizData}
              changeFunction={handleQuestionTextChange}
              charLimit={charLimit.question}
            />

            {Object.entries(option["answerOptions"]).map(
              ([optionKey, _]) => (
                  <QuizInputField
                  key={optionKey}
                  fieldIndex={optionKey}
                  labelTitle={optionKey.replace("_", " ")}
                  parentIdentifier={parseInt(key)}
                  fieldIdentifier={optionKey}
                  quizData={quizData}
                  changeFunction={handleQuestionChange}
                  charLimit={charLimit.answer}
                />
                )
            )}
            <button
              className="add-question-option-button"
              onClick={() => addQuestionOption(key)}
            >
              <span>+</span>
            </button>
          </div>
        </div>
        ))
      }
      <button className="add-question-button" onClick={() => addQuestion()}>
        {" "}
        Add another question!{" "}
      </button>
      {errorMessage !== "" && <p style={{color: "red"}}>{errorMessage}</p>}
      <button className="submit-quiz-button" onClick={() => submitQuiz()}>
        {" "}
        Submit the quiz!{" "}
      </button>
    </>
  );
};

export default CreateQuiz;
