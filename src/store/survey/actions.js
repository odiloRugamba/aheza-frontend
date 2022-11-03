export const GET_QUESTIONS = 'GET_QUESTIONS'
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS'
export const ANSWER_QUESTIONS = 'ANSWER_QUESTIONS'
export const ANSWER_QUESTIONS_SUCCESS = 'ANSWER_QUESTIONS_SUCCESS'

export const getQuestions = (id) => ({
 type: GET_QUESTIONS,
 value: id
})


export const answerQuestion = (data) => ({
 type: ANSWER_QUESTIONS,
 value: data
})
