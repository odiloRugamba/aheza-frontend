export const GET_HOSPITALS = 'GET_HOSPITALS'
export const GET_HOSPITALS_SUCCESS = 'GET_HOSPITALS_SUCCESS'
export const GET_HOSPITAL_BY_ID = 'GET_HOSPITAL_BY_ID'
export const GET_HOSPITAL_BY_ID_SUCCESS = 'GET_HOSPITAL_BY_ID_SUCCESS'

export const getHospitals = () => ({
 type: GET_HOSPITALS
})

export const getHospitalById = (id) => ({
 type: GET_HOSPITAL_BY_ID,
 value: id
})

