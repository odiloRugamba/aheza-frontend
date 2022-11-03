import { GET_QUESTIONS_SUCCESS, ANSWER_QUESTIONS_SUCCESS } from "./actions";

export const SurveyReducers = (state = { data: null, status: null }, action) => {
  switch (action.type) {
    case GET_QUESTIONS_SUCCESS:
      return { ...state, data: action.value }
    case ANSWER_QUESTIONS_SUCCESS:
      return { ...state, status: action.value }
    default:
      return state
  }
}
