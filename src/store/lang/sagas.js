import {
    put,
    takeLatest
} from 'redux-saga/effects'
import * as actions from './actions'



function* changeLang(data) {
    try {
        yield put({ type: actions.CHANGE_LANG_SUCCESS, value: data.value })
    } catch (e) {
        throw e
    }
}




export function* langsSagas() {
    yield takeLatest(actions.CHANGE_LANG, changeLang)
}

