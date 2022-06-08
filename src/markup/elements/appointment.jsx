import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Images
import { getDoctorByDay, postAppointmentData } from "../../store/appointment/actions";

import { BsExclamationCircle } from "react-icons/bs";



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


	const [firstNameError, setFirstNameError] = useState(false)
	const [lastNameError, setLastNameError] = useState(false)
	const [genderError, setGenderError] = useState(false)
	const [dateBError, setDateBError] = useState(false)
	const [phoneNumberError, setPhoneNumberError] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [communicationMethodError, setCommunicationMethodError] = useState(false)
	const [selectedDayError, setSelectedDayError] = useState(false)

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
		history.push('/Finalize')
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


	const checkError = (item) => {
		console.log(item)
		// if (item === 'firstName') {
		// 	console.log(firstName?.trim() === '')
		// 	console.log(firstName)
		// 	console.log(firstName?.trim() === '' || firstName !== '')
		// 	console.log(firstName?.trim() === '' && firstName !== '')
		// 	if (firstName?.trim() === '' || firstName !== '') {
		// 		setFirstNameError(true)
		// 	} else {
		// 		setFirstNameError(false)
		// 	}
		// } else if (item === 'lastName') {
		// 	if (lastName?.trim() === '' || lastName !== '') {
		// 		setLastNameError(true)
		// 	} else {
		// 		setLastNameError(false)
		// 	}
		// } else if (item === 'gender') {
		// 	if (gender?.trim() === '' || gender !== '') {
		// 		setGenderError(true)
		// 	} else {
		// 		setGenderError(false)
		// 	}
		// } else if (item === 'date') {
		// 	if (dateB?.trim() === '' || dateB !== '') {
		// 		setDateBError(true)
		// 	} else {
		// 		setDateBError(false)
		// 	}
		// } else if (item === 'email') {
		// 	if (email?.trim() === '' || email !== '') {
		// 		setEmailError(true)
		// 	} else {
		// 		setEmailError(false)
		// 	}
		// } else if (item === 'method') {
		// 	if (communicationMethod?.trim() === '' || communicationMethod !== '') {
		// 		setCommunicationMethodError(true)
		// 	} else {
		// 		setCommunicationMethodError(false)
		// 	}
		// } else if (item === 'appointment') {
		// 	if (selectedDay?.trim() === '' || selectedDay !== '') {
		// 		setSelectedDayError(true)
		// 	} else {
		// 		setSelectedDayError(false)
		// 	}
		// }
	}




	return (
		<>
			<section className="section-area account-wraper1">
				<div className="container-fluid" style={{ paddingTop: 100 }}>
					<div className="appointment-inner section-sp2" >
						<div className="container">
							<div className="rowAppo">
								<div className="col-xl-12 col-lg-12 col-md-12 ">
									<div className="appointment-form form-wraper">
										<h3 className="title">Book  Appointment</h3>
										<div className="form-group">
											<div>
												<input onBlur={() => checkError('firstName')} value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" placeholder="First Name" />
												<div style={{ color: '#F90221', textAlign: 'start', position: 'relative', bottom: 3, left: 10, height: 20 }}>
													{firstNameError ? <><span style={{ fontSize: 16 }}>
														<BsExclamationCircle />
													</span> Required</> : null}
												</div>
											</div>
											<div>
												<div>
													<input onBlur={() => checkError('lastName')} value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" placeholder="Last Name" />
													<div style={{ color: '#F90221', textAlign: 'start', position: 'relative', bottom: 3, left: 10, height: 20 }}>
														{lastNameError ? <> <span style={{ fontSize: 18 }}>
															<BsExclamationCircle /> </span> Required</>
															: null}
													</div>
												</div>
											</div>
										</div>
										<div className="form-group">
											<div>
												<select onBlur={() => checkError('gender')} value={gender} onChange={e => setGender(e.target.value)} className="form-select form-control">
													<option selected>Gender </option>
													<option value="Male">Male</option>
													<option value="Female">Female</option>
													<option value="NONE">Not to mention</option>
												</select>
												<div style={{ color: '#F90221', textAlign: 'start', position: 'relative', bottom: 3, left: 10, height: 20 }}>
													{genderError ? <><span style={{ fontSize: 18 }}>
														<BsExclamationCircle /> Required</span>
													</>
														: null}
												</div>
											</div>
											<div>
												<input onBlur={() => checkError('date')} value={dateB} onChange={(e) => setDateB(e.target.value)} type={dateCha} className="form-control" onFocus={() => { setDateCha('date') }} placeholder='Date of Birth' />
												<div style={{ color: '#F90221', textAlign: 'start', position: 'relative', bottom: 3, left: 10, height: 20 }}>
													{dateBError ? <><span style={{ fontSize: 18 }}>
														<BsExclamationCircle /> Required</span>
													</>
														: null}
												</div>
											</div>
										</div>
										<div className="form-group">
											<div>
												<input onBlur={() => validatePhoneNumber()} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="number" className="form-control" placeholder="Phone Number" />
												<div style={{ color: '#F90221', textAlign: 'start', position: 'relative', bottom: 3, left: 10, height: 20 }}>
													{phoneNumberError ? <><span style={{ fontSize: 18 }}>
														<BsExclamationCircle /> Required</span>
													</>
														: null}
												</div>
											</div>
											<div>
												<input onBlur={() => checkError('email')} value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email" />
												<div style={{ color: '#F90221', textAlign: 'start', position: 'relative', bottom: 3, left: 10, height: 20 }}>
													{emailError ? <> <span style={{ fontSize: 18 }}>
														<BsExclamationCircle /> 			</span> Email is not valid</>
														: null}
												</div>
											</div>
										</div>
										<div className="form-group">
											<div>
												<select onBlur={() => checkError('method')} value={communicationMethod} onChange={(e) => { setCommunicationMethod(e.target.value) }} className="form-select form-control">
													<option selected>Method of Communication</option>
													<option value="IN-PERSON">In Person</option>
													<option value="PHONE-CALL">Phone Call</option>
													<option value="ZOOM-CALL">Zoom Video Call</option>
													<option value="AHEZA-CHAT">Aheza Chat</option>
												</select>
												<div style={{ color: '#F90221', textAlign: 'start', position: 'relative', bottom: 3, left: 10, height: 20 }}>
													{communicationMethodError ? <><span style={{ fontSize: 18 }}>
														<BsExclamationCircle /> Required </span>
													</>
														: null}
												</div>
											</div>
											<div>
												<input onBlur={() => checkError('appointment')} value={selectedDay} onChange={(e) => { setSelectedDay(e.target.value) }} type={dateChaApp} className="form-control" onFocus={() => { setDateChaApp('date') }} placeholder='Appointment day' />
												<div style={{ color: '#F90221', textAlign: 'start', position: 'relative', bottom: 3, left: 10, height: 20 }}>
													{selectedDayError ? <><span style={{ fontSize: 18 }}>
														<BsExclamationCircle /> Required</span>
													</>
														: null}
												</div>
											</div>
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
