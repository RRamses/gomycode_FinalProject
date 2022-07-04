const intialState = {
    questions: [],
};

    export const questionReducer = (state = intialState, { type, payload }) => {
        switch (type) {
            case "GET_QUESTIONS":
        return { ...state, questions: payload };
        default:
        return state;
    }
};


export const selectedQuestionReducer = (state = {}, { type, payload }) => {
    
    switch (type) {

        case "SELECTED_QUESTION_FOR_REPONSE":
        return { ...state, ...payload };


        default:
        return state;
    }
};



