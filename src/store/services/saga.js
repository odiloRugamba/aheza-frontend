import { Dcore } from "../../api";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { GET_SERVICES, GET_SERVICES_SUCCESS, GET_SERVICE_BY_ID, GET_SERVICE_BY_ID_SUCCESS } from "./actions";


function* getServices() {
 try {
  const response = yield call(Dcore.get, '/our-services')
  yield put({ type: GET_SERVICES_SUCCESS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* getServiceById(data) {
 try {
  console.log(data, 'dskdskhid')
  const res = yield call(Dcore.get, `/our-services/${data.value}`)
  console.log(res, 'ress')
  yield put({ type: GET_SERVICE_BY_ID_SUCCESS, value: res.data.data })

 } catch (err) {
  console.log(err)
 }
}




export function* ServicesSagas() {
 yield takeEvery(GET_SERVICES, getServices)
 yield takeEvery(GET_SERVICE_BY_ID, getServiceById)
}

