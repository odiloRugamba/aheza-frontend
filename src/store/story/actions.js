export const GET_STORYS = 'GET_STORYS'
export const GET_STORYS_SUCCESS = 'GET_STORYS_SUCCESS'
export const GET_STORY_BY_ID = 'GET_STORY_BY_ID'
export const GET_STORY_COMMNETS = 'GET_STORY_COMMNETS'
export const GET_STORY_COMMNETS_SUCCESS = 'GET_STORY_COMMNETS_SUCCESS'
export const POST_STORY_COMMNETS = 'POST_STORY_COMMNETS'
export const POST_STORY_COMMNETS_SUCCESS = 'POST_STORY_COMMNETS_SUCCESS'

export const GET_STORY_BY_ID_SUCCESS = 'GET_STORY_BY_ID_SUCCESS'

export const getStorys = () => ({
 type: GET_STORYS
})

export const getStorysById = (id) => ({
 type: GET_STORY_BY_ID,
 value: id
})

export const getStoryComments = (id) => ({
 type: GET_STORY_COMMNETS,
 value: id
})

export const postStoryComments = (data) => ({
 type: POST_STORY_COMMNETS,
 value: data
})

