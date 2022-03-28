import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getResearchs } from "../../store/research/actions";
import LoadingComp from "../elements/loading";
import ReactPaginate from "react-paginate";
import EmptyComp from "../elements/empyt";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import waveBlue from "../../images/shap/wave-blue.png";
import donation from "../../images/donation.jpg";
import plusBlue from "../../images/shap/plus-blue.png";




const ResearchFindings = () => {

 const [data, setData] = useState([])
 const [pageData, setPageData] = useState([])
 const [PageCount, setPageCount] = useState(10)
 const dispatch = useDispatch()
 const research = useSelector(state => state.ResearchReducers.data)
 const postPerPage = 12

 useEffect(() => {
  dispatch(getResearchs())
 }, [])

 useEffect(() => {
  setData(research)
  setPageCount(research?.length / postPerPage)
  setPageData(research?.slice(0, postPerPage))
 }, [research])

 const convertData = (date) => {
  const day = new Date(date)
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
  return `${da}-${mo}-${ye}`
 }

 const changePage = (page) => {
  const endingPoint = (page.selected + 1) * postPerPage
  const statingPoint = endingPoint - postPerPage
  setPageData(null)
  setPageData(research.slice(statingPoint, endingPoint))
 }

 const donateFunc = () => {
  console.log('jshdkhkjd')
 }

 return (
  <>
   <Header />
   <div className="page-content bg-white" style={{ marginTop: 70 }}>

    <section className="section-area paymentContent section-sp1">
     <div className='paymentCont'>
      <div className='title'>Enter your payment details</div>
      <div>
       <input type="string" placeholder='Names' />
      </div>
      <div>
       <input type="email" placeholder='Email' />
       {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> */}
       {/* <input type="password" class="form-control" id="inputPassword" placeholder="Password" /> */}
      </div>

      <div>
       <input placeholder='Amount(RWF)' />
      </div>
      <div>
       <input placeholder='phone number for payment(078)' />
      </div>
      <p className="form-submit">
       <button type="submit" value="Submit Comment " className="submitComment" id="submit" name="submit">

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
