import { GET_TIPS_SUCESSS } from "./actions";

export const TipsReducers = (state = { data: null, status: null }, action) => {
  switch (action.type) {
    case GET_TIPS_SUCESSS:
      return { ...state, data: action.value }
    default:
      return state
  }
}
