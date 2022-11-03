import { GET_SERVICES_SUCCESS, GET_SERVICE_BY_ID_SUCCESS } from "./actions";

export const servicesReducers = (state = { data: null, service: null }, action) => {
  switch (action.type) {
    case GET_SERVICES_SUCCESS:
      return { ...state, data: action.value }
    case GET_SERVICE_BY_ID_SUCCESS:
      return { ...state, service: action.value }
    default:
      return state
  }
}
