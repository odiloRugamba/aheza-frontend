import React, { Component } from 'react';

const ApplyForm = ({ placeholder }) => {

	return (
		<>
			<div className="comment-respond" id="respond">
				<h4 className="widget-title">Apply to join our therapist network</h4>
				<form className="comment-form" id="commentform">
					<p className="comment-form-name">
						<label for="name">First Name <span className="required">*</span></label>
						<input type="text" value="" placeholder="First Name" name="firstName" id="firstName" />
					</p>
					<p className="comment-form-email">
						<label for="email">Last Name <span className="required">*</span></label>
						<input type="text" value="" placeholder="Last Name" name="lastName" id="lastName" />
					</p>
					
					<p className="comment-form-">
						<label for="email">Phone Number <span className="required">*</span></label>
						<input type="text" value="" placeholder="Phone Number" name="phoneNumber" id="phoneNumber" />
					</p>
					
					<p className="comment-form-">
						<label for="email">Email <span className="required">*</span></label>
						<input type="text" value="" placeholder="Email" name="email" id="email" />
					</p>

					<p className="comment-form-comment">
						<label for="comment">Why do you want to join</label>
						<textarea rows="8" name="reason" placeholder="Why do you want to join?" id="reason"></textarea>
					</p>
					<p className="form-submit">
						<input type="submit" value="Apply" className="submit" id="submit" name="submit" />
					</p>
				</form>
			</div>

		</>
	);
}

export default ApplyForm;
