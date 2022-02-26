import { Dcore } from "../../api";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { GET_RESEARCHS, GET_RESEARCHS_SUCCESS, GET_RESEARCH_BY_ID, GET_RESEARCH_BY_ID_SUCCESS } from "./actions";


function* getResearchs() {
 try {
  console.log('okkk')
  const response = yield call(Dcore.get, '/researches')
  console.log(response)
  yield put({ type: GET_RESEARCHS_SUCCESS, value: response.data.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* getResearchById(data) {
 try {
  console.log(data, 'dskdskhid')
  const res = yield call(Dcore.get, `/researches/${data.value}`)
  console.log(res, 'ress')
  yield put({ type: GET_RESEARCH_BY_ID_SUCCESS, value: res.data.data })

 } catch (err) {
  console.log(err)
 }
}




export function* ResearchSagas() {
 yield takeEvery(GET_RESEARCHS, getResearchs)
 yield takeEvery(GET_RESEARCH_BY_ID, getResearchById)
}

