


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

export const findQuestionById = (questions) => {
  return {
      type: "FIND_QUESTION_FOR_REPONSE",
      payload: questions,
  };
};


export const removeSelectedQuestion = () => {
  return {
    type:"REMOVE_SELECTED_QUESTION",
  };
};

export const getCategorie = (categorie) => {
  return {
      type: "GET_CATEGORIE",
      payload: categorie,
  };
};

