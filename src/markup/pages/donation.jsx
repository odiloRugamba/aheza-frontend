import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getResearchs } from "../../store/research/actions";


// Layout
import Header from "../layout/header";
import background from '../../images/aheza-donate-3.jpeg';
import Footer from "../layout/footer";
import donateImage from "../../images/background/aheza-bg-donate.jpeg";
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
        return `${da} ${mo} ${ye}`
    }

    const changePage = (page) => {
        const endingPoint = (page.selected + 1) * postPerPage
        const statingPoint = endingPoint - postPerPage
        setPageData(null)
        setPageData(research.slice(statingPoint, endingPoint))
    }

    return (
        <>
            <Header />
            <div className="page-content bg-white" style={{ marginTop: 100 }}>

                <section className="section-area">

                    <div className='row' style={{ backgroundColor: "white", margin: 0 }}>
                        <div style={{ backgroundImage: "url(" + background + ")", backgroundSize: 'cover' }}>
                            <div className='content col-md-8 donation-section' >

                                <br></br>
                                <br></br>
                                <h3 className='title title-80' >Why
                                    <a
                                        href='https://dashboard.flutterwave.com/donate/adl69olzsnch'
                                        className="btn btn-outline-primary btn-sm title-80 donate-btn"

                                    >
                                        <span>
                                            Donate
                                        </span>
                                    </a> <br />
                                    to Aheza Healing
                                    <br /> & Career Center?</h3>

                                <div className="testimonial-bx donation-text-first-box" >
                                    <div className="testimonial-content" style={{ fontSize: 20 }}>
                                        <br></br>
                                        <p>
                                            <span className='donation-text'>
                                                <b style={{ color: "white" }}>Accurate, age-appropriate and culturally-sensitive information</b> to support   personal and professional development, with particular focus on  leadership and entrepreneurship.
                                            </span>
                                        </p>
                                        <p>
                                            <span className='donation-text'>
                                                <b style={{ color: "white" }}>Work techniques</b> such as peer support groups, psychoeducation, community outreach and one-to-one sessions.
                                            </span>
                                        </p>

                                        <p>
                                            <span className='donation-text'>
                                                <b style={{ color: "white" }}>Resilience-oriented therapy protocol</b> for emotion regulation, behavioral self-management and identity development.
                                            </span>
                                        </p>



                                    </div>
                                    <div className="quote-icon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                </div>
                                <div className="testimonial-bx donation-text-second-box" >
                                    <div className="testimonial-content" style={{ fontSize: 20 }}>
                                        <br></br>
                                        <p>
                                            <span className='donation-text'>
                                                <b style={{ color: "white" }}>Proposed treatment with combined elements of process</b> which include  clinical and community interventions to build up agency, responsibility and motivation for change.
                                            </span>
                                        </p>
                                        <p>
                                            <span className='donation-text'>
                                                <b style={{ color: "white" }}>Cooperation with local officials to: </b>
                                                <ul style={{ paddingLeft: 40 }}>
                                                    <li> - Promote mental health care and  awareness. </li>
                                                    <li> - Create safe and supportive environments. </li>
                                                    <li> - Address harmful social and behavioral norms.</li>
                                                    <li> - Improve coordinated  responses.</li>
                                                </ul>
                                            </span>
                                        </p>
                                        <p>
                                            <span className='donation-text'>
                                                <b style={{ color: "white" }}>Holistic approaches that include: </b>
                                                <ul style={{ paddingLeft: 40 }}>
                                                    <li> - Mental health care and awareness. </li>
                                                    <li> - Inform decision-making.</li>
                                                    <li> - Career coaching. </li>

                                                </ul>
                                            </span>
                                        </p>

                                    </div>
                                    <div className="quote-icon-2">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-4' >
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );

}

export default ResearchFindings;
