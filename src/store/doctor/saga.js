import { Dcore } from "../../api";
import Axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { POST_DOCTORS, POST_DOCTORS_SUCCESS } from "./actions";


function* postDoctors(data) {
 try {
  console.log(data)
  const response = yield call(Dcore.post, '/doctor/create', data.value)
  yield put({ type: POST_DOCTORS_SUCCESS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}





export function* DoctorsSagas() {
 yield takeEvery(POST_DOCTORS, postDoctors)
}

