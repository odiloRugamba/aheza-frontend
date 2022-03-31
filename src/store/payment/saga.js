import { Dcore } from "../../api";
import Axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { POST_PAYMENT, POST_PAYMENT_SUCCESS } from "./actions";


function* postPayment(data) {
 try {
  console.log('okkk', data)
  const response = yield call(Dcore.post, '/payment', data.value)
  console.log(response)
  yield put({ type: POST_PAYMENT_SUCCESS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}




export function* PaymnentSagas() {
 yield takeEvery(POST_PAYMENT, postPayment)
}

