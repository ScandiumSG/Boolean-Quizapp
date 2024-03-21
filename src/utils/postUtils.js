export const validateData = (data) => {
    const errorData = []
    if (data.title === "" || data.description === "") {
        errorData.push("Both title and description must be filled inn.")
    } 
    if (data.questions.some((question) => question.text === "")) {
        errorData.push("Question text can't be empty.")
    }

    if (data.questions.every((question) => 
        !(question.answerOptions.some(answer => answer.isCorrect)))) { 
            errorData.push("Each question must have atleast one (1) correct answer.")
    }
    if (data.questions.every((question) => 
        (question.answerOptions.some(answer => answer.text === "")))) { 
        errorData.push("Each answer alternative must contain an answer.")
    }

    return errorData;
}