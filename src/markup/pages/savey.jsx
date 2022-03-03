import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';


import Header from "../layout/header";
import Footer from "../layout/footer";

import Map from '../elements/map';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";



const SaveyPage = () => {
 const [startSavey, setStartSavey] = useState(false)
 const [pageIndex, setPageIndex] = useState(0)

 const startSaveyFunc = () => {
  setStartSavey(true)
 }
 const nextAPrevFunc = (item) => {
  if (item === 'prev' && pageIndex !== 0) {
   setPageIndex(pageIndex - 1)
  } else if (item === 'next' && pageIndex !== 1) {
   setPageIndex(pageIndex + 1)
  }
 }
 return (
  <>

   <Header />

   <div className="page-content bg-white">

    <div className="banner-wraper">
     <div className="page-banner banner-lg contact-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 400 }}>
      <div className="container">
       <div className="page-banner-entry text-center">
        <h2>savey</h2>
       </div>
      </div>
      <img className="pt-img1 animate-wave" src={animateWave} alt="" />
      {/* <img className="pt-img2 animate2" src={animate2} alt=""/> */}
      <img className="pt-img3 animate-rotate" src={animateRotate} alt="" />
     </div>
    </div>

    <section className="saveyCont">
     <div className="container">
      <div className="contact-wraper">
       {
        !startSavey ? <div className='rowCont'>
         <div className="col-lg-10 mb-30">
          <form className="form-wraper contact-form ajax-form">
           <div className="ajax-message"></div>
           <div className="row">
            <div className="form-group col-md-12">
             <input name="name" type="text" required className="form-control" placeholder="Your Name" />
            </div>
            <div className="form-group col-md-12">
             <input name="email" type="email" required className="form-control" placeholder="Email" />
            </div>
            <div className="form-group col-md-12">
             <input name="phone" type="text" required className="form-control" placeholder="Phone Numbers" />
            </div>
            <div className="col-lg-12">
             <button onClick={() => startSaveyFunc()} name="submit" type="submit" value="Submit" className="btn w-100 btn-secondary btn-lg">Start</button>
            </div>
           </div>
          </form>
         </div>
        </div> :
         <SwipeableViews index={pageIndex} enableMouseEvents>
          <div className="row">
           <div className="page-banner-entry text-center">
            <h6>What As, my compiler will require Rust to run in the  do?</h6>
           </div>
           <div className='questionCont'>
            <ul>
             <li>
              <span className='checkBox'>
               <input type="checkbox" id="scales" name="scales"
               />
              </span>
              I've feeling drepressed
             </li>
             <li><span className='checkBox'>
              <input type="checkbox" id="scales" name="scales"
              />
             </span>I feel anxious or overwhelmed</li>
             <li><span className='checkBox'>
              <input type="checkbox" id="scales" name="scales"
              />
             </span>I am greving</li>
             <li><span className='checkBox'>
              <input type="checkbox" id="scales" name="scales"
              />
             </span>I have exprerienced trauma</li>
             <li><span className='checkBox'>
              <input type="checkbox" id="scales" name="scales"
              />
             </span>I want to gain self confidence</li>
             <li><span className='checkBox'>
              <input type="checkbox" id="scales" name="scales"
              />
             </span>just exploring</li>
            </ul>
           </div>
           <div className='changeQuestionBtn'>
            <div>
             <button onClick={() => nextAPrevFunc("prev")} className='positionBtn'>Prevs</button>
            </div>
            <div>
             <button onClick={() => nextAPrevFunc("next")} className='positionBtn'>Next</button>
            </div>
           </div>
          </div>
          <div className="row">
           <div className="page-banner-entry text-center">
            <h6>What As, my compiler will require Rust to run in the  do?</h6>
           </div>
           <div className='questionCont'>
            <ul>
             <li>
              <span className='checkBox'>
               <input type="checkbox" id="scales" name="scales"
               />
              </span>
              I've feeling drepressed
             </li>
             <li><span className='checkBox'>
              <input type="checkbox" id="scales" name="scales"
              />
             </span>I feel anxious or overwhelmed</li>
             <li><span className='checkBox'>
              <input type="checkbox" id="scales" name="scales"
              />
             </span>I am greving</li>
             <li><span className='checkBox'>
              <input type="checkbox" id="scales" name="scales"
              />
             </span>I have exprerienced trauma</li>
             <li><span className='checkBox'>
              <input type="checkbox" id="scales" name="scales"
              />
             </span>I want to gain self confidence</li>
             <li><span className='checkBox'>
              <input type="checkbox" id="scales" name="scales"
              />
             </span>just exploring</li>
            </ul>
           </div>
           <div className='changeQuestionBtn'>
            <div>
             <button onClick={() => nextAPrevFunc("prev")} className='positionBtn'>Prevs</button>
            </div>
            <div>
             <button onClick={() => nextAPrevFunc("next")} className='positionBtn'>Next</button>
            </div>
           </div>
          </div>
         </SwipeableViews>
       }
      </div>
     </div>
    </section>
   </div>

   <Footer />

  </>
 );
}



export default SaveyPage;
