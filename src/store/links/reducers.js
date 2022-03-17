import { GET_LINKS_SUCCESS } from "./actions";

export const linksReducers = (state = { data: null, story: null, comments: null }, action) => {
  switch (action.type) {
    case GET_LINKS_SUCCESS:
      return { ...state, data: action.value }
    default:
      return state
  }
}
