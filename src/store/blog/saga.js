import { Dcore } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_BLOGS, GET_BLOGS_SUCCESS, GET_BLOG_BY_ID, GET_BLOG_BY_ID_SUCCESS, GET_BLOG_COMMENTS, POST_BLOG_COMMENTS, GET_BLOG_COMMENTS_SUCCESS, POST_BLOG_COMMENTS_SUCCESS } from "./actions";


function* getBlogs() {
 try {
  const response = yield call(Dcore.get, '/blogs')
  yield put({ type: GET_BLOGS_SUCCESS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* getblogById(data) {
 try {
  const res = yield call(Dcore.get, `/blogs/${data.value}`)
  yield put({ type: GET_BLOG_BY_ID_SUCCESS, value: res.data.data })
 } catch (err) {
  console.log(err)
 }
}

function* getblogsCommnets(data) {
 try {
  const res = yield call(Dcore.get, `/comments/blog/${data.value}`)
  yield put({ type: GET_BLOG_COMMENTS_SUCCESS, value: res.data.data })
 } catch (err) {
  console.log(err)
 }
}

function* postblogComment(data) {
 try {
  const res = yield call(Dcore.post, `/comments/blog/create`, data.value)
  yield put({ type: POST_BLOG_COMMENTS_SUCCESS, value: res.data.data })
 } catch (err) {
  console.log(err)
 }
}

export function* BlogsSagas() {
 yield takeEvery(GET_BLOGS, getBlogs)
 yield takeEvery(GET_BLOG_BY_ID, getblogById)
 yield takeEvery(GET_BLOG_COMMENTS, getblogsCommnets)
 yield takeEvery(POST_BLOG_COMMENTS, postblogComment)
}

