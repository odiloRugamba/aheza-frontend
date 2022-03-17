import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import recentBlogImg1 from "../../../images/blog/recent-blog/pic1.jpg";
import recentBlogImg2 from "../../../images/blog/recent-blog/pic2.jpg";
import recentBlogImg3 from "../../../images/blog/recent-blog/pic3.jpg";

const ResearchFindingWidget = ({ title, data }) => {

	return (
		<>
			<div className="widget recent-posts-entry">
				<h4 className="widget-title">{title ? title : "Related Research"}</h4>
				<div className="widget-post-bx">
					{
						data ? data.map(el =>
							<div className="widget-post clearfix">
								<div className="ttr-post-media"> <img src={el?.image} width="200" height="143" alt="" /> </div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<h6 className="post-title max-lines-2"><Link to={"/research-finding/" + el?.title + '/' + el?._id}>{el?.title}</Link></h6>
									</div>
								</div>
							</div>
						) : null
					}
					<div className="more"> <Link to="/research-findings" className="more-text">See all</Link> </div>
				</div>
			</div>

		</>
	);
}

export default ResearchFindingWidget;