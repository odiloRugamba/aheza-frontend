import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import testPic1 from "../../images/testimonials/pic1.jpg";
import testPic2 from "../../images/testimonials/pic2.jpg";

const CommentList = ({ coments }) => {
	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da}-${mo}-${ye}`
	}
	return (
		<>
			<ol className="comment-list">
				{
					coments?.length > 0 ? coments?.map(el =>
						<li className="comment">
							<div className="comment-body">
								<div className="comment-author vcard">
									{/* <img className="avatar photo" src={testPic1} alt="" /> */}
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


				{/* <li className="comment">
						<div className="comment-body">
							<div className="comment-author vcard"> 
								<img className="avatar photo" src={testPic1} alt=""/> 
								<div className="clearfix">
									<cite className="fn">Sonar</cite> 
									<span className="says">says:</span> 
									<div className="comment-meta"> <Link to="#">May 09, 2021 at 10:45 am</Link> </div>
								</div>
							</div>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
							<div className="reply"> <Link to="#" className="comment-reply-link">Reply</Link> </div>
						</div>
					</li>
					<li className="comment">
						<div className="comment-body">
							<div className="comment-author vcard"> 
								<img className="avatar photo" src={testPic2} alt=""/> 
								<div className="clearfix">
									<cite className="fn">Michel</cite>
									<span className="says">says:</span>
									<div className="comment-meta"> <Link to="#">May 09, 2021 at 10:45 am</Link> </div>
								</div>
							</div>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
							<div className="reply"> <Link to="#" className="comment-reply-link">Reply</Link> </div>
						</div>
					</li> */}

			</ol>

		</>
	);
}

export default CommentList;
