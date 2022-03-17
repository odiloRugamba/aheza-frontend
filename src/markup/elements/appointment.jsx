import React, { Component, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Images
import lineBg from '../../images/appointment/line-bg.png';
import appMobile from '../../images/appointment/mobile.png';
import appWomen from '../../images/appointment/women.png';
import appMapPin from '../../images/appointment/map-pin.png';
import appSetting from '../../images/appointment/setting.png';
import appCheck from '../../images/appointment/check.png';
import appChat from '../../images/appointment/chat.png';
import { getDoctorByDay, createAppointment } from "../../store/appointment/actions";

const AboutSection = () => {

	// formData
	const [firstName, setFirstName] = useState(null)
	const [lastName, setLastName] = useState(null)
	const [gender, setGender] = useState(null)
	const [dateB, setDateB] = useState(null)
	const [phoneNumber, setPhoneNumber] = useState(null)
	const [communicationMethod, setCommunicationMethod] = useState(null)
	const [email, setEmail] = useState(null)
	const [nationId, setNationId] = useState(null)
	const [selectedDay, setSelectedDay] = useState(null)
	const [selectDoctorIn, setSelectDoctorIn] = useState(null)
	const [selectSession, setSelectSession] = useState(null)
	const history = useHistory()

	const [dateCha, setDateCha] = useState(null)
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
		dispatch(getDoctorByDay({ day: e.target.value }))
	}

	const selectDoctor = (e) => {
		setSelectDoctorIn(e.target.value)
		setSession(true)
		DoctorData.forEach(el => {
			if (el._id === e.target.value) {
				setSessionData(el.dailySession)
			}
		})
		setSession(false)
	}

	useEffect(() => {
		console.log(data)
		if (data?.length > 0) {
			setDoctor(false)
			setDoctorData([...data])
		}
	}, [data])


	const submitAppointment = () => {
		dispatch(createAppointment({
			firstName,
			lastName,
			gender,
			dateObirth: dateB,
			phoneNumber,
			CommunicationMethod: communicationMethod,
			email,
			nationId,
			AppointmentDay: selectedDay,
			doctor: selectDoctorIn,
			session: selectSession
		}))
		history.push('/Finalize')
	}



	return (
		<>
			<section className="section-area account-wraper1">
				<div className="container-fluid" style={{ paddingTop: 100 }}>
					<div className="appointment-inner section-sp2" style={{ backgroundImage: "url(" + lineBg + ")", backgroundRepeat: " no-repeat", backgroundPosition: "20px 140px" }}>
						<div className="container">
							<div className="rowAppo">
								<div className="col-xl-8 col-lg-12 col-md-12">
									<div className="appointment-form form-wraper">
										<h3 className="title">Book Appointment</h3>
										{/* <form action="#"> */}
										<div className="form-group">
											<input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" placeholder="First Name" />
											<input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" placeholder="last Name" />
										</div>
										<div className="form-group">
											<select value={gender} onChange={e => setGender(e.target.value)} className="form-select form-control">
												<option selected>Gender </option>
												<option value="Male">Male</option>
												<option value="Female">Female</option>
												<option value="NONE">Not to mention</option>
											</select>
											<input value={dateB} onChange={(e) => setDateB(e.target.value)} type={dateCha} className="form-control" onFocus={() => { setDateCha('date') }} placeholder='date of Birth' />
										</div>
										<div className="form-group">
											<input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="number" className="form-control" placeholder="Phone Number" />
											<input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email" />
											{/* <input value={insuranceId} onChange={e => setInsuranceId(e.target.value)} type="number" className="form-control" placeholder="Insurance  ID" /> */}
										</div>
										<div className="form-group">
											{/* <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email" /> */}
											<select value={communicationMethod} onChange={(e) => { setCommunicationMethod(e.target.value) }} className="form-select form-control">
												<option selected>Method of Communication</option>
												<option value="INPERSON">In Person</option>
												<option value="PHONECALL">Phone Call</option>
												<option value="ZOOMCALL">Zoom Video Call</option>
												<option value="AHEZACHAT">Aheza Call</option>
											</select>
										</div>
										<div className="form-group">
											<input value={nationId} onChange={e => setNationId(e.target.value)} type="email" className="form-control" placeholder="Nation ID" />
											<select value={selectedDay} onChange={(e) => { selectday(e) }} className="form-select form-control">
												<option selected>Select Day</option>
												<option value="MONDAY">Monday</option>
												<option value="TUESDAY">Tuesday</option>
												<option value="WENSDAY">Wensday</option>
												<option value="THUSDAY">Thusday</option>
												<option value="FRIDAY">Friday</option>
												<option value="SATURDAY">Saturday</option>
												<option value="SUNDAY">Sunday</option>
											</select>
										</div>
										<div className="form-group">
											<select onChange={(e) => selectDoctor(e)} className="form-select form-control" disabled={Doctor}>
												<option selected>Select Doctor</option>
												{
													DoctorData.map(el =>
														<option value={el._id}>{el.firstName + '  ' + el.lastName}</option>
													)
												}
											</select>
											<select onChange={(e) => setSelectSession(e.target.value)} className="form-select  form-control" disabled={Session}>
												<option selected>Select Session</option>
												{
													sessionData?.map(el =>
														el.status === "AVAILABLE" ?
															<option value={"Session" + el.startTime + '-' + el.endTime}>Session({el.startTime} - {el.endTime})</option> : null
													)
												}
											</select>
										</div>
										<button onClick={() => submitAppointment()} type="submit" className="btn btn-secondary btn-lg">Appointment Now</button>
										{/* </form> */}
									</div>
								</div>
								<div className="col-xl-2 col-lg-6 col-md-6">
									<div className="appointment-thumb">
										<img src={appMobile} alt="" />
										<div className="images-group">
											<img className="img1" src={appWomen} alt="" />
											<img className="img2" src={appMapPin} alt="" />
											<img className="img3" src={appSetting} alt="" />
											<img className="img4" src={appCheck} alt="" />
											<img className="img5" src={appChat} alt="" />
										</div>
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
