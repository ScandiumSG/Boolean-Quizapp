import { Navigate, Route, Routes } from "react-router-dom";
import "./ContentView.css";
import ProfileView from "./ProfileView/ProfileView";
import QuizView from "./QuizView/QuizView";
import CreateQuiz from "./CreateQuiz/CreateQuiz";
import QuizList from "./QuizList/QuizList";
import LoginModal from "../Common/LoginModal/LoginModal";
import { useContext } from "react";
import { loginContext } from "@/contexts/contexts";
import RegisterUser from "./RegisterUser/RegisterUser";

const ContentView = () => {
  const { showLogin } = useContext(loginContext);
  return (
    <div className="background spaced-background star-background scroll-container">
      <div className={showLogin ? "content-view-container blurred" : "content-view-container"}>
        {showLogin && <LoginModal />}
        <Routes>
          <Route path="quiz" element={<QuizList />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="register" element={<RegisterUser />} />
          <Route path="quiz/:id" element={<QuizView />} />
          <Route path="quiz/new" element={<CreateQuiz />} />
          <Route path="*" element={<Navigate replace to="quiz" />} />
        </Routes>
      </div>
    </div>
  );
};

export default ContentView;
