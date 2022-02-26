export const GET_RESEARCHS = 'GET_RESEARCHS'
export const GET_RESEARCHS_SUCCESS = 'GET_RESEARCHS_SUCCESS'
export const GET_RESEARCH_BY_ID = 'GET_RESEARCH_BY_ID'
export const GET_RESEARCH_BY_ID_SUCCESS = 'GET_RESEARCH_BY_ID_SUCCESS'

export const getResearchs = () => ({
 type: GET_RESEARCHS
})

export const getResearchById = (id) => ({
 type: GET_RESEARCH_BY_ID,
 value: id
})

