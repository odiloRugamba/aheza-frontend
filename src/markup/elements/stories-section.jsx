import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { getStorys } from "../../store/story/actions";
import { useDispatch, useSelector } from "react-redux";
import { Dcore } from "../../api/index";
import { Carousel } from '@trendyol-js/react-carousel';
import leftIcon from '../../images/appointment/left.png';
import rightIcon from '../../images/appointment/right.png';
// Import Images
import lingBg2 from "../../images/background/line-bg2.png"


const LatestNewsSection = ({ title, content }) => {

	content = content?.slice(0,3)


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

	return (
		<>

			<section className="section-area section-sp1 blog-area">
				<div className="container">
					<div className="heading-bx text-center">
						<h2 className="title" style={{ fontSize: 80}}>Testimonies</h2>
					</div>
					<div className="tt-slider blog-slide slider-sp0 slick-arrow-none blogCard">
						{
						content ? content.map(item =>
							
							<div className="col-xl-4 col-md-6">
								<div className="blog-card mb-30">
									<div className="post-media">
										<Link to={"/story/" + item.title?.replaceAll(" ", "-") + '/' + item?._id}>
											{
												item?.youtubeVideoLink ?
													<img src={`http://img.youtube.com/vi/${getVideoId(item?.youtubeVideoLink)}/0.jpg`} alt="" />
													: <img src={Dcore.IMAGEURL + '/' + item.image} alt="" />
											}
										</Link>
									</div>
									<div className="post-info">
										<h6 className="post-title max-lines-2"><Link to={"/story/" + item.title?.replaceAll(" ", "-") + '/' + item?._id}>{item.title}</Link></h6>

										<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
											<li className="date">{
												convertData(item?.updatedAt)
											}</li>

											<Link style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }} to={"/story/" + item.title?.replaceAll(" ", "-") + '/' + item?._id} className="btn btn-outline-primary btn-sm">Read More </Link>
										</ul>

									</div>
								</div>
							</div>
							
						) : null
						}
					</div>
					<div className="blog-car" style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
						<Link
							to='/stories'
							className="btn btn-outline-primary btn-sm"
							style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}
						>
							<span>
								See More testimonies
							</span>
						</Link>
					</div>
				</div>
			</section >

		</>
	);

}

export default LatestNewsSection;