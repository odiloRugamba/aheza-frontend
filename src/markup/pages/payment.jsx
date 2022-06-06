import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { postPayment } from "../../store/payment/actions";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";




const ResearchFindings = () => {
 const [name, setName] = useState(null)
 const [email, setEmail] = useState(null)
 const [amount, setAmount] = useState(null)
 const [phoneNumber, setPhoneNumber] = useState(null)
 const dispatch = useDispatch()
 const data = useSelector(state => state.PaymentReducers.data)
 const postPerPage = 12



 useEffect(() => {
  console.log(data)
 }, [data])

 const paymentFunc = () => {
  console.log(name, email, amount, phoneNumber)
  dispatch(postPayment({ name, email, amount, phoneNumber }))
 }



 return (
  <>
   <Header />
   <div className="page-content bg-white" style={{ marginTop: 70 }}>
    <section className="section-area paymentContent section-sp1">
     <div className='paymentCont'>
      <div className='title'>Enter your payment details</div>
      <div>
       <input value={name} onChange={(e) => setName(e.target.value)} type="string" placeholder='Names' />
      </div>
      <div>
       <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
      </div>
      <div>
       <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount(RWF)' />
      </div>
      <div>
       <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='phone number for payment(078)' />
      </div>
      <p className="form-submit">
       <button onClick={() => paymentFunc()} value="Submit Comment " className="submitComment" id="submit" name="submit">
        <span>Continue</span>
       </button>
      </p>
     </div>
    </section>
   </div>

   <Footer />

  </>
 );

}

export default ResearchFindings;
