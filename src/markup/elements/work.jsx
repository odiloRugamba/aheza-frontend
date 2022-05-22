import React, { Component, useState, useEffect } from 'react';
// Import Images
import bg1 from '../../images/background/line-bg1.png';
import doctorImg from '../../images/appointment/mobileee.png';
import leftIcon from '../../images/appointment/left.png';
import rightIcon from '../../images/appointment/right.png';
import applePhone from '../../images/apple.png';

import SwipeableViews from 'react-swipeable-views';
import { useDispatch, useSelector } from "react-redux";
import { getTipsFunc } from "../../store/tips/actions";




const AboutSection = () => {
	const [slideIndex, setSlideIndex] = useState(0)

	const [data, setData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.TipsReducers.data)


	useEffect(() => {
		dispatch(getTipsFunc())
	}, []);
	const privFunc = () => {
		if (slideIndex !== 0) {
			setSlideIndex(slideIndex - 1)
		}
	}

	const nextFunc = () => {
		if (slideIndex < data.length - 1) {
			setSlideIndex(slideIndex + 1)
		}
	}



	useEffect(() => {
		if (res) {
			const exData = [
				{
					tip: "You isolate yourself from family and friends and avoid any contact with them.",
					color: '#565ACF'
				},
				{
					tip: "You find extremely difficult to get out of bed and do everyday task.",
					color: '#f17731'
				},
				{
					tip: "You have loss of interest Things you used to enjoy. ",
					color: '#4cae4c'
				},
				{
					tip: "You have changes in your appetite some people find it hard to eat while others may overeat. ",
					color: '#E36039'
				},
				{
					tip: "You find it hard to take care of your personal hygiene, Eg: showering brushing your teeth changing your clothes, etc.",
					color: '#565ACF'
				},
				{
					tip: "You find it difficult to concentrate on anything and feel a lack of motivation in doing so.",
					color: '#f17731'
				},
				{
					tip: "You feel disconnected from reality and from those around you.",
					color: '#E36039'
				}
			]
			// exData.push({
			// 	tip: res.title,
			// 	color: '#565ACF'
			// })
			// res.tips.forEach(el => {
			// 	exData.push({
			// 		tip: el,
			// 		color: '#f17731'
			// 	})
			// });
			// const all = [res.title, ...res.tips];
			// console.log(res)
			// console.log(res.tips)
			setData(exData)
		}

	}, [res])


	return (
		<>

			<section className="section-area section-p5 service-wraper  outContainer" style={{ backgroundImage: "url(" + bg1 + ")", backgroundRepeat: " no-repeat", backgroundPosition: "center", backgroundSize: "100%" }}>
				<div className="container-sm">
					<div className="rw justify-content-centr">
						<div className="col-lg-8 col-sm-6 mb-30" >
							<div className="work-bx " style={{ backgroundColor: "#1f2278" }}>
								{/* <div className="work-num-bx">1</div> */}
								<div className="work-content" style={{ display: "flex", justifyContent: "space-around" }}>
									<div className="work-num-bx">1</div>
									<div >
										<h4 className="title  mb-10" style={{ fontSize: 25, color: "#fff" }}>Find Information</h4>
										<p style={{ color: "#fff" }}>From our vast database.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-8 col-sm-6 mb-30">
							<div className="work-bx active" style={{ display: "flex", justifyContent: "space-around", alignItems: 'center', backgroundColor: "#1f61dc" }}>
								<div className="work-num-bx">2</div>
								<div className="work-content ml-20" >
									<h5 className="title text-secondary mb-10">Book an Appointment</h5>
									<p>That is handled with total privacy and anonymity.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-8 col-sm-6 mb-30">
							<div className="work-bx" style={{ display: "flex", justifyContent: "space-around", alignItems: 'center' }}>
								<div className="work-num-bx">3</div>
								<div className="work-content">
									<h5 className="title text-secondary mb-10">Community Healing</h5>
									<p>Join one of our communities.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-5 col-md-12 col-sm-5">
					<div className="banner-img" style={{ margin: 30 }}>
						{/* <div style={{ backgroundImage: "url(" + doctorImg + ")", }} className="content">
						</div> */}
						<div className='connentInnerr'>
							<div onClick={() => privFunc()} className='nextPrevIcon prev'>
								<div>
									<img src={leftIcon} />
								</div>
							</div>
							<div className='slideNumber'>
								<div>
									{slideIndex + 1}/{data.length}
								</div>
							</div>
							<SwipeableViews index={slideIndex} enableMouseEvents>
								{
									data?.length > 0 ?
										data.map(el => <div style={{ background: el.color }} className='connentInner'>
											<div className='inneData'>
												{el.tip}
											</div>
										</div>
										) : null
								}
							</SwipeableViews>
							<div
								className='daytitsTitle'

							>
								<span
									style={{
										backgroundColor: "#565acf",
										color: "white",
										padding: 10,
										paddingLeft: 20,
										paddingRight: 20,
										borderRadius: 30
									}}
								>
									Tips of the day
								</span>
							</div>
							<div onClick={() => nextFunc()} className='nextPrevIcon next'>
								<div>
									<img src={rightIcon} />
								</div>
							</div>
						</div>
						<img src={applePhone} alt="" className='applePhone' />
					</div>
				</div>
				<div>
				</div>
			</section>
		</>
	);
}

export default AboutSection;
