import { GET_BLOGS_SUCCESS, GET_BLOG_BY_ID_SUCCESS } from "./actions";

export const BlogsReducers = (state = { data: null, blog: null }, action) => {
 switch (action.type) {
  case GET_BLOGS_SUCCESS:
   return { ...state, data: action.value }
  case GET_BLOG_BY_ID_SUCCESS:
   return { ...state, blog: action.value }
  default:
   return state
 }
}
