import { Dcore } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_DOCTOR_BY_DAY, GET_DOCTOR_BY_DAY_SUCCESS, CREATE_APPOINTMENT, CREATE_APPOINTMENT_SUCESS, POST_APPOINTMENT_DATA, POST_APPOINTMENT_DATA_SUCESS } from "./actions";


function* getDoctorByDay(data) {
 try {
  const response = yield call(
   Dcore.get,
   `/doctor/getDayDoctors/${data.value.day}`
  );
  yield put({
   type: GET_DOCTOR_BY_DAY_SUCCESS,
   value: response.data.message.data,
  });
 } catch (err) {
  console.error(err);
  throw err;
 }
}

function* postAppointmentData(data) {
 try {
  yield put({ type: POST_APPOINTMENT_DATA_SUCESS, value: data.value });
 } catch (err) {
  console.error(err);
  throw err;
 }
}

function* createAppointment(data) {
 try {
  const response = yield call(Dcore.post, `/appointment`, data.value);
  yield put({
   type: CREATE_APPOINTMENT_SUCESS,
   value: response.data.data.data.data,
  });
 } catch (err) {
  console.log(err);
 }
}

export function* AppointmentSagas() {
 yield takeEvery(GET_DOCTOR_BY_DAY, getDoctorByDay);
 yield takeEvery(CREATE_APPOINTMENT, createAppointment);
 yield takeEvery(POST_APPOINTMENT_DATA, postAppointmentData);
}
