import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Images
import { getDoctorByDay, postAppointmentData } from "../../store/appointment/actions";

import { BsExclamationCircle } from "react-icons/bs";
import Input from "./tag-widgets/input";


const AboutSection = () => {
	const [firstName, setFirstName] = useState(null)
	const [lastName, setLastName] = useState(null)
	const [gender, setGender] = useState(null)
	const [dateB, setDateB] = useState(null)
	const [phoneNumber, setPhoneNumber] = useState(null)
	const [communicationMethod, setCommunicationMethod] = useState(null)
	const [email, setEmail] = useState(null)
	const [nationId, setNationId] = useState(null)
	const [selectedDay, setSelectedDay] = useState(null)
	// const [selectDoctorIn, setSelectDoctorIn] = useState(null)
	// const [selectSession, setSelectSession] = useState(null)
	const [isVisible, setIsVisible] = useState(false)
	const [disableBtn, setDisableBtn] = useState()
	const history = useHistory()
	const { phoneErrorFocus, setPhoneErrorFocus } = useState(null)
	const [dateCha, setDateCha] = useState(null)
	const [dateChaApp, setDateChaApp] = useState(null)
	const [Session, setSession] = useState(true)
	const [Doctor, setDoctor] = useState(true)
	const [DoctorData, setDoctorData] = useState([])
	const [sessionData, setSessionData] = useState([])
	const dispatch = useDispatch()
	const data = useSelector(state => state.AppointmentReducers.data)


	const selectday = (e) => {
		setSelectedDay(e.target.value)
		setDoctor(true)
		setSession(true)
		// dispatch(getDoctorByDay({ day: e.target.value }))
	}

	// const selectDoctor = (e) => {
	// 	setSelectDoctorIn(e.target.value)
	// 	setSession(true)
	// 	DoctorData.forEach(el => {
	// 		if (el._id === e.target.value) {
	// 			setSessionData(el.dailySession)
	// 		}
	// 	})
	// 	setSession(false)
	// }


	useEffect(() => {
		if (data?.length > 0) {
			setDoctor(false)
			setDoctorData([...data])
		} else if (data?.length === 0) {
			setIsVisible(true)
			setTimeout(() => {
				setIsVisible(false)
			}, 2000);
		}
	}, [data])


	const submitAppointment = () => {
		const selfAssessmentAnsID = window.localStorage.getItem('selfAssessmentAnsID')
		dispatch(postAppointmentData({
			firstName,
			lastName,
			gender,
			dateOfBirth: dateB,
			phoneNumber,
			CommunicationMethod: communicationMethod,
			email,
			AppointmentDay: selectedDay,
			// doctor: selectDoctorIn,
			// session: selectSession,
			selfAssessmentAnsID: selfAssessmentAnsID
		}))
		history.push('/thankyou')
	}

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const validatePhoneNumber = (phoneNumber) => {
		return phoneNumber.match(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)
	}





	return (
		<>
			<section className="section-area account-wraper1">
				<div className="container-fluid" style={{ paddingTop: 100 }}>
					<div className="appointment-inner section-sp2" >
						<div className="container phonePadding">
							<div className="rowAppo">
								<div className="col-xl-12 col-lg-12 col-md-12 ">
									<div className="appointment-form form-wraper">
										<h3 className="title">Book  Appointment</h3>
										<div className="form-group">
											<Input
												placeholder="First Name"
												onChange={(e) => { setFirstName(e.target.value) }}
												value={firstName}
												required={true}
												errorMessage='Required'
												id='firstName'
											/>
											<Input
												placeholder="Last Name"
												onChange={(e) => { setLastName(e.target.value) }}
												value={lastName}
												required={true}
												errorMessage='Required'
												id='lastName'
											/>
										</div>
										<div className="form-group">
											<div>
												<select value={gender} onChange={e => setGender(e.target.value)} className="form-select form-control">
													<option selected>Gender </option>
													<option value="Male">Male</option>
													<option value="Female">Female</option>
													<option value="NONE">Not to mention</option>
												</select>
												<div style={{ color: '#F90221', textAlign: 'start', position: 'relative', bottom: 3, left: 10, height: 20 }}>
												</div>
											</div>
											<Input
												placeholder='Date of Birth'
												onChange={(e) => { setDateB(e.target.value) }}
												value={dateB}
												required={true}
												errorMessage='Required'
												id='lastName'
												type={dateCha}
												onFocus={() => { setDateCha('date') }}
											/>

										</div>
										<div className="form-group">
											<Input
												placeholder="Phone Number"
												onChange={(e) => { setPhoneNumber(e.target.value) }}
												value={phoneNumber}
												required={true}
												errorMessage='Required'
												validerrorMessage='Input is not Valid'
												id='lastName'
												type='number'
											// pattern='^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$'
											/>
											<Input
												placeholder="Email"
												onChange={(e) => { setEmail(e.target.value) }}
												value={email}
												required={true}
												errorMessage='Required'
												validerrorMessage='Input is not Valid'
												id='lastName'
												type='Email'
												pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
											/>
										</div>
										<div className="form-group">
											<div>
												<select value={communicationMethod} onChange={(e) => { setCommunicationMethod(e.target.value) }} className="form-select form-control">
													<option selected>Method of Communication</option>
													<option value="IN-PERSON">In Person</option>
													<option value="PHONE-CALL">Phone Call</option>
													<option value="ZOOM-CALL">Zoom Video Call</option>
													<option value="AHEZA-CHAT">Aheza Chat</option>
												</select>
												<div style={{ color: '#F90221', textAlign: 'start', position: 'relative', bottom: 3, left: 10, height: 20 }}>
												</div>
											</div>

											<Input
												placeholder="Appointment day"
												onChange={(e) => { setSelectedDay(e.target.value) }}
												value={selectedDay}
												required={true}
												errorMessage='Required'
												id='lastName'
												type={dateChaApp}
												onFocus={() => { setDateChaApp('date') }}
											/>
										</div>
										<button
											onClick={() => submitAppointment()}
											type="submit"
											className="btn btn-secondary btn-lg"
											disabled={!(firstName && lastName && gender && dateB && phoneNumber && communicationMethod && email && selectedDay)}>
											<b style={{ fontSize: 20, color: "white" }}>
												Book  Appointment
											</b>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}

export default AboutSection;
