export const GET_STORYS = 'GET_STORYS'
export const GET_STORYS_SUCCESS = 'GET_STORYS_SUCCESS'
export const GET_STORY_BY_ID = 'GET_STORY_BY_ID'
export const GET_STORY_BY_ID_SUCCESS = 'GET_STORY_BY_ID_SUCCESS'

export const getStorys = () => ({
 type: GET_STORYS
})

export const getStorysById = (id) => ({
 type: GET_STORY_BY_ID,
 value: id
})

