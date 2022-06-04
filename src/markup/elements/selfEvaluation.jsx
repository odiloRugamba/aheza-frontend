import React, { Component, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';


import Header from "../layout/header";
import Footer from "../layout/footer";

import Map from './map';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import animateWave from "../../images/shap/wave-blue.png";
import animateRotate from "../../images/shap/plus-blue.png";



const SelftEvaluation = ({ decline, accept }) => {
  const [startSavey, setStartSavey] = useState(true)
  const [pageIndex, setPageIndex] = useState(0)
  const [model, setModel] = useState(true)
  const [surveyDone, setSurveyDone] = useState(false)
  const [data, setData] = useState([
    {
      question: "What As, my compiler will require Rust to run in the  do?",
      _id: 1,
      multipleChoice: [
        {
          answer: "I've feeling drepressed",
          checked: true
        },
        {
          answer: "Management / C-Level",
          checked: false
        },
        {
          answer: "Volunteer",
          checked: false
        },
        {
          answer: "Regional Manager",
          checked: false
        },
      ]
    },
    {
      question: "During the past two weeks, how often has your mental health affected your relationships?",
      _id: 2,
      multipleChoice: [
        {
          answer: "I've feeling drepressed",
          checked: true
        },
        {
          answer: "Management / C-Level",
          checked: false
        },
        {
          answer: "Volunteer",
          checked: false
        },
        {
          answer: "Regional Manager",
          checked: false
        },
      ]
    },
    {
      question: "Have you felt particularly low or down for more than 2 weeks in a row?",
      _id: 3,
      multipleChoice: [
        {
          answer: "I've feeling drepressed",
          checked: true
        },
        {
          answer: "Management / C-Level",
          checked: false
        },
        {
          answer: "Volunteer",
          checked: false
        },
        {
          answer: "Regional Manager",
          checked: false
        },
      ]
    }
  ])
  const history = useHistory()

  const startSaveyFunc = () => {
    setStartSavey(true)
  }
  const nextAPrevFunc = (item) => {
    if (item === 'prev' && pageIndex !== 0) {
      setPageIndex(pageIndex - 1)
    } else if (item === 'next' && pageIndex < data?.length - 1) {
      setPageIndex(pageIndex + 1)
    } else if (item === 'next') {
      setSurveyDone(true)
    }
  }
  const checkQuestion = (id, ans) => {
    const copyData = data
    copyData.map(el => {
      if (el._id === id) {
        el.multipleChoice.map(elem => {
          if (elem.answer === ans) {
            // console.log(ans)
            elem.checked = true
          } else if (elem.checked === true) {
            elem.checked = false
          }
        })
      }
    })
    setData([...copyData])
  }
  const goToAheza = () => {
    history.push('/')
  }
  const CloseModel = () => {
    setModel(false)
  }
  return (
    <>
      <>
        {
          !model ? <Header /> : null
        }
        <div className="page-content bg-white" style={{ marginTop: 100 }}>
          <div className="banner-wraper">
            <div className="page-banner banner-lg contact-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 400 }}>
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h2>Please take Self Assesment first</h2>
                </div>
              </div>
              <img className="pt-img1 animate-wave" src={animateWave} alt="" />
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
                            <button onClick={() => accept()} name="submit" type="submit" value="Submit" className="btn w-100 btn-secondary btn-lg">Start Booking</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div> : !surveyDone ?
                    <div className='swipeCont'>
                      <SwipeableViews index={pageIndex} enableMouseEvents>
                        {
                          data?.map(el =>
                            <div className="row">
                              <div className="page-banner-entry text-center">
                                <h6>{el.question}</h6>
                              </div>
                              <div className='questionCont'>
                                <ul>
                                  {
                                    el?.multipleChoice.map(ans =>
                                      <li onClick={() => { checkQuestion(el._id, ans.answer) }} >
                                        <span onClick={() => { checkQuestion(el._id, ans.answer) }} className='checkBox'>
                                          <label className='radioBtn'>
                                            <input onClick={() => { checkQuestion(el._id, ans.answer) }} checked={ans.checked} type="radio" id="scales" name={el.question} />
                                            <span />
                                          </label>
                                        </span>
                                        {ans.answer}
                                      </li>
                                    )
                                  }
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
                          )
                        }
                      </SwipeableViews>
                    </div> : <>
                      <div className="page-banner-entry text-center">
                        <h4>Thank you for your participation!</h4>
                        <div className='thnk-par'>
                          <p>
                            Please go ahead and book your appointment. our therapists are waiting for you!
                          </p>
                        </div>
                        <div className="col-lg-12">
                          <button onClick={() => accept()} name="submit" type="submit" value="Submit" className="btn w-100 btn-secondary btn-lg">Submit</button>
                        </div>
                      </div>
                    </>
                }
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
      {
        model ? <div className='modelCont'>
          <div className='mainPartCont'>
            <div className='mainPart'>
              <div className='rowCont'>
                <div className="col-lg-0 mb-0">
                  <div className="page-banner-entry text-center">
                    <h2>What is included in a meeting report? </h2>
                  </div>
                  <div className='mainContent'>
                    <p>
                      Every meeting report should have all the above items, but different companies, industries, and occasions may require additional info. For example, scientific research teams may require that their meeting reports include abstracts, consent and ethics approval, funding acknowledgments, and other points related to their research. Another example: Many construction companies include a section about the environmental impacts of their work in their meeting reports.
                      Additionally, if an executive transaction with a board member comes up for a vote, each attendee’s vote should be included in your board meeting report. So too should all information presented to attendees and the ultimate outcome of the vote. This documentation matters if the IRS requests documentation regarding corporate finances.
                    </p>
                    <p> Every meeting report should have all the above items, but different companies, industries, and occasions may require additional info. For example, scientific research teams may require that their meeting reports include abstracts, consent and ethics approval, funding acknowledgments, and other points related to their research. Another example: Many construction companies include a section about the environmental impacts of their work in their meeting reports.
                      Additionally, if an executive transaction with a board member comes up for a vote, each attendee’s vote should be included in your board meeting report. So too should all information presented to attendees and the ultimate outcome of the vote. This documentation matters if the IRS requests documentation regarding corporate finances.
                    </p>
                    <p>
                      Every meeting report should have all the above items, but different companies, industries, and occasions may require additional info. For example, scientific research teams may require that their meeting reports include abstracts, consent and ethics approval, funding acknowledgments, and other points related to their research. Another example: Many construction companies include a section about the environmental impacts of their work in their meeting reports.
                      Additionally, if an executive transaction with a board member comes up for a vote, each attendee’s vote should be included in your board meeting report. So too should all information presented to attendees and the ultimate outcome of the vote. This documentation matters if the IRS requests documentation regarding corporate finances.
                    </p>
                  </div>
                  <div className='changeQuestionBtn'>
                    <div>
                      <button onClick={() => decline()} className='positionBtn'>decline</button>
                    </div>
                    <div>
                      <button onClick={() => CloseModel()} className='positionBtn'>Accept</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='backGround'></div>
        </div> : null
      }

    </>
  );
}



export default SelftEvaluation;
