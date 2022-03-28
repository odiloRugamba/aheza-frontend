import React, { Component } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

// Import Images
import recentBlogImg1 from "../../images/blog/recent-blog/pic1.jpg";
import recentBlogImg2 from "../../images/blog/recent-blog/pic2.jpg";
import recentBlogImg3 from "../../images/blog/recent-blog/pic3.jpg";

import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";

const WidgetRecentPosts = ({ title, data, currentPage, more }) => {


	const history = useHistory()
	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da}-${mo}-${ye}`
	}


	const getVideoId = (url) => {
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return (match && match[7].length == 11) ? match[7] : false;
	}

	const moreFunc = () => {
		history.push(more)
	}



	return (
		<>
			<div className="widget recent-posts-entry">
				<h4 className="widget-title">{title ? title : "Recent Posts"}</h4>
				<div className="widget-post-bx">
					{
						data ? data.map(el =>
							<div className="widget-post clearfix">
								{console.log(el.youtubeVideoLink)}
								<div className="ttr-post-media">
									<img src={el.youtubeVideoLink ? `http://img.youtube.com/vi/${getVideoId(el?.youtubeVideoLink)}/3.jpg` : el.image ? el.image : recentBlogImg1}
										width="200" height="143" alt="" /> </div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<h6 className="post-title max-lines-2"><Link to={currentPage + el?.title + '/' + el?._id}>{el?.title}</Link></h6>
									</div>
									<ul className="post-meta">
										<li className="date"><i className="far fa-calendar-alt"></i>{convertData(el?.updatedAt)}</li>
									</ul>
								</div>
							</div>
						) : null
					}
					<div onClick={() => moreFunc()} className="more"> <div className="more-text">More</div> </div>
				</div>
			</div>
		</>
	);
}

export default WidgetRecentPosts;

