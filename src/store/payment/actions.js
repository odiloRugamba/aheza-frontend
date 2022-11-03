export const POST_PAYMENT = 'POST_PAYMENT'
export const POST_PAYMENT_SUCCESS = 'POST_PAYMENT_SUCCESS'



export const postPayment = (data) => ({
 type: POST_PAYMENT,
 value: data
})