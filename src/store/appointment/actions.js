export const GET_DOCTOR_BY_DAY = 'GET_DOCTOR_BY_DAY'
export const GET_DOCTOR_BY_DAY_SUCCESS = 'GET_DOCTOR_BY_DAY_SUCCESS'
export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT'
export const CREATE_APPOINTMENT_SUCESS = 'CREATE_APPOINTMENT_SUCESS'

export const getDoctorByDay = (day) => ({
 type: GET_DOCTOR_BY_DAY,
 value: day
})


export const createAppointment = (data) => ({
 type: CREATE_APPOINTMENT,
 value: data
})

