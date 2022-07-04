


export const getQuestion = (questions) => {
    return {
        type: "GET_QUESTIONS",
        payload: questions,
    };
};

export const selectedQuestion = (questions) => {
    return {
        type: "SELECTED_QUESTION_FOR_REPONSE",
        payload: questions,
    };
};

