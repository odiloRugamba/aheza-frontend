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

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const acceptSelfEvaluation = () => {
		setSelfCheckup(false)
	}
	return (
		<>
			{
				selfCheckup ? <SelfEvaluation decline={declineSelfEvaluation} accept={acceptSelfEvaluation} /> : <> 	<Header />
					<hr style={{ color: "white" }} />
					<AppointmentSection />
					<Footer /></>
			}
		</>
	);
}

export default BookAppointment;
