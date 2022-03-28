import { Dcore } from "../../api";
import Axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { GET_TIPS, GET_TIPS_SUCESSS } from "./actions";


function* getTipsFunc() {
 try {
  console.log('okkkkk')
  const response = yield call(Dcore.get, `/tips`)
  console.log("hello", response)
  yield put({ type: GET_TIPS_SUCESSS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}



export function* TipsSagas() {
 yield takeEvery(GET_TIPS, getTipsFunc)
}

