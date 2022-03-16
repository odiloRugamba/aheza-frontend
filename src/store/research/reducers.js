import { GET_RESEARCHS_SUCCESS, GET_RESEARCH_BY_ID_SUCCESS, GET_RESEARCH_COMMNETS_SUCCESS, POST_RESEARCH_COMMNETS_SUCCESS } from "./actions";

export const ResearchReducers = (state = { data: null, research: null, commnets: null }, action) => {
  switch (action.type) {
    case GET_RESEARCHS_SUCCESS:
      return { ...state, data: action.value }
    case GET_RESEARCH_BY_ID_SUCCESS:
      return { ...state, research: action.value }
    case GET_RESEARCH_COMMNETS_SUCCESS:
      return { ...state, commnets: action.value }
    default:
      return state
  }
}
