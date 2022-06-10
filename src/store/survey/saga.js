import { Dcore } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_QUESTIONS, GET_QUESTIONS_SUCCESS, ANSWER_QUESTIONS } from "./actions";


function* getQuestions(data) {
 try {
  const response = yield call(Dcore.get, `/survey/get/${data.value}`)
  yield put({ type: GET_QUESTIONS_SUCCESS, value: response.data.message.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* answerQuestion(data) {
 try {
  yield call(Dcore.post, `/surveyAns/create/${data.value.survey}`, data.value)
  console.log(data)
 } catch (err) {
  console.log(err)
 }
}




export function* surveSagas() {
 yield takeEvery(GET_QUESTIONS, getQuestions)
 yield takeEvery(ANSWER_QUESTIONS, answerQuestion)
}

