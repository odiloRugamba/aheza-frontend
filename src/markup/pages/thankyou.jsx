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
     <div className="appointment-inner section-sp2" style={{ backgroundImage: "url(" + lineBg + ")", backgroundRepeat: " no-repeat", backgroundPosition: "20px 140px" }}>
      <div className="container">
       <div className="rowAppo">
        <div className="col-xl-8 col-lg-12 col-md-12">
         <div className="appointment-form form-wraper appointmentCont">
          <div className='appointmentF'>
           <div>
            <h3 className="title">
             Thank you
            </h3>
           </div>
           <div>
            <img src={verified} />
           </div>
          </div>
          <div>
           <div className="work-content">
            <p>
             From our vast database of information about mental health, you can find anything you are looking for
             From our vast database of information about mental health, you can find anything you are looking for
             From our vast database of information about mental health, you can find anything you are looking for
             From our vast database of information about mental health, you can find anything you are looking for
            </p>
           </div>
           <div>
           </div>
          </div>
          <div>
           <button onClick={() => gotoAheza()} type="submit" className="btn btn-secondary btn-lg">Aheza</button>
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
