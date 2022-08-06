

const initialeState = {
    questions: [],
    categorie:[],



    
};

    export const questionReducer = (state =  initialeState, { type, payload }) => {
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

        case  "FIND_QUESTION_FOR_REPONSE":
            return { ...state, ...payload };
       

        case "REMOVE_SELECTED_QUESTION":
      return {};

        default:
        return state;
    }
};

export const findQuestionByIdReducer = (state = {}, { type, payload }) => {
    
    switch (type) {
        case  "FIND_QUESTION_FOR_REPONSE":
            return { ...state, ...payload };


        default:
        return state;
    }
};

export const categorieReducer = (state =  initialeState, { type, payload }) => {
    switch (type) {
        case "GET_CATEGORIE":
    return { ...state, categorie: payload };

    default:
    return state;
}
};







