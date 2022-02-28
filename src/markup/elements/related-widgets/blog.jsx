import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import recentBlogImg1 from "../../../images/blog/recent-blog/pic1.jpg";
import recentBlogImg2 from "../../../images/blog/recent-blog/pic2.jpg";
import recentBlogImg3 from "../../../images/blog/recent-blog/pic3.jpg";

const WidgetRelatedPosts = ({ title, data }) => {


	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da}-${mo}-${ye}`
	}

	return (
		<>
			<div className="widget recent-posts-entry">
				<h4 className="widget-title">{title ? title : "Related Posts"}</h4>
				<div className="widget-post-bx">

					{
						data ? data?.map(el =>
							<div className="widget-post clearfix">
								<div className="ttr-post-media"> <img src={recentBlogImg1} width="200" height="143" alt="" /> </div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<h6 className="post-title"><Link to="/blog-details">{el?.title}</Link></h6>
									</div>
									<ul className="post-meta">
										<li className="date"><i className="far fa-calendar-alt"></i>{convertData(el?.updatedAt)}</li>
									</ul>
								</div>
							</div>
						) : null
					}


					{/* <div className="widget-post clearfix">
						<div className="ttr-post-media"> <img src={recentBlogImg2} width="200" height="160" alt="" /> </div>
						<div className="ttr-post-info">
							<div className="ttr-post-header">
								<h6 className="post-title"><Link to="/blog-details">Ten Doubts You Should Clarify About.</Link></h6>
							</div>
							<ul className="post-meta">
								<li className="date"><i className="far fa-calendar-alt"></i> 20 July 2021</li>
							</ul>
						</div>
					</div> */}

					{/* <div className="widget-post clearfix">
						<div className="ttr-post-media"> <img src={recentBlogImg3} width="200" height="160" alt="" /> </div>
						<div className="ttr-post-info">
							<div className="ttr-post-header">
								<h6 className="post-title"><Link to="/blog-details">The 10 Steps Needed For Putting.</Link></h6>
							</div>
							<ul className="post-meta">
								<li className="date"><i className="far fa-calendar-alt"></i> 19 July 2021</li>
							</ul>
						</div>
					</div> */}

					<div className="more"> <Link to="/testimonials" className="more-text">More</Link> </div>
				</div>
			</div>

		</>
	);
}

export default WidgetRelatedPosts;