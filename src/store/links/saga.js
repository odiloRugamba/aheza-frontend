import { Dcore } from "../../api";
import Axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { GET_LINKS, GET_LINKS_SUCCESS } from "./actions";


function* getLinks() {
 try {
  console.log('okkk')
  const response = yield call(Dcore.get, '/links')
  yield put({ type: GET_LINKS_SUCCESS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}




export function* LinksSagas() {
 yield takeEvery(GET_LINKS, getLinks)
}

