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
import animate1 from "../../images/shap/trangle-orange.png"
import animate2 from "../../images/shap/square-dots-orange.png"
import animateRotate from "../../images/shap/line-circle-blue.png"
import animateWave from "../../images/shap/wave-blue.png"
import testPic1 from "../../images/testimonials/pic1.jpg"
import testPic2 from "../../images/testimonials/pic2.jpg"
import testPic3 from "../../images/testimonials/pic3.jpg"
import testPic4 from "../../images/testimonials/pic4.jpg"
import testPic5 from "../../images/testimonials/pic5.jpg"
import blogGridPic1 from "../../images/blog/grid/pic1.jpg"
import blogGridPic2 from "../../images/blog/grid/pic2.jpg"
import blogGridPic3 from "../../images/blog/grid/pic3.jpg"
import blogGridPic4 from "../../images/blog/grid/pic4.jpg"
import blogGridPic5 from "../../images/blog/grid/pic5.jpg"



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
						<div className="heading-bx text-center" style={{display: "flex", justifyContent: "space-between"}}>
							<h2 className="title" style={{ fontSize: 80 }}>News</h2>
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
						<div className="heading-bx text-center">
							<h2 className="title" style={{ fontSize: 80 }}>News</h2>
							
						</div>
					}


					<div {...settings} className="tt-slider blog-slide slider-sp0 slick-arrow-none blogCard">
						{/* <div className="slider-item"> */}
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
												<h5 style={{fontSize: 15}}>{convertData(item.updatedAt)} </h5>
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
				{/* <img className="pt-img1 animate1" src={animate1} alt="" />
				<img className="pt-img2 animate2" src={animate2} alt="" />
				<img className="pt-img3 animate-rotate" src={animateRotate} alt="" />
				<img className="pt-img4 animate-wave" src={animateWave} alt="" /> */}
			</section >

		</>
	);

}

export default LatestNewsSection;