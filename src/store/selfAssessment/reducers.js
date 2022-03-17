import { GET_SELF_ASSESSMENT_QUESTIONS_SUCCESS, ANSWER_SELF_ASSESSMENT_QUESTIONS_SUCCESS } from "./actions";

export const SelfAssessmentReducers = (state = { data: null, status: null }, action) => {
  switch (action.type) {
    case GET_SELF_ASSESSMENT_QUESTIONS_SUCCESS:
      return { ...state, data: action.value }
    case ANSWER_SELF_ASSESSMENT_QUESTIONS_SUCCESS:
      return { ...state, status: action.value }
    default:
      return state
  }
}
