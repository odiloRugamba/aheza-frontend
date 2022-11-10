import { CHANGE_LANG_SUCCESS } from "./actions";



export const langReducers = (state = { lang: 'en' }, action) => {
    switch (action.type) {
        case CHANGE_LANG_SUCCESS:
            return { ...state, lang: action.value }
        default:
            return state
    }
}





