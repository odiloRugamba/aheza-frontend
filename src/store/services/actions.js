export const GET_SERVICES = 'GET_SERVICES'
export const GET_SERVICES_SUCCESS = 'GET_SERVICES_SUCCESS'
export const GET_SERVICE_BY_ID = 'GET_SERVICE_BY_ID'
export const GET_SERVICE_BY_ID_SUCCESS = 'GET_SERVICE_BY_ID_SUCCESS'

export const getServices = () => ({
 type: GET_SERVICES
})

export const getServiceById = (id) => ({
 type: GET_SERVICE_BY_ID,
 value: id
})

