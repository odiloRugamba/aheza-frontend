import React, { Component, useState } from 'react';
import { useDispatch } from "react-redux";
import { postDoctors } from "../../store/doctor/actions";
const ApplyForm = ({ placeholder }) => {

	const [firstName, setFirstName] = useState(null)
	const [lastName, setLastName] = useState(null)
	const [phoneNumber, setPhoneNumber] = useState(null)
	const [email, setEmail] = useState(null)
	const [gender, setGender] = useState(null)
	const [expertise, setExpertise] = useState(null)
	const [joinIngText, setJoinIngText] = useState(null)
	const dispatch = useDispatch()

	const submitFunc = () => {
		dispatch(postDoctors({
			firstName,
			lastName,
			phoneNumber,
			email,
			gender,
			expertise,
			joinIngText
		}))
		setFirstName('')
		setLastName('')
		setPhoneNumber('')
		setEmail('')
		setGender('')
		setExpertise('')
		setJoinIngText('')
	}
	return (
		<>
			<div className="comment-respond" id="respond">
				<h4 className="widget-title">Apply to join our therapist network</h4>
				<div className="comment-form" id="commentform">
					<p className="comment-form-name">
						<label for="name">First Name <span className="required">*</span></label>
						<input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" name="firstName" id="firstName" />
					</p>
					<p className="comment-form-email">
						<label for="email">Last Name <span className="required">*</span></label>
						<input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" name="lastName" id="lastName" />
					</p>

					<p className="comment-form-">
						<label for="email">Phone Number <span className="required">*</span></label>
						<input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder="Phone Number" name="phoneNumber" id="phoneNumber" />
					</p>

					<p className="comment-form-">
						<label for="email">Email <span className="required">*</span></label>
						<input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" name="email" id="email" />
					</p>

					<p className="comment-form-">
						<div className="form-group">
							<select value={gender} onChange={(e) => setGender(e.target.value)} className="form-select form-control">
								<option selected>Gender </option>
								<option value="MALE">Male</option>
								<option value="FEMALE">Female</option>
								<option value="NONE">Not to mention</option>
							</select>
						</div>
					</p>
					<p className="comment-form-">
						<div className="form-group">

							<select value={expertise} onChange={(e) => setExpertise(e.target.value)} className="form-select form-control">
								<option selected>Expertise</option>
								<option value="CLINICAL-DEPRESSION">CLINICAL-DEPRESSION</option>
								<option value="BIPOLAR-DISORDER">BIPOLAR-DISORDER</option>
								<option value="ANXIETY-DISORDER">ANXIETY-DISORDER</option>
								<option value="DEMENTIA">DEMENTIA</option>
								<option value="SCHIZOPHRENIA">SCHIZOPHRENIA</option>
							</select>
						</div>
					</p>

					<p className="comment-form-comment">
						<label for="comment">Why do you want to join</label>
						<textarea value={joinIngText} onChange={(e) => setJoinIngText(e.target.value)} rows="8" name="reason" placeholder="Why do you want to join?" id="reason"></textarea>
					</p>
					<p className="form-submit">
						<input onClick={() => submitFunc()} type="submit" value="Apply" className="submit" id="submit" name="submit" load />
					</p>
				</div>
			</div>

		</>
	);
}

export default ApplyForm;
