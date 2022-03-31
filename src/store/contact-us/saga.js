import { Dcore } from "../../api";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { CONTACT_US, CONTACT_US_SUCCESS } from "./actions";


function* contactUsFunc(data) {
 try {
  console.log("Sending contact us form");
  const response = yield call(Dcore.post, '/contactus-messages/create', data.value)
  yield put({ type: CONTACT_US_SUCCESS, value: response.data.data });
  console.log(response);
 } catch (err) {
  console.error(err)
  throw err
 }
}

export function* ContactUSSagas() {
 yield takeEvery(CONTACT_US, contactUsFunc)
}
