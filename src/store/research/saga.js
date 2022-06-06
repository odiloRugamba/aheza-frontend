import { Dcore } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_RESEARCHS, GET_RESEARCHS_SUCCESS, GET_RESEARCH_BY_ID, GET_RESEARCH_BY_ID_SUCCESS, GET_RESEARCH_COMMNETS, POST_RESEARCH_COMMNETS, GET_RESEARCH_COMMNETS_SUCCESS, POST_RESEARCH_COMMNETS_SUCCESS } from "./actions";


function* getResearchs() {
 try {
  const response = yield call(Dcore.get, '/researches')
  yield put({ type: GET_RESEARCHS_SUCCESS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* getResearchById(data) {
 try {
  const res = yield call(Dcore.get, `/researches/${data.value}`)
  yield put({ type: GET_RESEARCH_BY_ID_SUCCESS, value: res.data.data })
 } catch (err) {
  console.log(err)
 }
}


function* getResearchCommnets(data) {
 try {
  const res = yield call(Dcore.get, `/comments/research/${data.value}`)
  yield put({ type: GET_RESEARCH_COMMNETS_SUCCESS, value: res.data.data })
 } catch (err) {
  console.log(err)
 }
}


function* postResearchComments(data) {
 try {
  const res = yield call(Dcore.post, `/comments/research/create`, data.value)
  yield put({ type: POST_RESEARCH_COMMNETS_SUCCESS, value: res.data.data })
 } catch (err) {
  console.log(err)
 }
}



export function* ResearchSagas() {
 yield takeEvery(GET_RESEARCHS, getResearchs)
 yield takeEvery(GET_RESEARCH_BY_ID, getResearchById)
 yield takeEvery(GET_RESEARCH_COMMNETS, getResearchCommnets)
 yield takeEvery(POST_RESEARCH_COMMNETS, postResearchComments)
}

