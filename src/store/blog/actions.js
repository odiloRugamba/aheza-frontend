export const GET_BLOGS = 'GET_BLOGS'
export const GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS'
export const GET_BLOG_BY_ID = 'GET_BLOG_BY_ID'
export const GET_BLOG_BY_ID_SUCCESS = 'GET_BLOG_BY_ID_SUCCESS'
export const GET_BLOG_COMMENTS = 'GET_BLOG_COMMENTS'
export const POST_BLOG_COMMENTS = 'POST_BLOG_COMMENTS'
export const GET_BLOG_COMMENTS_SUCCESS = 'GET_BLOG_COMMENTS_SUCCESS'
export const POST_BLOG_COMMENTS_SUCCESS = 'POST_BLOG_COMMENTS_SUCCESS'

export const getBlogs = () => ({
 type: GET_BLOGS
})

export const getblogById = (id) => ({
 type: GET_BLOG_BY_ID,
 value: id
})

export const getBlogComment = (id) => ({
 type: GET_BLOG_COMMENTS,
 value: id
})

export const postblogComment = (data) => ({
 type: POST_BLOG_COMMENTS,
 value: data
})
