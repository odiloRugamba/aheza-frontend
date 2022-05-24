import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getResearchs } from "../../store/research/actions";


// Layout
import Header from "../layout/header";
import background from '../../images/aheza-donate-1.jpg';
import Footer from "../layout/footer";
import donation from "../../images/donation.jpg";
import donateImage from "../../images/donate.jpg";
import { BackgroundImage } from "react-image-and-background-image-fade";




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
    <div className="page-content bg-white" style={{ marginTop: 100 }}>

            <section className="section-area">
            
                 <div className='row' style={{backgroundColor: "white"}}>
                     <div className='content col-md-7' style={{ padding: 100 }}>
                         
                        <br></br>
                        <br></br>
                         <h3 className='title' style={{fontSize: 80}}>Why should I donate?</h3>
                         
                        <br></br>
                        <br></br>
                        <div className='expText' style={{fontSize: 20}}>
                        Each year, charitable and subsidized mental health care is provided to individuals throughout our community.
                        With your help, more services can be provided for children, adolescents, adults,  and families seeking help.
                        </div>
                        <br></br>
                        <br></br>
                         <div className="blog-car" style={{ display: 'flex', }}>
                             
                        <Link
                            to='links'
                            className="btn btn-outline-primary btn-sm"
                            style={{ background: '#565ACF', color: '#fff', fontSize: 20, fontWeight: 700, padding: 20, paddingLeft: 50, paddingRight: 50}}
                        >
                            <span>
                            Donate
                            </span>
                        </Link>
                        </div>
                    </div> 
                    <div className='col-md-5' style={{ backgroundImage: "url(" + background + ")", backgroundSize: 'cover' }}>
                    </div>
                    
                </div>
            </section>
    </div>
    <Footer />
  </>
 );

}

export default ResearchFindings;
