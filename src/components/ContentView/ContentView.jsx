import { Navigate, Route, Routes } from "react-router-dom";
import "./ContentView.css";
import ProfileView from "./ProfileView/ProfileView";
import QuizView from "./QuizView/QuizView";
import CreateQuiz from "./CreateQuiz/CreateQuiz";
import QuizList from "./QuizList/QuizList";

const ContentView = () => {
  return (
    <div className="background spaced-background scroll-container">
      <div className="content-view-container">
        <Routes>
          <Route path="" element={<Navigate replace to="quiz" />} />
          <Route path="quiz" element={<QuizList />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="quiz/:id" element={<QuizView />} />
          <Route path="quiz/new" element={<CreateQuiz />} />
        </Routes>
      </div>
    </div>
  );
};

export default ContentView;
