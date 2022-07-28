import { Dcore } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { POST_PAYMENT, POST_PAYMENT_SUCCESS } from "./actions";


function* postPayment(data) {
 try {
  const response = yield call(Dcore.post, '/payment', data.value)
  yield put({ type: POST_PAYMENT_SUCCESS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

export function* PaymnentSagas() {
 yield takeEvery(POST_PAYMENT, postPayment)
}

