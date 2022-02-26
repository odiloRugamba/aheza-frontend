import { Dcore } from "../../api";
import Axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { GET_HOSPITALS, GET_HOSPITALS_SUCCESS, GET_HOSPITAL_BY_ID, GET_HOSPITAL_BY_ID_SUCCESS } from "./actions";


function* getHospitals() {
 try {
  const response = yield call(Dcore.get, '/hospitals')
  yield put({ type: GET_HOSPITALS_SUCCESS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* getHospitalById(data) {
 try {
  const res = yield call(Dcore.get, `/hospitals/${data.value}`)
  yield put({ type: GET_HOSPITAL_BY_ID_SUCCESS, value: res.data.data })

 } catch (err) {
  console.log(err)
 }
}




export function* HospitalSagas() {
 yield takeEvery(GET_HOSPITALS, getHospitals)
 yield takeEvery(GET_HOSPITAL_BY_ID, getHospitalById)
}

