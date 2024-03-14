import "./QuizView.css"
import { useParams } from "react-router-dom"

const QuizView = () => {
    const { id } = useParams();
    return (
        <div>This is the quiz view for quiz with Id: {id}</div>
    )
}

export default QuizView