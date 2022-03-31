import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getResearchs } from "../../store/research/actions";


// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import donation from "../../images/donation.jpg";




const ResearchFindings = () => {

 const [data, setData] = useState([])
 const [pageData, setPageData] = useState([])
 const [PageCount, setPageCount] = useState(10)
 const dispatch = useDispatch()
 const research = useSelector(state => state.ResearchReducers.data)
 const postPerPage = 12
 const history = useHistory()

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
  // console.log('jshdkhkjd')
  // history.push('/payment')
  window.open('https://dashboard.flutterwave.com/donate/ojzeswzxl75e')
 }

 return (
  <>
   <Header />
   <div className="page-content bg-white" style={{ marginTop: 70 }}>

    <section className="section-area mainBanner section-sp1">
     <div>
      <img style={{ position: 'relative', bottom: 30 }} className="pt-img3 animate2" src={donation} alt="" />
     </div>
     <div className='content'>
      <div className='title'>Why should I donate?</div>
      <div className='expText'>
       Each year, charitable and subsidized mental health care is provided to individuals throughout our community.
       With your help, more services can be provided for children, adolescents, adults and families seeking help.
      </div>
      <p className="form-submit">
       <button onClick={() => donateFunc()} type="submit" value="Submit Comment " className={"submitComment"} id="submit" name="submit">
        <div className='btnText'>Make Donation  </div>
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
