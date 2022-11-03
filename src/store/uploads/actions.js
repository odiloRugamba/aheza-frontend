export const GET_UPLOADS = 'GET_UPLOADS'
export const GET_UPLOADS_SUCCESS = 'GET_UPLOADS_SUCCESS'
export const GET_UPLOAD_BY_ID = 'GET_UPLOAD_BY_ID'
export const GET_UPLOAD_COMMENTS = 'GET_UPLOAD_COMMENTS'
export const POST_UPLOAD_COMMENTS = 'POST_UPLOAD_COMMENTS'
export const GET_UPLOAD_COMMENTS_SUCCESS = 'GET_UPLOAD_COMMENTS_SUCCESS'
export const POST_UPLOAD_COMMENTS_SUCCESS = 'POST_UPLOAD_COMMENTS_SUCCESS'
export const GET_UPLOAD_BY_ID_SUCCESS = 'GET_UPLOAD_BY_ID_SUCCESS'

export const getUploads = () => ({
 type: GET_UPLOADS
})

export const getUploadById = (id) => ({
 type: GET_UPLOAD_BY_ID,
 value: id
})


export const getUploadCommnets = (id) => ({
 type: GET_UPLOAD_COMMENTS,
 value: id
})

export const postUploadCommnets = (data) => ({
 type: POST_UPLOAD_COMMENTS,
 value: data
})
