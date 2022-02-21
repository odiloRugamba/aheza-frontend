import React, { Component } from 'react';

const commentRespond = ({ placeholder }) => {

	return (
		<>
			<div className="comment-respond" id="respond">
				<h4 className="widget-title">Leave a comment</h4>
				<form className="comment-form" id="commentform">
					<p className="comment-form-name">
						<label for="name">Name <span className="required">*</span></label>
						<input type="text" value="" name="Name" placeholder="Name" id="name" />
					</p>
					<p className="comment-form-email">
						<label for="email">Email <span className="required">*</span></label>
						<input type="text" value="" placeholder="Email" name="email" id="email" />
					</p>
					<p className="comment-form-comment">
						<label for="comment">Comment</label>
						<textarea rows="8" name="comment" placeholder={placeholder ? placeholder : "Comment"} id="comment"></textarea>
					</p>
					<p className="form-submit">
						<input type="submit" value="Submit Comment" className="submit" id="submit" name="submit" />
					</p>
				</form>
			</div>

		</>
	);
}

export default commentRespond;
