import { Dcore } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_UPLOADS, GET_UPLOADS_SUCCESS, GET_UPLOAD_BY_ID, GET_UPLOAD_BY_ID_SUCCESS, GET_UPLOAD_COMMENTS, POST_UPLOAD_COMMENTS, GET_UPLOAD_COMMENTS_SUCCESS, POST_UPLOAD_COMMENTS_SUCCESS } from "./actions";


function* getUpload() {
 try {
  const response = yield call(Dcore.get, '/uploads')
  yield put({ type: GET_UPLOADS_SUCCESS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* getUploadById(data) {
 try {
  const res = yield call(Dcore.get, `/uploads/${data.value}`)
  yield put({ type: GET_UPLOAD_BY_ID_SUCCESS, value: res.data.data })

 } catch (err) {
  console.log(err)
 }
}

function* getUploadCommnets(data) {
 try {
  const res = yield call(Dcore.get, `/comments/upload/${data.value}`)
  yield put({ type: GET_UPLOAD_COMMENTS_SUCCESS, value: res.data.data })
 } catch (err) {
  console.log(err)
 }
}

function* postUploadCommnets(data) {
 try {
  const res = yield call(Dcore.post, `/comments/upload/create`, data.value)
  yield put({ type: POST_UPLOAD_COMMENTS_SUCCESS, value: res.data.data })
 } catch (err) {
  console.log(err)
 }
}




export function* UploadsSagas() {
 yield takeEvery(GET_UPLOADS, getUpload)
 yield takeEvery(GET_UPLOAD_BY_ID, getUploadById)
 yield takeEvery(GET_UPLOAD_COMMENTS, getUploadCommnets)
 yield takeEvery(POST_UPLOAD_COMMENTS, postUploadCommnets)
}

