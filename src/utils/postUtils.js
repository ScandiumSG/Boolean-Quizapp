export const validateData = (data) => {
    if (data.title === "" || data.description === "") {
        return ("Both title and description must be filled inn.")
    } else if (data.questions.some((question) => question.text === "")) {
        return ("Question text can't be empty.")
    } else {
        if (data.questions
            .every((question) => !(question.answerOptions.some(answer => answer.isCorrect)))) 
        { return ("Each question must have atleast one (1) correct answer.")}
        if (data.questions
            .every((question) => (question.answerOptions.some(answer => answer.text === "")))) 
        { return ("Each answer alternative must contain an answer.")}
    }
    return "";
}