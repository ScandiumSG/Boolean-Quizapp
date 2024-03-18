/* eslint-disable no-unused-vars */
import "./CreateQuiz.css"
import { useState, useEffect } from 'react'
import QuizInputField from "./QuizInputField/QuizInputField"
import QuizInputMetaField from "./QuizInputMetaField/QuizInputMetaField";
import QuizInputQuestionField from "./QuizInputQuestionField/QuizInputQuestionField";

const primaryFields = {
    "title": "Quiz title",
    "description": "Quiz description",
    "questions": [
        {
            "0_question": "Biggest desert?",
            "0_options": {
                "option_1": ["Sahara", false],
                "option_2": ["Gobi", false],
                "option_3": ["Antartica", true],
                "option_4": ["Nevada", false]
            },
        }, {
            "1_question": "Biggest desert?",
            "1_options": {
                "option_1": ["Sahara", false],
                "option_2": ["Gobi", false],
                "option_3": ["Antartica", true],
                "option_4": ["Nevada", false]
            },
        },
    ]
}

const generateEmptyTemplate = (obj) => {
    const res = {};

    for (const [key, value] of Object.entries(obj)) {
        if (Array.isArray(value)) {
            res[key] = value.map((question) => generateEmptyTemplate(question))
        } else if (typeof value === "object" && value !== null) {
            if (Object.keys(value).some((k) => k.startsWith("option_"))) {
                res[key] = Object.fromEntries(
                    Object.entries(value).map(([optionKey, optionValue]) => [optionKey, ["", optionValue[1]]])
                )
            } else {
                res[key] = generateEmptyTemplate(value)
            }
        } else {
            res[key] = Array.isArray(value) ? value.map(() => ""): "";
        }
    }

    return res
}

const CreateQuiz = () => {
    const [quizData, setQuizData] = useState(generateEmptyTemplate(primaryFields))

    const handleMetaChange = (e) => {
        setQuizData({...quizData, [e.target.id]: e.target.value})
    }

    const handleQuestionTextChange = (event, questionIndex) => {
        const modifiedQuestions = quizData.questions.map((question, index) => {
            // If true, we need to make changes then return
            if (index === questionIndex) {
                return {...question, [`${questionIndex}_question`]: event.target.value} 
            } else {
                return question
            }
        })
        setQuizData({...quizData, questions: modifiedQuestions})
    }

    const handleQuestionChange = (questionIndex, fieldIdentifier, fieldValue, truthy) => {
        const modifiedQuestions = quizData.questions.map((question, index) => {
            // If true, we need to make changes then return
            if (index === questionIndex) {
                const newValue = [fieldValue, truthy]
                return {
                    ...question, [`${questionIndex}_options`]: {
                        ...(question[`${questionIndex}_options`] || {}), 
                            [fieldIdentifier]: newValue
                    }
                } 
            } else {
                return question
            }
        })

        setQuizData({...quizData, questions: modifiedQuestions})
    }

    const addQuestionOption = (questionIndex) => {
        const newFieldValue = ["", false];
        const data = quizData
        const newOptionIndex = Object.keys(data.questions[questionIndex][`${questionIndex}_options`]).length + 1
        data.questions[questionIndex][`${questionIndex}_options`][`option_${newOptionIndex}`] = newFieldValue
        setQuizData({...data})
    }

    const addQuestion = () => {
        const newQuestionIndex = quizData.questions.length
        const newQuestionData = {
            [`${newQuestionIndex}_question`]: "",
            [`${newQuestionIndex}_options`] : {
                "option_1": ["", false],
                "option_2": ["", false]
            }
        }
        const data = quizData
        data.questions.push(newQuestionData)
        setQuizData({...data})
    }

    useEffect(() => {
        console.log(quizData)
    }, [quizData])

    if (!quizData) {
        return (<div>Loading...</div>)
    }

    return (
        <div className="create-quiz-container">
            <h2>This is the page to create a new quiz</h2>
            <div className="question-container">
            <QuizInputMetaField
                labelTitle={"Quiz name"}
                fieldIdentifier={"title"}
                quizData={quizData}
                changeFunction={handleMetaChange}
            />
            <QuizInputMetaField
                labelTitle={"Quiz description"}
                fieldIdentifier={"description"}
                quizData={quizData}
                changeFunction={handleMetaChange}
            />
            </div>
            {Object.entries(quizData.questions).map(([key, option]) => 
                <div key={key} id={"question-container-"+(parseInt(key)+1)} className="question-container">
                    <QuizInputQuestionField
                        key={key}
                        questionIndex={parseInt(key)}
                        labelTitle={"Question " + (parseInt(key)+1) + ":"}
                        fieldIdentifier={`${key}_question`}
                        quizData={quizData}
                        changeFunction={handleQuestionTextChange}
                    />
                    {(Object.entries(option[(parseInt(key))+"_options"])).map(([optionKey, _]) => 
                            <QuizInputField 
                            key={optionKey}
                            labelTitle={optionKey.replace("_", " ")}
                            parentIdentifier={parseInt(key)}
                            fieldIdentifier={optionKey}
                            quizData={quizData}
                            changeFunction={handleQuestionChange}
                            />
                    )}
                    <button onClick={() => addQuestionOption(key)}>
                        +
                    </button>
                </div>
            )}
            <button onClick={() => addQuestion()}>
                Add another question!
            </button>
        </div>
    )
}

export default CreateQuiz