import { POST_DOCTORS_SUCCESS } from "./actions";

export const DoctorReducers = (state = { data: null, hospital: null }, action) => {
  switch (action.type) {
    case POST_DOCTORS_SUCCESS:
      return { ...state, data: action.value }
    default:
      return state
  }
}
