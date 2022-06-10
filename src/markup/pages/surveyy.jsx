import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, answerQuestion } from "../../store/survey/actions";

import logo from '../../images/logo-2.png';








const SaveyPage = () => {
  const [startSavey, setStartSavey] = useState(false)
  const [pageIndex, setPageIndex] = useState(0)
  const [model, setModel] = useState(true)
  const [surveyDone, setSurveyDone] = useState(false)
  const [questions, setQuestions] = useState([])
  const [title, setTitle] = useState(null)
  const [report, setReport] = useState(null)
  const [opendEndedAns, setOpendEndedAns] = useState(null)

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)

  const [data, setData] = useState([])
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const resData = useSelector(state => state.SurveyReducers.data)

  const startSaveyFunc = () => {
    setStartSavey(true)
  }
  const nextAPrevFunc = (item, questionType, dataItem) => {
    if (item === 'prev' && pageIndex !== 0) {
      setPageIndex(pageIndex - 1)
    } else if (item === 'next' && pageIndex < questions?.length - 1) {
      if (questionType === 'OPENENDED') {
        console.log(opendEndedAns)
        const copyData = questions
        copyData.forEach(el => {
          if (el._id === dataItem._id) {
            el.answers[0] = {
              ans: opendEndedAns
            }
          }
        });
        setQuestions(copyData)
        setOpendEndedAns(null)
      }
      setPageIndex(pageIndex + 1)
    } else if (item === 'next') {
      if (questionType === 'OPENENDED') {
        console.log(opendEndedAns)
        const copyData = questions
        copyData.forEach(el => {
          if (el._id === dataItem._id) {
            el.answers[0] = {
              ans: opendEndedAns
            }
          }
        });
        setQuestions(copyData)
        setOpendEndedAns(null)
      }
      setSurveyDone(true)
    }
  }
  const setOpendEndedAnsData = (item) => {
    if (item) {
      setOpendEndedAns(item)
      return opendEndedAns
    } else {
      return ''
    }
  }
  const checkQuestion = (id, ansID) => {
    const copyData = questions
    copyData.map(el => {
      if (el._id === id) {
        el.answers.map(elem => {
          if (elem._id === ansID) {
            elem.checked = true
          } else if (elem.checked === true) {
            elem.checked = false
          }
        })
      }
    })
    setData([...copyData])
  }
  const checkBoxQuestion = (id, ansID) => {
    const copyData = questions
    copyData.map(el => {
      if (el._id === id) {
        el.answers.map(elem => {
          if (elem?._id === ansID && !elem?.checked) {
            elem.checked = true
          } else if (elem?._id === ansID && elem?.checked) {
            elem.checked = false
          }
        })
      }
    })
    setData([...copyData])
  }

  const goToAheza = () => {
    const answerCopy = []
    questions.forEach(el => {
      if (el.questionTpe === 'OPENENDED') {
        // console.log(el)
        answerCopy.push({
          question: el.question,
          questionType: el.questionTpe,
          answers: [
            {
              ans: el?.answers?.[0].ans
            }
          ]
        })
      } else {
        const anses = []
        el.answers.forEach(elem => {
          if (elem?.checked === true) {
            anses.push({
              ansID: elem?._id,
              ans: elem?.ans
            })
          }
        })
        answerCopy.push({
          question: el.question,
          questionType: el.questionTpe,
          answers: anses
        })
      }
    });
    console.log(name, email, phoneNumber)
    dispatch(answerQuestion({
      survey: id,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      questions: answerCopy
    }))
    history.push('/suveryThankyou')
  }

  const CloseModel = () => {
    setModel(false)
  }


  useEffect(() => {
    dispatch(getQuestions(id))
  }, [])

  useEffect(() => {
    setQuestions(resData?.questions)
    console.log(resData?.questions)
    setReport(resData?.explanation)
    setTitle(resData?.title)
  }, [resData])

  return (
    <>
      <div className="page-content bg-white">
        <div className='logoImageCont'>
          <Link to="/"><img className='logo' src={logo} alt="" /></Link>
        </div>
        <div className="banner-wraper">
          <div className="page-banner banner-lg contact-banner" style={{ maxHeight: 400 }}>
            <div className="container">
              <div className="page-banner-entry text-center">
                <h2>Survey</h2>
              </div>
            </div>
          </div>
        </div>

        <section className="saveyCont">
          <div className="container saveyContainer">
            <div className="contact-wraper">
              {
                !startSavey ? <div className='rowCont survey'>
                  <div className="col-lg-10 mb-30 pt-30 ">
                    <form className="form-wraper contact-form ajax-form">
                      <div className="ajax-message"></div>
                      <div className="row">
                        <div className="form-group col-md-12">
                          <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" required className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="form-group col-md-12">
                          <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" required className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-12">
                          <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phone" type="text" required className="form-control" placeholder="Phone Numbers" />
                        </div>
                        <div className="col-lg-12">
                          <button onClick={() => startSaveyFunc()} name="submit" type="submit" value="Submit" className="btn w-100 btn-secondary btn-lg startSurvBtn">Start</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> : !surveyDone ?
                  <div className='swipeCont' style={{ paddingLeft: 15, paddingTop: 15, paddingBottom: 15 }}>
                    <SwipeableViews id='swipeContout' style={{ alignItem: 'flex-start' }} index={pageIndex} enableMouseEvents>
                      {
                        questions?.map(el =>
                          <div className="row">
                            <div className="page-banner-entry">
                              <h4>{el.question}</h4>
                            </div>
                            <div className='questionCont onBehalfCont'>
                              <ul>
                                {
                                  el?.questionTpe === 'RADIO' ?
                                    el?.answers.map(ans =>
                                      <li style={{ fontSize: 18, display: 'flex', alignItems: 'center' }} onClick={() => { checkQuestion(el?._id, ans?._id) }} >
                                        <div>
                                          <span onClick={() => { checkQuestion(el?._id, ans?._id) }} className='checkBox'>
                                            <label style={{ marginRight: 5 }} className='radioBtn'>
                                              <input onClick={() => { checkQuestion(el?._id, ans?._id) }} checked={ans?.checked} type="radio" id="scales" name={el.question} />
                                              <span />
                                            </label>
                                          </span>
                                        </div>
                                        <div>
                                          {ans?.ans}
                                        </div>
                                      </li>
                                    ) : el.questionTpe === 'MUTLIPLECHECK' ? el?.answers.map(ans =>
                                      <li style={{ fontSize: 18, display: 'flex', alignItems: 'center' }} onClick={() => { checkBoxQuestion(el._id, ans?._id) }} >
                                        <div onClick={() => { checkBoxQuestion(el._id, ans?._id) }} className='checkBox'>
                                          <label style={{ marginRight: 5 }} className='CheckBoxBtn'>
                                            <input onClick={() => { checkBoxQuestion(el._id, ans?._id) }} checked={ans?.checked} type="checkbox" id="scales" name={el.question} />
                                            <span />
                                          </label>
                                        </div>
                                        {ans?.ans}
                                      </li>
                                    ) : <div className='textAreaCont'>
                                      <textarea value={opendEndedAns ? opendEndedAns : setOpendEndedAnsData(el?.answers[0]?.ans)} onChange={(e => setOpendEndedAns(e.target.value))} placeholder='Write your answer here ' rows="10" style={{ width: "100%" }} />
                                    </div>
                                }
                              </ul>
                            </div>
                            <div style={{ paddingLeft: 15, paddingRight: 20 }} className='changeQuestionBtn'>
                              <div>
                                <button style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }} onClick={() => nextAPrevFunc("prev")} className='positionBtn'> Previous</button>
                              </div>
                              <div>
                                <button style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }} onClick={() => nextAPrevFunc("next", el.questionType, el)} className='positionBtn'>Next</button>
                              </div>
                            </div>
                          </div>
                        )
                      }
                    </SwipeableViews>
                  </div> : <>
                    <div className="page-banner-entry text-center pt-20 pl-20 pr-20 pb-20">
                      <h4>Thank you for your participation!</h4>
                      <div className='thnk-par'>
                        <p> 
                          We appreciated so much time and effort you put into this
                        </p>
                      </div>
                      <div className="col-lg-12 m-20">
                        <button onClick={() => goToAheza()} name="submit" type="submit" value="Submit" className="btn w-100 btn-secondary btn-lg">Submit To Aheza</button>
                      </div>
                    </div>
                  </>
              }
            </div>
          </div>
        </section>
      </div>
      {
        model ? <div className='modelCont'>
          <div className='mainPartCont'>
            <div className='mainPart'>
              <div className='rowCont'>
                <div className="col-lg-00 mb-0">
                  <div className="page-banner-entry text-center">
                    <h2>Welcome!</h2>
                    <h2>{title}</h2>
                  </div>
                  <div className='mainContent appointmentText'>
                    <p>
                      <div dangerouslySetInnerHTML={{ __html: report }}></div>
                    </p>
                  </div>
                  
                  <div className='changeQuestionBtn'>
                    <div>
                      <button onClick={() => history.push('/')} className='positionBtn'>Go Home</button>
                    </div>
                    <div>
                      <button onClick={() => CloseModel()} className='positionBtn'>Start survey</button>
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



export default SaveyPage;
