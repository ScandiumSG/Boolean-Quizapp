import { Route, Routes } from "react-router-dom"
import "./ContentView.css"
import ProfileView from "./ProfileView/ProfileView"
import QuizView from "./QuizView/QuizView"
import CreateQuiz from "./CreateQuiz/CreateQuiz"

const ContentView = () => {
    return (
        <div className="background spaced-background scroll-container">
            <div className="content-view-container">
                <Routes>
                    <Route
                        path="profile"
                        element={<ProfileView />}
                    />
                    <Route 
                        path="quiz/:id"
                        element={<QuizView />}
                    />
                    <Route 
                        path="quiz/new"
                        element={<CreateQuiz />}
                    />
                </Routes>
            </div>
        </div>
    )
}

export default ContentView