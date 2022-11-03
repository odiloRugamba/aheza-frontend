import { GET_HOSPITALS_SUCCESS, GET_HOSPITAL_BY_ID_SUCCESS } from "./actions";

export const HospitalReducers = (state = { data: null, hospital: null }, action) => {
  switch (action.type) {
    case GET_HOSPITALS_SUCCESS:
      return { ...state, data: action.value }
    case GET_HOSPITAL_BY_ID_SUCCESS:
      return { ...state, hospital: action.value }
    default:
      return state
  }
}
