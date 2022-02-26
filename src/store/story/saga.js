import { Dcore } from "../../api";
import Axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { GET_STORYS, GET_STORYS_SUCCESS, GET_STORY_BY_ID, GET_STORY_BY_ID_SUCCESS } from "./actions";


function* getStorys() {
 try {
  console.log('okkk')
  const response = yield call(Dcore.get, '/stories')
  yield put({ type: GET_STORYS_SUCCESS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* getStorysById(data) {
 try {
  console.log(data, 'dskdskhid')
  const res = yield call(Dcore.get, `/stories/${data.value}`)
  console.log(res, 'ress')
  yield put({ type: GET_STORY_BY_ID_SUCCESS, value: res.data.data })

 } catch (err) {
  console.log(err)
 }
}




export function* StorysSagas() {
 yield takeEvery(GET_STORYS, getStorys)
 yield takeEvery(GET_STORY_BY_ID, getStorysById)
}

