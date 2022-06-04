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

const AboutSection = () => {

 const [money, setMoney] = useState(null)
 const history = useHistory()
 const gotoAheza = () => {
  history.push('/')
 }
 return (
  <>
   <section className="section-area account-wraper1">
    <div className="container-fluid" style={{ paddingTop: 100 }}>
     <div className="appointment-inner section-sp2">
      <div className="container">
       <div className="rowAppo">
        <div className="col-xl-12 col-lg-12 col-md-12">
         <div className="appointment-form form-wraper appointmentCont">
          <div className='appointmentF'>
           <div>
            <h3 className="title">
             Appointment booked successfully
            </h3>
           </div>
          </div>
          <div>
           <div className="work-content">
            <p>
             Our team will contact you shortly about your appointment arrangements.
             
             <br/><br/><br/>                          
             Thank you.
            </p>
           </div>
           <div>
           </div>
          </div>
          <div>
           <button onClick={() => gotoAheza()} type="submit" className="btn btn-secondary btn-lg" style={{fontSize: 20, fontWeight: 700}}>Go Home</button>
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