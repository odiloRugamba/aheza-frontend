import React, { Component, useState } from 'react';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AppointmentSection from "../elements/appointment";
import SelfEvaluation from "../elements/selfEvaluation";


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
			{
				selfCheckup ? <SelfEvaluation decline={declineSelfEvaluation} accept={acceptSelfEvaluation} /> : <> 	<Header />
					<hr style={{ color: "white" }} />
					<AppointmentSection /> <Footer /></>
			}
		</>
	);
}

export default BookAppointment;
