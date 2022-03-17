import { Dcore } from "../../api";
import Axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { GET_SELF_ASSESSMENT_QUESTIONS, GET_SELF_ASSESSMENT_QUESTIONS_SUCCESS, ANSWER_SELF_ASSESSMENT_QUESTIONS, ANSWER_SELF_ASSESSMENT_QUESTIONS_SUCCESS } from "./actions";


function* getQuestions(data) {
 try {
  const response = yield call(Dcore.get, `/selfAssessment/get/${data.value}`)
  console.log(response.data.message.data)
  yield put({ type: GET_SELF_ASSESSMENT_QUESTIONS_SUCCESS, value: response.data.message.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* answerQuestion(data) {
 try {
  console.log(data)
  const res = yield call(Dcore.post, `/selfAssessmentAns/create/${data.value.selfAssessment
   }`, data.value)
  console.log(res, 'ress')
  // yield put({ type: ANSWER_QUESTIONS_SUCCESS, value: res.data.data })

 } catch (err) {
  console.log(err)
 }
}




export function* selfAssessmentSaga() {
 yield takeEvery(GET_SELF_ASSESSMENT_QUESTIONS, getQuestions)
 yield takeEvery(ANSWER_SELF_ASSESSMENT_QUESTIONS, answerQuestion)
}

