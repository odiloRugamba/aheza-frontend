export const GET_THEATERS = 'GET_THEATERS'
export const GET_THEATER_SUCCESS = 'GET_THEATER_SUCCESS'
export const GET_THEATER_BY_ID = 'GET_THEATER_BY_ID'
export const GET_THEATER_COMMENTS = 'GET_THEATER_COMMENTS'
export const POST_THEATER_COMMENTS = 'POST_THEATER_COMMENTS'
export const GET_THEATER_COMMENTS_SUCCESS = 'GET_THEATER_COMMENTS_SUCCESS'
export const POST_THEATER_COMMENTS_SUCCESS = 'POST_THEATER_COMMENTS_SUCCESS'
export const GET_THEATER_BY_ID_SUCCESS = 'GET_THEATER_BY_ID_SUCCESS'







export const getTheater = () => ({
    type: GET_THEATERS
})

export const getTheaterById = (id) => ({
    type: GET_THEATER_BY_ID,
    value: id
})


export const getTheaterCommnets = (id) => ({
    type: GET_THEATER_COMMENTS,
    value: id
})

export const postTheaterCommnets = (data) => ({
    type: POST_THEATER_COMMENTS,
    value: data
})



