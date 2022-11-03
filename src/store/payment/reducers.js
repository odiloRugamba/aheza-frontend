import { POST_PAYMENT_SUCCESS } from "./actions";

export const PaymentReducers = (state = { data: null }, action) => {
  switch (action.type) {
    case POST_PAYMENT_SUCCESS:
      return { ...state, data: action.value }
    default:
      return state
  }
}
