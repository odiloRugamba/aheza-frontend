import { Dcore } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_TIPS, GET_TIPS_SUCESSS } from "./actions";


function* getTipsFunc() {
 try {
  const response = yield call(Dcore.get, `/tips`)
  yield put({ type: GET_TIPS_SUCESSS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}



export function* TipsSagas() {
 yield takeEvery(GET_TIPS, getTipsFunc)
}

