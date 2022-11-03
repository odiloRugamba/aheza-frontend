import { Dcore } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { POST_DOCTORS, POST_DOCTORS_SUCCESS } from "./actions";


function* postDoctors(data) {
 try {
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

