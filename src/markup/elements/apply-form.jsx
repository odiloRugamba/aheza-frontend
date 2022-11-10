import React, { Component, useState } from 'react';
import { useDispatch } from "react-redux";
import { postDoctors } from "../../store/doctor/actions";
import { FormattedMessage } from 'react-intl';

import CheckImg from '../../images/checked.png'


const ApplyForm = ({ placeholder }) => {
	const [firstName, setFirstName] = useState(null)
	const [lastName, setLastName] = useState(null)
	const [phoneNumber, setPhoneNumber] = useState(null)
	const [email, setEmail] = useState(null)
	const [gender, setGender] = useState(null)
	const [expertise, setExpertise] = useState(null)
	const [reasonToJoin, setReasonToJoin] = useState(null)
	const [loading, setLoading] = useState(null)
	const [checked, setChecked] = useState(null)
	const dispatch = useDispatch()

	const submitFunc = () => {
		if (firstName && lastName && phoneNumber && expertise) {
			setLoading(true)
			dispatch(postDoctors({
				firstName,
				lastName,
				phoneNumber,
				email,
				gender,
				expertise,
				reasonToJoin
			}))
			setFirstName('')
			setLastName('')
			setPhoneNumber('')
			setEmail('')
			setGender('')
			setExpertise('')
			setReasonToJoin('')
			setTimeout(() => {
				setChecked(true)
			}, 1000);
			setTimeout(() => {
				setChecked(false)
				setLoading(false)
			}, 3000);
		}

	}
	return (
		<>
			<div className="comment-respond" id="respond">
				<h4 className="widget-title">
				<FormattedMessage id="Applyto" defaultMessage="Applyto" />
					</h4>
				<div className="comment-form" id="commentform">
					<p className="comment-form-name">
						<label for="name">
				<FormattedMessage id="FirstName" defaultMessage="FirstName" />
			 <span className="required">*</span></label>
			 <FormattedMessage id="FirstName" defaultMessage="FirstName" >
				{(msg)=> (<input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder={msg} name="firstName" id="firstName"/>)}
				</FormattedMessage>
			 

					</p>
					<p className="comment-form-email">
						<label for="email">
				<FormattedMessage id="LastName" defaultMessage="LastName" />
				
						 <span className="required">*</span></label>
						 <FormattedMessage id="LastName" defaultMessage="LastName" >
				{(msg)=> (<input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder={msg} name="lastName" id="lastName"/>)}
				</FormattedMessage>


					</p>

					<p className="comment-form-">
						<label for="email">
							
				<FormattedMessage id="PhoneNumbe" defaultMessage="PhoneNumbe" />
						
						<span className="required">*</span></label>
						<FormattedMessage id="FirstName" defaultMessage="FirstName" >
				{(msg)=> (<input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder={msg} name="phoneNumber" id="phoneNumber" />)}
				</FormattedMessage>
						
					</p>

					<p className="comment-form-">
						<label for="email">
				<FormattedMessage id="Email" defaultMessage="Email" />
						
						 <span className="required">*</span></label>
						 <FormattedMessage id="Email" defaultMessage="Email" >
				{(msg)=> (<input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder={msg} name="email" id="email" />)}
				</FormattedMessage>
						
					</p>

					<p className="comment-form-">
						<div className="form-group">
							<select value={gender} onChange={(e) => setGender(e.target.value)} className="form-select form-control">
								<FormattedMessage id="Genders" defaultMessage="Genders" >
									{(msg)=> (<option selected> 
									{msg}
								</option>)}
								</FormattedMessage>
				<FormattedMessage id="Males" defaultMessage="Males" >
									{(msg)=> (<option value="MALE"> 
									{msg}
								</option>)}
				 </FormattedMessage>
				'<FormattedMessage id="Female" defaultMessage="Female" >
									{(msg)=> (<option value="FEMALE"> 
									{msg}
								</option>)}
								</FormattedMessage>
				<FormattedMessage id="NotTMention" defaultMessage="NotTMention" >
									{(msg)=> (<option value="NONE"> 
									{msg}
								</option>)}
				</FormattedMessage>
							</select>
						</div>
					</p>
					<p className="comment-form-">
						<div className="form-group">

							<select value={expertise} onChange={(e) => setExpertise(e.target.value)} className="form-select form-control">
							<FormattedMessage id="Expertise" defaultMessage="Expertise" >
									{(msg)=> (<option selected> 
									{msg}
								</option>)}
								</FormattedMessage>

								<FormattedMessage id="CLINICAL" defaultMessage="CLINICAL" >
									{(msg)=> (<option value="CLINICAL-DEPRESSION"> 
									{msg}
								</option>)}
								</FormattedMessage>
								<FormattedMessage id="BIPOLAR" defaultMessage="BIPOLAR" >
									{(msg)=> (<option value="BIPOLAR-DISORDER"> 
									{msg}
								</option>)}
								</FormattedMessage>
								<FormattedMessage id="ANXIETY" defaultMessage="ANXIETY" >
									{(msg)=> (<option value="ANXIETY-DISORDER"> 
									{msg}
								</option>)}
								</FormattedMessage>
								<FormattedMessage id="DEMENTIA" defaultMessage="DEMENTIA" >
									{(msg)=> (<option value="DEMENTIA"> 
									{msg}
								</option>)}
								</FormattedMessage>
								<FormattedMessage id="SCHIZOPHRENIA" defaultMessage="SCHIZOPHRENIA" >
									{(msg)=> (<option value="SCHIZOPHRENIA"> 
									{msg}
								</option>)}
								</FormattedMessage>
							</select>
						</div>
					</p>

					<p className="comment-form-comment">
						<label for="comment">
				<FormattedMessage id="WhyDo" defaultMessage="WhyDo" />
						
						</label>
						<textarea value={reasonToJoin} onChange={(e) => setReasonToJoin(e.target.value)} rows="8" name="reason" placeholder="Why do you want to join?" id="reason"></textarea>
					</p>
					<p className="form-submit">
						<button onClick={() => submitFunc()} type="submit" value="Submit Comment " className={+ loading ? "loading" : "submitComment"} id="submit" name="submit" disabled={loading && checked ? true : false}>
							{
								loading ? !checked ? <div className="spinner-border" role="status">
									<span className="sr-only">
				<FormattedMessage id="Loading" defaultMessage="Loading" />
									
									</span>
								</div> : <div style={{ display: "flex", justifyContent: "center" }}> <img style={{ height: 29, }} src={CheckImg} /></div>
									: <div style={{ width: 110 }} >
				<FormattedMessage id="Apply" defaultMessage="Apply" />
									
									</div>
							}
						</button>
					</p>
				</div>
			</div>

		</>
	);
}

export default ApplyForm;
