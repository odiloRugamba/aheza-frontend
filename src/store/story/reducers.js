import { GET_STORYS_SUCCESS, GET_STORY_BY_ID_SUCCESS, GET_STORY_COMMNETS_SUCCESS } from "./actions";

export const StorysReducers = (state = { data: null, story: null, comments: null }, action) => {
  switch (action.type) {
    case GET_STORYS_SUCCESS:
      return { ...state, data: action.value }
    case GET_STORY_BY_ID_SUCCESS:
      return { ...state, story: action.value }
    case GET_STORY_COMMNETS_SUCCESS:
      return { ...state, comments: action.value }
    default:
      return state
  }
}
