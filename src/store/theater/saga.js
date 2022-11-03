import { Dcore } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_THEATERS, GET_THEATER_SUCCESS, GET_THEATER_BY_ID, GET_THEATER_BY_ID_SUCCESS, GET_THEATER_COMMENTS, POST_THEATER_COMMENTS, GET_THEATER_COMMENTS_SUCCESS, POST_THEATER_COMMENTS_SUCCESS } from "./actions";






function* getTheater() {
    try {
        const response = yield call(Dcore.get, '/theaters')
        yield put({ type: GET_THEATER_SUCCESS, value: response.data.data })
    } catch (err) {
        console.error(err)
        throw err
    }
}



function* getTheaterById(data) {
    try {
        const res = yield call(Dcore.get, `/theaters/${data.value}`)
        yield put({ type: GET_THEATER_BY_ID_SUCCESS, value: res.data.data })
    } catch (err) {
        console.log(err)
    }
}

function* getTheaterCommnets(data) {
    try {
        const res = yield call(Dcore.get, `/comments/theater/${data.value}`)
        yield put({ type: GET_THEATER_COMMENTS_SUCCESS, value: res.data.data })
    } catch (err) {
        console.log(err)
    }
}

function* postTheaterCommnets(data) {
    try {
        const res = yield call(Dcore.post, `/comments/theater/create`, data.value)
        yield put({ type: POST_THEATER_COMMENTS_SUCCESS, value: res.data.data })
    } catch (err) {
        console.log(err)
    }
}




export function* TheatersSagas() {
    yield takeEvery(GET_THEATERS, getTheater)
    yield takeEvery(GET_THEATER_BY_ID, getTheaterById)
    yield takeEvery(GET_THEATER_COMMENTS, getTheaterCommnets)
    yield takeEvery(POST_THEATER_COMMENTS, postTheaterCommnets)
}



