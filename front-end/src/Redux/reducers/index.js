import { combineReducers } from "redux";
import { categorieReducer, findQuestionByIdReducer,  questionReducer, selectedQuestionReducer } from "./questionReducer";

const reducers = combineReducers({
  allQuestions: questionReducer,
  question: selectedQuestionReducer,
  findQuestionById:findQuestionByIdReducer,
  findallcategorie:categorieReducer,
});
export default reducers;