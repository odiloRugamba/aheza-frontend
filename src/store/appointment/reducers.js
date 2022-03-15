import { GET_DOCTOR_BY_DAY_SUCCESS } from "./actions";

export const AppointmentReducers = (state = { data: null, status: null }, action) => {
  switch (action.type) {
    case GET_DOCTOR_BY_DAY_SUCCESS:
      return { ...state, data: action.value }
    default:
      return state
  }
}
