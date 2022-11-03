import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



// Elements
import SelfEvaluation from "../elements/selfEvaluation";


const SelfEvaluationComp = () => {
 const history = useHistory()

 const [selfCheckup, setSelfCheckup] = useState(false)
 const declineSelfEvaluation = () => {
  // setSelfCheckup(false)

 }
 const acceptSelfEvaluation = () => {
  // setSelfCheckup(false)
  history.push('/')

 }
 return (
  <>
   <SelfEvaluation decline={declineSelfEvaluation} accept={acceptSelfEvaluation} />
  </>
 );
}

export default SelfEvaluationComp;
