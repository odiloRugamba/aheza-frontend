export const GET_LINKS = 'GET_LINKS'
export const GET_LINKS_SUCCESS = 'GET_LINKS_SUCCESS'
export const GET_LINK_BY_ID = 'GET_LINK_BY_ID'
export const GET_LINK_COMMNETS = 'GET_LINK_COMMNETS'
export const GET_LINK_COMMNETS_SUCCESS = 'GET_LINK_COMMNETS_SUCCESS'
export const POST_LINK_COMMNETS = 'POST_LINK_COMMNETS'
export const POST_LINK_COMMNETS_SUCCESS = 'POST_LINK_COMMNETS_SUCCESS'

export const GET_LINK_BY_ID_SUCCESS = 'GET_LINK_BY_ID_SUCCESS'

export const getLinks = () => ({
 type: GET_LINKS
})

export const getLinkById = (id) => ({
 type: GET_LINK_BY_ID,
 value: id
})

export const getLinkComments = (id) => ({
 type: GET_LINK_COMMNETS,
 value: id
})

export const postLinkComments = (data) => ({
 type: POST_LINK_COMMNETS,
 value: data
})

