import React, { Component, useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, answerQuestion } from "../../store/selfAssessment/actions";


import Header from "../layout/header";
import Footer from "../layout/footer";

import Map from '../elements/map';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import animateWave from "../../images/shap/wave-blue.png";
import animateRotate from "../../images/shap/plus-blue.png";




const SaveyPage = () => {
 const [startSavey, setStartSavey] = useState(false)
 const [pageIndex, setPageIndex] = useState(0)
 const [model, setModel] = useState(true)
 const [surveyDone, setSurveyDone] = useState(false)
 const [questions, setQuestions] = useState([])
 const [title, setTitle] = useState(null)
 const [report, setReport] = useState(null)
 const [opendEndedAns, setOpendEndedAns] = useState(null)
 const [id, setId] = useState(null)
 const [onBehalfQuestion, setonBehalfQuestion] = useState([
  { name: "Individual", checked: true, id: 1 },
  { name: "Couple", checked: false, id: 2 },
  { name: "Child", checked: false, id: 3 },
 ])

 const [name, setName] = useState(null)
 const [email, setEmail] = useState(null)
 const [phoneNumber, setPhoneNumber] = useState(null)

 const [data, setData] = useState([])
 const history = useHistory()
 // const { id } = useParams()
 const dispatch = useDispatch()
 const resData = useSelector(state => state.SelfAssessmentReducers.data)

 const startSaveyFunc = () => {
  dispatch(getQuestions('CHILD'))
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
   name,
   email,
   phoneNumber,
   questions: answerCopy
  }))
  history.push('/')
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

 return (
  <>
   <div className="page-content bg-white">

    <div className="banner-wraper">
     <div className="page-banner banner-lg contact-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 400 }}>
      <div className="container">
       <div className="page-banner-entry text-center">
        <h2>Assesement</h2>
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
             <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" required className="form-control" placeholder="Your Names" />
            </div>
            <div className="form-group col-md-12">
             <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" required className="form-control" placeholder="Email" />
            </div>
            <div className="form-group col-md-12">
             <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phone" type="text" required className="form-control" placeholder="Phone Numbers" />
            </div>
            <div className='onBehalfCont'>
             <div className="page-banner-entry text-center">
              <h6>what this assesement behalf on who</h6>
             </div>
             <div className='questionCont'>
              <ul>
               {
                onBehalfQuestion.map(el =>
                 <li>
                  <span className='checkBox'>
                   <label className='radioBtn'>
                    <input type="radio" id="scales" name="que" value={el.checked} />
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
             <button onClick={() => startSaveyFunc()} name="submit" type="submit" value="Submit" className="btn w-100 btn-secondary btn-lg">Start</button>
            </div>

           </div>
          </form>
         </div>
        </div> : !surveyDone ?
         <div className='swipeCont'>
          <SwipeableViews index={pageIndex} enableMouseEvents>
           {
            questions?.map(el =>
             <div className="row">
              <div className="page-banner-entry text-center">
               <h6>{el.question}</h6>
              </div>
              <div className='questionCont'>
               <ul>
                {
                 el?.questionType === 'RADIO' ?
                  el?.answers.map(ans =>
                   <li onClick={() => { checkQuestion(el?._id, ans?._id) }} >
                    <span onClick={() => { checkQuestion(el?._id, ans?._id) }} className='checkBox'>
                     <label className='radioBtn'>
                      <input onClick={() => { checkQuestion(el?._id, ans?._id) }} checked={ans.checked} type="radio" id="scales" name={el.question} />
                      <span />
                     </label>
                    </span>
                    {ans?.ans}
                   </li>
                  ) : el.questionType === 'MUTLIPLECHECK' ? el?.answers.map(ans =>
                   <li onClick={() => { checkBoxQuestion(el._id, ans?._id) }} >
                    <span onClick={() => { checkBoxQuestion(el._id, ans?._id) }} className='checkBox'>
                     <label className='CheckBoxBtn'>
                      <input onClick={() => { checkBoxQuestion(el._id, ans?._id) }} checked={ans.checked} type="checkbox" id="scales" name={el.question} />
                      <span />
                     </label>
                    </span>
                    {ans?.ans}
                   </li>
                  ) : <div className='textAreaCont'>
                   <textarea value={opendEndedAns ? opendEndedAns : setOpendEndedAnsData(el?.answers[0]?.ans)} onChange={(e => setOpendEndedAns(e.target.value))} placeholder='Write your answer here ' rows="10" cols="66" />
                  </div>
                }
               </ul>
              </div>
              <div className='changeQuestionBtn'>
               <div>
                <button onClick={() => nextAPrevFunc("prev")} className='positionBtn'>Prevs</button>
               </div>
               <div>
                <button onClick={() => nextAPrevFunc("next", el.questionType, el)} className='positionBtn'>Next</button>
               </div>
              </div>
             </div>
            )
           }
          </SwipeableViews>
         </div> : <>
          <div className="page-banner-entry text-center">
           <h4>Thanks for your pariticipation!!!!!!!</h4>
           <div className='thnk-par'>
            <p>
             Every meeting report should have all the above items, but different companies, industries, and occasions may require additional info. For example, scientific research teams may require that their meeting reports include abstracts, consent and ethics approval, funding acknowledgments, and other points related to their research. Another example: Many construction companies include a section about the environmental impacts of their work in their meeting reports.
            </p>
           </div>
           <div className="col-lg-12">
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
        <div className="col-lg-0 mb-0">
         <div className="page-banner-entry text-center">
          <h2>Self Assesement</h2>
         </div>
         <div className='mainContent'>
          <p>
           We write news in three different levels of English. We want to help you understand English more. Now all students can enjoy reading and listening to news.We write news in three different levels of English. We want to help you understand English more. Now all students can enjoy reading and listening to news.We write news in three different levels of English. We want to help you understand English more. Now all students can enjoy reading and listening to news.
           We write news in three different levels of English. We want to help you understand English more. Now all students can enjoy reading and listening to news.We write news in three different levels of English. We want to help you understand English more. Now all students can enjoy reading and listening to news.We write news in three different levels of English. We want to help you understand English more. Now all students can enjoy reading and listening to news.
          </p> <p>
           We write news in three different levels of English. We want to help you understand English more. Now all students can enjoy reading and listening to news.We write news in three different levels of English. We want to help you understand English more. Now all students can enjoy reading and listening to news.We write news in three different levels of English. We want to help you understand English more. Now all students can enjoy reading and listening to news.
           We write news in three different levels of English.We want to help you understand English more.Now all students can enjoy reading and listening to news.We write news in three different levels of English.We want to help you understand English more.Now all students can enjoy reading and listening to news.We write news in three different levels of English.We want to help you understand English more. Now all students can enjoy reading and listening to news. </p>
         </div>
         <div className='changeQuestionBtn'>
          <div>
           <button onClick={() => goToAheza()} className='positionBtn'>Aheza</button>
          </div>
          <div>
           <button onClick={() => CloseModel()} className='positionBtn'>Start Assesement</button>
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