import React, { Component, useState } from 'react';

const CommentRespond = ({ placeholder, submit }) => {

	const [name, setName] = useState(null)
	const [email, setEmail] = useState(null)
	const [comment, setComment] = useState(null)
	const localSubmit = () => {
		submit({ comment, email, name })
		setName(null)
		setEmail(null)
		setComment(null)
	}

	return (
		<>
			<div className="comment-respond" id="respond">
				<h4 className="widget-title">Leave a comment</h4>
				<div className="comment-form" id="commentform">
					<p className="comment-form-name">
						<label for="name">Name <span className="required">*</span></label>
						<input value={name} onChange={(e) => setName(e.target.value)} type="text" name="Name" placeholder="Name" id="name" />
					</p>
					<p className="comment-form-email">
						<label for="email">Email <span className="required">*</span></label>
						<input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" name="email" id="email" />
					</p>
					<p className="comment-form-comment">
						<label for="comment">Comment</label>
						<textarea value={comment} onChange={(e) => setComment(e.target.value)} rows="8" name="comment" placeholder={placeholder ? placeholder : "Comment"} id="comment"></textarea>
					</p>
					<p className="form-submit">
						<input onClick={() => localSubmit()} type="submit" value="Submit Comment" className="submit" id="submit" name="submit" />
					</p>
				</div>
			</div>

		</>
	);
}

export default CommentRespond;
