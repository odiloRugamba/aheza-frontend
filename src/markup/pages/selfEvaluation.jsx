import React, { Component, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AppointmentSection from "../elements/appointment";
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
