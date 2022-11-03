import { GET_BLOGS_SUCCESS, GET_BLOG_BY_ID_SUCCESS, GET_BLOG_COMMENTS_SUCCESS } from "./actions";

export const BlogsReducers = (state = { data: null, blog: null, comments: null }, action) => {
  switch (action.type) {
    case GET_BLOGS_SUCCESS:
      return { ...state, data: action.value }
    case GET_BLOG_BY_ID_SUCCESS:
      return { ...state, blog: action.value }
    case GET_BLOG_COMMENTS_SUCCESS:
      return { ...state, comments: action.value }
    default:
      return state
  }
}
