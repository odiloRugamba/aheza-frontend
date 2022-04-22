import React, { Component, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Images
import lineBg from '../../images/appointment/line-bg.png';
import appMobile from '../../images/appointment/mobile.png';
import appWomen from '../../images/appointment/women.png';
import appMapPin from '../../images/appointment/map-pin.png';
import appSetting from '../../images/appointment/setting.png';
import appCheck from '../../images/appointment/check.png';
import appChat from '../../images/appointment/chat.png';
import verified from '../../images/verified.png';
import { getDoctorByDay, createAppointment, postAppointmentData } from "../../store/appointment/actions";




const AboutSection = () => {
 const [money, setMoney] = useState(null)
 const [loading, setLoading] = useState(null)
 const data = useSelector(state => state.AppointmentReducers.postData)
 const paymentData = useSelector(state => state.AppointmentReducers.paymentData)

 const [appointmentOps, setAppointmentOps] = useState([])
 const history = useHistory()
 const dispatch = useDispatch()
 const appOption = [
  { value: 'IN-PERSON', selected: false, name: 'In Preson' },
  { value: 'PHONE-CALL', selected: false, name: 'Phone Call' },
  { value: 'ZOOM-CALL', selected: false, name: ' Zoom Video Call' },
  { value: 'AHEZA-CHAT', selected: false, name: 'Aheza Chat' }
 ]
 useEffect(() => {
  if (data?.firstName) {
   // console.log('dakkkkkta', data)
   appOption.forEach(el => {
    if (el.value === data.CommunicationMethod) {
     el.selected = true
     changeMoney(el.value)
    }
   })
   setAppointmentOps(appOption)
  } else {
   history.push('/book-appointment')
  }
 }, [data]);

 const changeMoney = (item) => {
  setMoney(item === 'IN-PERSON' ? 30000 : item === 'PHONE-CALL' ? 10000 : item === 'ZOOM-CALL' ? 15000 : item === 'AHEZA-CHAT' ? 10000 : null)
 }
 const selectMethod = (item) => {
  appOption.forEach(el => {
   if (el.value === item.value) {
    el.selected = true
   } else {
    el.selected = false
   }
  })
  changeMoney(item.value)
  setAppointmentOps(appOption)
 }



 const checkOut = () => {
  setLoading(true)
  // history.push('/thankyou')
  dispatch(createAppointment({
   ...data,
   amount: money
  }))
 }
 useEffect(() => {
  if (paymentData) {
   console.log('paymentData', paymentData)
   window.open(paymentData.link)
   setLoading(false)
  }
 }, [paymentData])

 return (
  <>
   <section className="section-area account-wraper1">
    <div className="container-fluid" style={{ paddingTop: 100 }}>
     <div className="appointment-inner section-sp2" style={{ backgroundImage: "url(" + lineBg + ")", backgroundRepeat: " no-repeat", backgroundPosition: "20px 140px" }}>
      <div className="container">
       <div className="rowAppo">
        <div className="col-xl-8 col-lg-12 col-md-12">
         <div className="appointment-form form-wraper appointmentCont">
          <div className='appointmentF'>
           <div>
            <h3 className="title">
             Finalize  Appointment
            </h3>
           </div>
           <div>
            <img src={verified} />
           </div>
          </div>

          <div className='questionCont'>
           <div className='title text-secondary mb-1 chooseText'>Method of Communication </div>
           <ul>
            {
             appointmentOps.map(el =>
              <li onClick={() => selectMethod(el)}>
               <span className='checkBox'>
                <label className='radioBtn'>
                 {console.log(el)}
                 <input checked={el.selected} name='appointment' type="radio" id="scales" />
                 <span />
                </label>
               </span>
               <a>{el.name}</a>
              </li>
             )
            }


            {/* <li>
             <span className='checkBox'>
              <label className='radioBtn'>
               <input name='appointment' type="radio" id="scales" />
               <span />
              </label>
             </span>
             <a> Phone Call</a>
            </li>
            <li>
             <span className='checkBox'>
              <label className='radioBtn'>
               <input name='appointment' type="radio" id="scales" />
               <span />
              </label>
             </span>
             <a> Zoom Video Call </a>
            </li>
            <li>
             <span className='checkBox'>
              <label className='radioBtn'>
               <input name='appointment' type="radio" id="scales" />
               <span />
              </label>
             </span>
             <a> Aheza Chat </a>
            </li> */}

           </ul>
          </div>



          <div>
           <div className="work-content">
            <p>
                Once you pay, our program cordinator reviews your answers and match you with the best therapist for you and based on their 
                schedule we call you to fix time for your session.                                 
            </p>

            <div>
             <div className="textRepresent">Session Payment:</div>
             <div className='title text-secondary mb-1'>RWF {money}</div>
            </div>
           </div>
           <div>
           </div>
          </div>
          <div>
           <button onClick={() => checkOut()} type="submit" className="btn btn-secondary btn-lg">
            {
             loading ? <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
             </div> : <span>Pay</span>
            }
           </button>
          </div>
         </div>
        </div>
        <div className="col-xl-2 col-lg-6 col-md-6">
         <div className="appointment-thumb">
          <img src={appMobile} alt="" />
          <div className="images-group">
           <img className="img1" src={appWomen} alt="" />
           <img className="img2" src={appMapPin} alt="" />
           <img className="img3" src={appSetting} alt="" />
           <img className="img4" src={appCheck} alt="" />
           <img className="img5" src={appChat} alt="" />
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

  </>
 );
}

export default AboutSection;
