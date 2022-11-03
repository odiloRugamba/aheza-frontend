import { CONTACT_US_SUCCESS } from "./actions";

export const ContactUsReducers = (state = { message: null, }, action) => {
  switch (action.type) {
    case CONTACT_US_SUCCESS:
      return { ...state, data: action.value }
    default:
      return state
  }
}
