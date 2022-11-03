import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import testPic1 from "../../../images/testimonials/pic1.jpeg";
import testPic2 from "../../../images/testimonials/pic2.jpeg";

const CommentList = ({ coments }) => {
	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da} ${mo} ${ye}`
	}
	return (
		<>
			<ol className="comment-list">
				{
					coments?.length > 0 ? coments?.map(el =>
						<li className="comment">
							<div className="comment-body">
								<div className="comment-author vcard">
									<img className="avatar photo" src={testPic1} alt="" />
									<div className="clearfix">
										<cite className="fn">{el?.name}</cite>
										<span className="says">says:</span>
										<div className="comment-meta"> <Link to="#">{convertData(el.updatedAt)}</Link> </div>
									</div>
								</div>
								<p>{el.comment}</p>
								<div className="reply"> <Link to="#" className="comment-reply-link">Reply</Link> </div>
							</div>
						</li>
					) : null
				}
			</ol>

		</>
	);
}

export default CommentList;
