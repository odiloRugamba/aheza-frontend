import { GET_RESEARCHS_SUCCESS, GET_RESEARCH_BY_ID_SUCCESS } from "./actions";

export const ResearchReducers = (state = { data: null, research: null }, action) => {
  switch (action.type) {
    case GET_RESEARCHS_SUCCESS:
      return { ...state, data: action.value }
    case GET_RESEARCH_BY_ID_SUCCESS:
      console.log()
      return { ...state, research: action.value }
    default:
      return state
  }
}
