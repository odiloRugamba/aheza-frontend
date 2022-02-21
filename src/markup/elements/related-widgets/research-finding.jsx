import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import recentBlogImg1 from "../../../images/blog/recent-blog/pic1.jpg";
import recentBlogImg2 from "../../../images/blog/recent-blog/pic2.jpg";
import recentBlogImg3 from "../../../images/blog/recent-blog/pic3.jpg";

const ResearchFindingWidget = ({ title }) => {

	return (
		<>
			<div className="widget recent-posts-entry">
				<h4 className="widget-title">{title ? title : "Related Research"}</h4>
				<div className="widget-post-bx">
					<div className="widget-post clearfix">
						<div className="ttr-post-media"> <img src={recentBlogImg1} width="200" height="143" alt="" /> </div>
						<div className="ttr-post-info">
							<div className="ttr-post-header">
								<h6 className="post-title"><Link to="/blog-details">Precious Tips To Help You Get Better.</Link></h6>
							</div>
						</div>
					</div>
					<div className="widget-post clearfix">
						<div className="ttr-post-media"> <img src={recentBlogImg2} width="200" height="160" alt="" /> </div>
						<div className="ttr-post-info">
							<div className="ttr-post-header">
								<h6 className="post-title"><Link to="/blog-details">Ten Doubts You Should Clarify About.</Link></h6>
							</div>
						</div>
					</div>
					<div className="widget-post clearfix">
						<div className="ttr-post-media"> <img src={recentBlogImg3} width="200" height="160" alt="" /> </div>
						<div className="ttr-post-info">
							<div className="ttr-post-header">
								<h6 className="post-title"><Link to="/blog-details">The 10 Steps Needed For Putting.</Link></h6>
							</div>
						</div>
					</div>
					<div className="more"> <Link to="/testimonials" className="more-text">See all</Link> </div>
				</div>
			</div>

		</>
	);
}

export default ResearchFindingWidget;