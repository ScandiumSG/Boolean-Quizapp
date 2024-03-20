import "./QuizList.css";
import QuizListItem from "./QuizListItem";
import { useEffect, useState } from "react"

function QuizList() {
  const [quizList, setQuizList] = useState([])

  const fetchQuizList = async () => {
    const request = {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }
    await fetch("https://bobbb.azurewebsites.net/play/quiz/", request)
      .then((res) => res.json())
      .then((res) => res.data)
      .then((res) => console.log(res))
      .then((res) => setQuizList([...res]))
  }

  useEffect(() => {
    fetchQuizList()
  }, [])

  if (quizList.length === 0) {
    return (<div style={{display: "flex", marginTop: "50px"}}>Loading...</div>)
  }

  return (
    <>
      <h1 className="page-header">The Web&apos;s #1 Quiz App</h1>
      <h2 className="menu-header">Latest Quizzes</h2>
      <div className="menu-panel">
        <div className="quiz-list">
          {quizList.map((quizItem, index) => 
            <QuizListItem
              key={index}
              title={quizItem.title}
              description={quizItem.description}
              numQuestions={quizItem.length}
              authorName={quizItem.userId}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default QuizList;
