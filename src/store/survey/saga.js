import { Dcore } from "../../api";
import Axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { GET_QUESTIONS, GET_QUESTIONS_SUCCESS, ANSWER_QUESTIONS, ANSWER_QUESTIONS_SUCCESS } from "./actions";


function* getQuestions(data) {
 try {
  console.log(data)
  const response = yield call(Dcore.get, `/survey/get/${data.value}`)
  console.log(response.data.message.data)
  yield put({ type: GET_QUESTIONS_SUCCESS, value: response.data.message.data })
 } catch (err) {
  console.error(err)
  throw err
 }
}

function* answerQuestion(data) {
 try {
  console.log(data)
  const res = yield call(Dcore.post, `/surveyAns/create/${data.value.survey}`, data.value)
  console.log(res, 'ress')
  // yield put({ type: ANSWER_QUESTIONS_SUCCESS, value: res.data.data })

 } catch (err) {
  console.log(err)
 }
}




export function* surveSagas() {
 yield takeEvery(GET_QUESTIONS, getQuestions)
 yield takeEvery(ANSWER_QUESTIONS, answerQuestion)
}

