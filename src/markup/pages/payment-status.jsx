import React, { Component, useState } from 'react';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AppointmentSection from "../elements/f-appointment";


const BookAppointment = () => {
 const [selfCheckup, setSelfCheckup] = useState(false)

 const declineSelfEvaluation = () => {
  setSelfCheckup(false)
 }

 const acceptSelfEvaluation = () => {
  setSelfCheckup(false)
 }

 return (
  <>
   <Header />
   <hr style={{ color: "white" }} />
   <AppointmentSection />
   <Footer />
  </>
 );
}

export default BookAppointment;
