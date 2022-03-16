import { GET_UPLOADS_SUCCESS, GET_UPLOAD_BY_ID_SUCCESS, GET_UPLOAD_COMMENTS_SUCCESS } from "./actions";

export const UploadsReducers = (state = { data: null, upload: null, comments: null }, action) => {
  switch (action.type) {
    case GET_UPLOADS_SUCCESS:
      return { ...state, data: action.value }
    case GET_UPLOAD_BY_ID_SUCCESS:
      return { ...state, upload: action.value }
    case GET_UPLOAD_COMMENTS_SUCCESS:
      return { ...state, comments: action.value }
    default:
      return state
  }
}
