import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const WidgetRecentPosts = ({ title, data, currentPage, more }) => {


	const history = useHistory()
	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da} ${mo} ${ye}`
	}


	const getVideoId = (url) => {
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return (match && match[7].length == 11) ? match[7] : false;
	}

	const moreFunc = () => {
		history.push(more)
	}

	const seeChangePageFunc = (el) => {
		history.push(currentPage + el?.title + '/' + el?._id)
		window.location.reload()

	}


	return (
		<>
			<div className="widget recent-posts-entry" style={{ padding: 10, borderRadius: 10 }}>
				<h4 className="widget-title">{title ? title : "Recent Posts"}</h4>
				<div className="widget-post-bx">
					{
						data ? data.map(el =>
							<div className="widget-post clearfix">
								{console.log(el.youtubeVideoLink)}
								<div className="ttr-post-media">
									{
										el?.youtubeVideoLink ?
											<img src={`http://img.youtube.com/vi/${getVideoId(el?.youtubeVideoLink)}/0.jpg`} alt="" />
											: <img src={el.image} alt="" />
									}
								</div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<p className="post-title  "
											style={{
												WebkitLineClamp: 3,
												wordBreak: "break-word",
												overflow: "hidden",
												textOverflow: "ellipsis",
												display: "-webkit-box",
												WebkitBoxOrient: "vertical",
												marginTop: 20
											}}
										><Link to="#" onClick={() => seeChangePageFunc(el)} style={{ fontSize: 14 }}>{el?.title}</Link></p>
									</div>
									<ul className="post-meta" style={{ paddingBottom: 15 }}>
										<li className="date">{convertData(el?.updatedAt)}</li>
									</ul>
								</div>
							</div>
						) : null
					}
					<div className="more">
						<Link to="#" onClick={moreFunc} style={{ fontSize: 20, color: "white", textTransform: "initial", fontWeight: 700 }}>See All</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default WidgetRecentPosts;

