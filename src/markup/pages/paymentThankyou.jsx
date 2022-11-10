import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getResearchs } from "../../store/research/actions";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import donation from "../../images/donation.jpeg";
import {useParams } from "react-router-dom";



const ResearchFindings = () => {
let { lang } = useParams();
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
  return `${da} ${mo} ${ye}`
 }

 const changePage = (page) => {
  const endingPoint = (page.selected + 1) * postPerPage
  const statingPoint = endingPoint - postPerPage
  setPageData(null)
  setPageData(research.slice(statingPoint, endingPoint))
 }

 const donateFunc = () => {
  history.push(`/${lang}`+'/payment')
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
      <div className='title'>Popular Science</div>
      <div className='expText'>
       Popular Science
       Media/news company
       For 149 years, we've pointed readers to the wonders of science, tech, and the
       For 149 years, we'vews company
       For 149 years, we've pointed readers to the wonders of science, tech, and the
       For 149 years, we'vews company
       For 149 years, we've pointed readers to the wonders of science, tech, and the
       For 149 years, we've pointed readers to the wonders of science, tech, and the
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
