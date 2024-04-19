import { baseQuizUrl } from "@/utils/apiUtil";
import "./QuizList.css";
import QuizListItem from "./QuizListItem";
import { useEffect, useState } from "react";

function QuizList() {
  const [quizList, setQuizList] = useState([]);

  const fetchQuizList = async () => {
    await fetch(baseQuizUrl)
      .then((res) => res.json())
      .then((res) => res.data)
      .then((res) => setQuizList([...res]))
      .catch(() => console.error("Error fetching quiz feed."));
  };

  useEffect(() => {
    fetchQuizList();
  }, []);

  if (quizList.length === 0) {
    return <div className="page-loading"><img src="/loading.svg" alt="Loading indicator"/></div>;
  }

  return (
    <>
      <h1 id="quiz-list-page-header" className="page-header">
        Try Other Users&apos; Quiz!
      </h1>
      <h2 className="menu-header">Latest Quizzes</h2>
      <div className="menu-panel">
        <div className="quiz-list">
          {quizList.map((quizItem, index) => (
            <QuizListItem key={index} quizItem={quizItem} />
          ))}
        </div>
      </div>
    </>
  );
}

export default QuizList;
