import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useParams } from "react-router-dom";



// Elements
import SelfEvaluation from "../elements/selfEvaluation";


const SelfEvaluationComp = () => {
 const history = useHistory()
 let { lang } = useParams();

 const [selfCheckup, setSelfCheckup] = useState(false)
 const declineSelfEvaluation = () => {
  // setSelfCheckup(false)

 }
 const acceptSelfEvaluation = () => {
  // setSelfCheckup(false)
  history.push(`/${lang}`)

 }
 return (
  <>
   <SelfEvaluation decline={declineSelfEvaluation} accept={acceptSelfEvaluation} />
  </>
 );
}

export default SelfEvaluationComp;
