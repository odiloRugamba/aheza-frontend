import { Dcore } from "../../api";
import Axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { GET_DOCTOR_BY_DAY, GET_DOCTOR_BY_DAY_SUCCESS, CREATE_APPOINTMENT, CREATE_APPOINTMENT_SUCESS } from "./actions";


function* getDoctorByDay(data) {
 try {
  console.log(data)
  const response = yield call(Dcore.get, `/doctor/getDayDoctors/${data.value.day}`)
  console.log(response)
  yield put({ type: GET_DOCTOR_BY_DAY_SUCCESS, value: response.data.message.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* createAppointment(data) {
 try {
  console.log(data)
  const response = yield call(Dcore.post, `/appointment`, data.value)
  console.log(response)
  yield put({ type: CREATE_APPOINTMENT_SUCESS, value: response.data.message.data })
 } catch (err) {
  console.log(err)
 }
}


export function* AppointmentSagas() {
 yield takeEvery(GET_DOCTOR_BY_DAY, getDoctorByDay)
 yield takeEvery(CREATE_APPOINTMENT, createAppointment)
}

