import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Dcore } from "../../api/index";
import leftIcon from '../../images/appointment/left.png';
import rightIcon from '../../images/appointment/right.png';





const LatestNewsSection = ({ title, content, isHomePage }) => {

	content = content?.slice(0, 3)

	const settings = {
		dots: true,
		infinite: false,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1191,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	};
	const openNewWindow = (link) => {
		window.open(link)
	}
	const routeChange = (link) => {
		const rouLink = link.split('/')[2]
		const httpLink = link.split('/')[0]
		window.open(`${httpLink}//${rouLink}`, '_blank')
	}
	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div style={{ ...style, cursor: 'pointer', zIndex: 999999999, position: 'absolute', top: 200, left: -50 }} onClick={() => onClick()} className='className'>
				<div>
					<img style={{ width: 30 }} src={leftIcon} />
				</div>
			</div>
		);
	}
	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div style={{ ...style, zIndex: 999999999, cursor: 'pointer', position: 'absolute', top: 200, right: -50 }} onClick={() => onClick()} className='className'>
				<div>
					<img style={{ width: 30 }} src={rightIcon} />
				</div>
			</div>
		);
	}

	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da} ${mo} ${ye}`
	}

	return (
		<>

			<section className="section-area section-sp1 blog-area">
				<div className="container">

					{!isHomePage ?
						<div className="heading-bx text-center" style={{ display: "flex", justifyContent: "space-between" }}>
							<h2 className="title title-80">News</h2>
							{
								!isHomePage &&
								<div>
									<br></br>
									<Link
										to='/links'
										className="btn btn-outline-primary btn-sm"
										style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}
									>
										See More News
									</Link>
								</div>
							}
						</div>
						:
						<div className='container g-header'>
							<div className="heading-bx text-center g-space e-follow">
								<h1 className="title m-b0 g-title">News</h1>
							</div>
						</div>
					}


					<div {...settings} className="tt-slider blog-slide slider-sp0 slick-arrow-none blogCard">
						{content?.map((item) => (
							<div className="col-xl-4 col-md-6">
								<div className="blog-card mb-30">
									<div className="post-media" style={{ overflow: "hidden", marginRight: 20, height: 180 }}>
										<a onClick={() => openNewWindow(item.link)}>
											<img src={Dcore.IMAGEURL + '/' + item.image} alt="" style={{ width: "100%" }} />
										</a>
									</div>
									<div className="post-info" >
										<h6 className="post-title max-lines-2" style={{ "-webkit-line-clamp": 3 }}>
											<a onClick={() => openNewWindow(item.link)} style={{ fontFamily: 700 }}>{item?.title}</a>
										</h6>
										<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
											<li onClick={() => { routeChange(item.link) }} className="date" style={{ cursor: 'pointer' }}>
												{item.publisherName} <br></br>
												<h5 style={{ fontSize: 15 }}>{convertData(item.updatedAt)} </h5>
											</li>
											<a onClick={() => openNewWindow(item.link)} className="btn btn-outline-primary btn-sm" style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}>Read More</a>
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
					{
						isHomePage &&
						<div className="blog-car" style={{ display: 'flex', justifyContent: 'center' }}>
							<Link
								to='links'
								className="btn btn-outline-primary btn-sm"
								style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}
							>
								<span>
									See More News
								</span>
							</Link>
						</div>
					}
				</div>
			</section >

		</>
	);

}

export default LatestNewsSection;