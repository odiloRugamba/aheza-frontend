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

	return (
		<>

			<section className="section-area section- blog-area" style={{paddingTop: 20}}>
				<div className="container">
					<div className="heading-bx" style={{display: "flex", justifyContent: "space-between"}}>
						<h2 className="title title-80" >Publications
						
						</h2>
						
						<div>
							<br></br>
							<Link
								to='/research-findings'
								className="btn btn-outline-primary btn-sm big-screen-only "
								style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}
							>
									See More Publications
							</Link>
						</div>
					</div> 
					<div className="tt-slider blog-slide slider-sp0 slick-arrow-none blogCard">
						{
						content ? content.map(item =>
							<div className="col-xl-4 col-md-6">
								<div className="blog-card mb-30">
									<div className="post-info">
										<p className="post-title max-lines-3" style={{ fontSize: 20 }}><a href={"/research-finding/" + item.title?.replaceAll(" ", "-") + '/' + item._id} >{item.title}</a></p>
										<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
											<li className="date">
												{convertData(item?.updatedAt)}</li>
											<Link style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }} to={"/research-finding/" + item.title?.replaceAll(" ", "-") + '/' + item._id} className="btn btn-outline-primary btn-sm">Read More </Link>
											
										</ul>
									</div>
								</div>
							</div>
						) : null
						}
					</div>
					<div className="mobile-only" style={{paddingLeft: "10%"}}>

							<Link
								to='/research-findings'
								className="btn btn-outline-primary btn-sm"
								style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}
							>
									See More Publications
							</Link>
					</div> 
				</div>
			</section >

		</>
	);

}

export default LatestNewsSection;