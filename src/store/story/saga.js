import { Dcore } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_STORYS, GET_STORYS_SUCCESS, GET_STORY_BY_ID, GET_STORY_BY_ID_SUCCESS, GET_STORY_COMMNETS, POST_STORY_COMMNETS, GET_STORY_COMMNETS_SUCCESS, POST_STORY_COMMNETS_SUCCESS } from "./actions";


function* getStorys() {
 try {
  const response = yield call(Dcore.get, '/stories')
  yield put({ type: GET_STORYS_SUCCESS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* getStorysById(data) {
 try {
  const res = yield call(Dcore.get, `/stories/${data.value}`)
  yield put({ type: GET_STORY_BY_ID_SUCCESS, value: res.data.data })

 } catch (err) {
  console.log(err)
 }
}


function* getStoryComments(data) {
 try {
  const res = yield call(Dcore.get, `/comments/story/${data.value}`)
  yield put({ type: GET_STORY_COMMNETS_SUCCESS, value: res.data.data })
 } catch (err) {
  console.log(err)
 }
}



function* postStoryComments(data) {
 try {
  const res = yield call(Dcore.post, `/comments/story/create`, data.value)
  yield put({ type: POST_STORY_COMMNETS_SUCCESS, value: res.data.data })
 } catch (err) {
  console.log(err)
 }
}



export function* StorysSagas() {
 yield takeEvery(GET_STORYS, getStorys)
 yield takeEvery(GET_STORY_BY_ID, getStorysById)
 yield takeEvery(GET_STORY_COMMNETS, getStoryComments)
 yield takeEvery(POST_STORY_COMMNETS, postStoryComments)
}

