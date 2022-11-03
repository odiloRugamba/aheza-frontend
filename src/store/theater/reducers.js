import { GET_THEATER_SUCCESS, GET_THEATER_BY_ID_SUCCESS, GET_THEATER_COMMENTS_SUCCESS } from "./actions";





export const TheaterReducers = (state = { data: null, upload: null, comments: null }, action) => {
  switch (action.type) {
    case GET_THEATER_SUCCESS:
      return { ...state, data: action.value }
    case GET_THEATER_BY_ID_SUCCESS:
      return { ...state, upload: action.value }
    case GET_THEATER_COMMENTS_SUCCESS:
      return { ...state, comments: action.value }
    default:
      return state
  }
}



