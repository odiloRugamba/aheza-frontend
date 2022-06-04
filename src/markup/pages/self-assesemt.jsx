import React, { Component, useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, answerQuestion } from "../../store/selfAssessment/actions";

import LoadingComp from "../elements/loading";
// Import Images
import logo from '../../images/logo-2.png';



const SurveyPage = () => {
  const [startSavey, setStartSavey] = useState(false)
  const [pageIndex, setPageIndex] = useState(0)
  const [model, setModel] = useState(true)
  const [surveyDone, setSurveyDone] = useState(false)
  const [questions, setQuestions] = useState([])
  const [title, setTitle] = useState(null)
  const [report, setReport] = useState(null)
  const [opendEndedAns, setOpendEndedAns] = useState(null)
  const [id, setId] = useState(null)
  const [submition, setSubmition] = useState(null)
  const [chosenCategory, setChoseCategory] = useState("Individual");
  const category = [
    { name: "Individual", checked: true, id: 1 },
    { name: "Couple", checked: false, id: 2 },
    { name: "Child", checked: false, id: 3 },
  ]
  const [onBehalfQuestion, setonBehalfQuestion] = useState(category)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)

  const [data, setData] = useState([])
  const history = useHistory()
  const dispatch = useDispatch()
  const resData = useSelector(state => state.SelfAssessmentReducers.data)

  const startSaveyFunc = () => {
    console.log("========>", chosenCategory)
    console.log("========>", chosenCategory?.toUpperCase())
    dispatch(getQuestions(chosenCategory?.toUpperCase()))
    setStartSavey(true)
  }

  const nextAPrevFunc = (item, questionType, dataItem) => {
    if (item === 'prev' && pageIndex !== 0) {
      setPageIndex(pageIndex - 1)
    } else if (item === 'next' && pageIndex < questions?.length - 1) {
      if (questionType === 'OPENENDED') {
        // console.log(opendEndedAns)
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
        // console.log(opendEndedAns)
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
        // console.log(copyData)
      }
      goToAheza()
      // history.push('/book-appointment')
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
      if (el.questionType === 'OPENENDED') {
        answerCopy.push({
          question: el._id,
          questionType: el.questionType,
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
              ansID: elem?._id
            })
          }
        })
        answerCopy.push({
          question: el._id,
          questionType: el.questionType,
          answer: anses
        })
      }
    });
    dispatch(answerQuestion({
      selfAssessment: id,
      questions: answerCopy
    }))
    // setSubmition(true)
    history.push('/book-appointment')
  }
  const CloseModel = () => {
    setModel(false)
  }
  // useEffect(() => {
  //  dispatch(getQuestions(id))
  // }, [])
  useEffect(() => {
    setQuestions(resData?.questions)
    setReport(resData?.explanation)
    setTitle(resData?.title)
    setId(resData?._id)
  }, [resData])
  const selectCategory = (id) => {
    category.map(el => {
      if (el.id === id) {
        el.checked = true
        setChoseCategory(el.name)
      } else {
        el.checked = false
      }
    })
    setonBehalfQuestion(category)
  }


  return (
    <>
      <div className="page-content bg-white" >
        <div className='logoImageCont'>
          <Link to="/"><img className='logo' src={logo} alt="" /></Link>
        </div>
        <div className="banner-wraper">
          <div className="page-banner banner-lg contact-banner" style={{ maxHeight: 400 }}>
            <div className="container">
              <div className="page-banner-entry text-center">
                <h2>Answer this question</h2>
              </div>
            </div>
          </div>
        </div>

        <section className="saveyCont">
          <div className="container">
            <div className="contact-wraper">
              {
                !startSavey ? <div className='rowCont'>
                  <div className="col-lg-10 mb-30">
                    <div className="form-wraper contact-form ajax-form">
                      <div className="ajax-message"></div>
                      <div className="row">
                        <div className='onBehalfCont'>
                          <div className="page-banner-entry">
                            <h4>I am taking this assesement on behalf of:</h4>
                          </div>
                          <div className='questionCont'>
                            <ul>
                              {
                                onBehalfQuestion.map(el =>
                                  <li onClick={() => {
                                    selectCategory(el.id)
                                  }} style={{ fontSize: 18 }}>
                                    <span className='checkBox'>
                                      <label className='radioBtn'>
                                        <input onClick={() => {
                                          selectCategory(el.id)
                                        }} checked={el.checked} type="radio" id="scales" name="que" value={el.checked} />
                                        <span />
                                      </label>
                                    </span>
                                    {el.name}
                                  </li>
                                )
                              }
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button onClick={() => startSaveyFunc()} style={{ fontSize: 20, fontWeight: 700 }} className="btn w-100 btn-secondary btn-lg">Start</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> : !surveyDone ?
                  <div className='swipeCont' style={{ padding: 15 }}>
                    <SwipeableViews id='swipeContout' style={{ alignItem: 'flex-start' }} index={pageIndex} enableMouseEvents>
                      {
                        questions?.length > 0 ?
                          questions?.map(el =>
                            <div className="row">
                              <div className="page-banner-entry">
                                <h4>{el.question}</h4>
                              </div>
                              <div className='questionCont onBehalfCont' >
                                <ul>
                                  {
                                    el?.questionType === 'RADIO' ?
                                      el?.answers.map(ans =>
                                        <li style={{ fontSize: 18, display: 'flex', alignItems: 'center' }} onClick={() => { checkQuestion(el?._id, ans?._id) }} >
                                          <div>
                                            <span onClick={() => { checkQuestion(el?._id, ans?._id) }} className='checkBox'>
                                              <label style={{ marginRight: 5 }} className='radioBtn'>
                                                <input onClick={() => { checkQuestion(el?._id, ans?._id) }} checked={ans.checked} type="radio" id="scales" name={el.question} />
                                                <span />
                                              </label>
                                            </span>
                                          </div>
                                          <div>
                                            {ans?.ans}
                                          </div>
                                        </li>
                                      ) : el.questionType === 'MUTLIPLECHECK' ? el?.answers.map(ans =>
                                        <li style={{ fontSize: 18 }} onClick={() => { checkBoxQuestion(el._id, ans?._id) }} >
                                          <span onClick={() => { checkBoxQuestion(el._id, ans?._id) }} className='checkBox'>
                                            <label style={{ marginRight: 5 }} className='CheckBoxBtn'>
                                              <input onClick={() => { checkBoxQuestion(el._id, ans?._id) }} checked={ans.checked} type="checkbox" id="scales" name={el.question} />
                                              <span />
                                            </label>
                                          </span>
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
                          ) : <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}><LoadingComp /></div>
                      }
                    </SwipeableViews>
                  </div> : null
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
                  </div>
                  <div className='mainContent appointmentText'>
                    <p>
                      <h4 style={{ marginBottom: 7 }}>Please fill in this questionaire first. </h4>
                      1. This is Aheza's  mental health questionaire.<br />

                      2. Please take time to answer the following questions carefully and truthfully. <br />

                      3. They will help us match you with the right therapist.<br />
                      4. Your answers are confidential.
                    </p>
                  </div>
                  <div className='changeQuestionBtn'>
                    <div>
                      <button onClick={() => history.push('/')} style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }} className='positionBtn'>Back to Home</button>
                    </div>
                    <div>
                      <button onClick={() => CloseModel()} style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }} className='positionBtn'>Yes, Continue</button>
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



export default SurveyPage;
