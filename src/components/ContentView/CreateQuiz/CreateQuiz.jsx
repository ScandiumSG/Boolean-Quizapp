import "./CreateQuiz.css"
import { useState, useEffect } from 'react'
import QuizInputField from "./QuizInputField/QuizInputField"

const primaryFields = {
    "title": "Quiz title",
    "description": "Quiz description",
}

// eslint-disable-next-line no-unused-vars
const template = Object.fromEntries(Object.entries(primaryFields).map(([key, _]) => [key, ["", false]]));

const CreateQuiz = () => {
    const [quizData, setQuizData] = useState(template)

    const handleChange = (e, truthy) => {
        setQuizData({...quizData, [e.target.id]: [e.target.value, truthy]})
    }

    useEffect(() => {
        console.log(quizData)
    }, [quizData])

    return (
        <div>
            <div>This is the page to create a new quiz</div>
            {Object.entries(primaryFields).map(([title, description]) => 
                    <QuizInputField 
                        key={title}
                        labelTitle={description}
                        quizTitle={title}
                        quizData={quizData}
                        changeFunction={handleChange}
                    />  
                )}
        </div>
    )
}

export default CreateQuiz