import { Dcore } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_SELF_ASSESSMENT_QUESTIONS, GET_SELF_ASSESSMENT_QUESTIONS_SUCCESS, ANSWER_SELF_ASSESSMENT_QUESTIONS, ANSWER_SELF_ASSESSMENT_QUESTIONS_SUCCESS } from "./actions";


function* getQuestions(data) {
 try {
  const response = yield call(Dcore.get, `/selfAssessment/get/${data.value}`)
  yield put({ type: GET_SELF_ASSESSMENT_QUESTIONS_SUCCESS, value: response.data.message.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* answerQuestion(data) {
 try {
  const res = yield call(Dcore.post, `/selfAssessmentAns/create/${data.value.selfAssessment
   }`, data.value)
  window.localStorage.setItem('selfAssessmentAnsID', res.data.message.selfAssessmentAns._id);
  yield put({ type: ANSWER_SELF_ASSESSMENT_QUESTIONS_SUCCESS, value: res.data.message.selfAssessmentAns })

 } catch (err) {
  console.log(err)
 }
}




export function* selfAssessmentSaga() {
 yield takeEvery(GET_SELF_ASSESSMENT_QUESTIONS, getQuestions)
 yield takeEvery(ANSWER_SELF_ASSESSMENT_QUESTIONS, answerQuestion)
}

