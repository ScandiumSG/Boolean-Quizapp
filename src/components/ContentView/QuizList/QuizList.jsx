import "./QuizList.css";
import QuizListItem from "./QuizListItem";

function QuizList() {
  return (
    <div className="quiz-list-page">
      <h2 className="page-header">Browse Quiz</h2>
      <div className="quiz-list">
        <QuizListItem
          title="Rare insect Species of the Amazon Rainforest"
          description="Lorem ipsum dolor sit amet."
          numQuestions="10"
          authorName="Edward James"
        />
        <QuizListItem
          title="Harry Potter Lore"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          numQuestions="55"
          authorName="Lilly Smith"
        />
        <QuizListItem
          title="Pacific Island Nations"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          numQuestions="22"
          authorName="Zack"
        />
        <QuizListItem
          title="Wine Districts in Northern Spain"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          numQuestions="5"
          authorName="Jimmy Nelson"
        />
        <QuizListItem
          title="C# Fundamentals"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          numQuestions="41"
          authorName="Morgan Brown"
        />
      </div>
    </div>
  );
}

export default QuizList;
