import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Dcore } from '../../../api';

const WidgetRelatedPosts = ({ title, data }) => {

	const history = useHistory()
	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da} ${mo} ${ye}`
	}
	const changeRoute = (link) => {
		history.push(link)
		window.location.reload()
	}

	return (
		<>
			<div className="widget recent-posts-entry">
				<h4 className="widget-title">{title ? title : "Related Posts"}</h4>
				<div className="widget-post-bx">

					{
						data ? data?.map(el =>
							<div className="widget-post clearfix">
								{/* <div className="ttr-post-media"> <img src={Dcore?.IMAGEURL + "/" + el?.image} width="200" height="143" alt="" /> </div> */}
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<p className="post-title  "
										style={{
										WebkitLineClamp: 2,
										wordBreak: "break-word",
										overflow: "hidden",
										textOverflow: "ellipsis",
										display: "-webkit-box",
										WebkitBoxOrient: "vertical"
											}}
										><Link onClick={() => changeRoute("/blog-grid" + '/' + el.title?.replaceAll(" ", "-") + '/' + el._id)} style={{fontSize: 20}}>{el?.title}</Link></p>
									</div>
									{/* <div className="ttr-post-header">
										<h6 onClick={() => changeRoute("/blog-grid" + '/' + el.title?.replaceAll(" ", "-") + '/' + el._id)} className="post-title max-lines-2"><a>{el?.title}</a></h6>
									</div> */}
									<ul className="post-meta">
										<li className="date">{convertData(el?.updatedAt)}</li>
									</ul>
								</div>
							</div>
						) : null
					}
					{/* <div className="more"> <Link to={"/blog-grid"} className="more-text">See All</Link> </div> */}

					<div className="more">
						<Link to={"/blog-grid"}  style={{fontSize: 20, color: "white", textTransform: "initial", fontWeight: 700}}>See All</Link>
					</div>
				</div>
			</div>

		</>
	);
}

export default WidgetRelatedPosts;