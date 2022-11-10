import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getResearchs } from "../../store/research/actions";
import { FormattedMessage } from 'react-intl';


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
                                <h3 className='title title-80' >
                                    <FormattedMessage id="Why" defaultMessage="Why" />
                                    <a
                                        href='https://dashboard.flutterwave.com/donate/adl69olzsnch'
                                        className="btn btn-outline-primary btn-sm title-80 donate-btn"

                                    >
                                        <span>
                                            
                                            <FormattedMessage id="Donate" defaultMessage="Donate" />
                                        </span>
                                    </a> <br />
                                    <FormattedMessage id="toAhezaHealing" defaultMessage="toAhezaHealing" />
                                    <br /> 
                                    & 
                                    <FormattedMessage id="CareerCenter" defaultMessage="CareerCenter" />
                                    </h3>

                                <div className="testimonial-bx donation-text-first-box" >
                                    <div className="testimonial-content" style={{ fontSize: 20 }}>
                                        <br></br>
                                        <p>
                                            <span className='donation-text'>
                                                <b style={{ color: "white" }}>
                                                    <FormattedMessage id="AccurateAge" defaultMessage="AccurateAge" />
                                                    </b>
                                                 <FormattedMessage id="toSupport" defaultMessage="toSupport" />
                                            </span>
                                        </p>
                                        <p>
                                            <span className='donation-text'>
                                                <b style={{ color: "white" }}>
                                                    <FormattedMessage id="WorkTechniques" defaultMessage="WorkTechniques" /></b>
                                                    <FormattedMessage id="suchAsPeer" defaultMessage="suchAsPeer" />
                                            </span>
                                        </p>

                                        <p>
                                            <span className='donation-text'>
                                                <b style={{ color: "white" }}>
                                                    <FormattedMessage id="ResilienceOriented" defaultMessage="ResilienceOriented" /></b>
                                                    <FormattedMessage id="forEmotionRegulation" defaultMessage="forEmotionRegulation" />
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
                                                <b style={{ color: "white" }}>
                                                    <FormattedMessage id="ProposedTreatment" defaultMessage="ProposedTreatment" /></b>
                                                    <FormattedMessage id="whichInclude" defaultMessage="whichInclude" />
                                            </span>
                                        </p>
                                        <p>
                                            <span className='donation-text'>
                                                <b style={{ color: "white" }}>
                                                    <FormattedMessage id="CooperationWith" defaultMessage="CooperationWith" /> </b>
                                                <ul style={{ paddingLeft: 40 }}>
                                                    <li> - <FormattedMessage id="PromoteMental" defaultMessage="PromoteMental" /> </li>
                                                    <li> - <FormattedMessage id="CreateSafe" defaultMessage="CreateSafe" /></li>
                                                    <li> - <FormattedMessage id="AddressHarmful" defaultMessage="AddressHarmful" /></li>
                                                    <li> - <FormattedMessage id="ImproveCoordinated" defaultMessage="ImproveCoordinated" /></li>
                                                </ul>
                                            </span>
                                        </p>
                                        <p>
                                            <span className='donation-text'>
                                                <b style={{ color: "white" }}>
                                                    <FormattedMessage id="HolisticApproaches" defaultMessage="HolisticApproaches" /></b>
                                                <ul style={{ paddingLeft: 40 }}>
                                                    <li> - <FormattedMessage id="MentalHealth" defaultMessage="MentalHealth" /></li>
                                                    <li> - <FormattedMessage id="InformDecision" defaultMessage="InformDecision" /></li>
                                                    <li> - <FormattedMessage id="Careercoaching" defaultMessage="Careercoaching" /></li>
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
