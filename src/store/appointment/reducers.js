import { GET_DOCTOR_BY_DAY_SUCCESS, POST_APPOINTMENT_DATA_SUCESS, CREATE_APPOINTMENT_SUCESS } from "./actions";


export const AppointmentReducers = (state = { data: null, postData: null, status: null, paymentData: null }, action) => {
  switch (action.type) {
    case GET_DOCTOR_BY_DAY_SUCCESS:
      return { ...state, data: action.value }
    case POST_APPOINTMENT_DATA_SUCESS:
      return { ...state, postData: action.value }
    case CREATE_APPOINTMENT_SUCESS:
      return { ...state, paymentData: action.value }
    default:
      return state
  }
}
