import React, { Component, useState, useEffect } from 'react';
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
					tip: "Signs that your mental health may be declining",
					color: '#565acf',
					title: true
				}, {
					tip: "You isolate yourself from family and friends.",
					color: '#565acf'
				},
				{
					tip: "You find it extremely difficult to get out of bed and complete everyday tasks.",
					color: '#f17731'
				},
				{
					tip: "You have lost interest in things you used to enjoy. ",
					color: '#565acf'
				},
				{
					tip: "You have changes in your appetite. Some people find it hard to eat while others may overeat. ",
					color: '#f17731'
				},
				{
					tip: "You find it hard to take care of your personal hygiene.",
					color: '#565acf'
				},
				{
					tip: "You find it difficult to concentrate on anything and feel a lack of motivation in doing so.",
					color: '#f17731'
				},
				{
					tip: "You feel disconnected from reality and from those around you.",
					color: '#565acf'
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

			<section className="section-area section-p5 tips-wraper  row" style={{marginRight: 0}}>
				<div className="col-lg-7 col-md-6 col-sm-12" style={{ marginTop: 30 }}>
					<div className="col-lg-8 col-sm-12 mb-30" >
						<a href='/our-services'>
							<div className="work-bx " style={{ backgroundColor: "#565acf" }}>
								<div className="work-content" style={{ display: "flex", alignItems: 'center' }}>
									<div className="work-num-bx" >1</div>
									<div >
										<br />
										<h4 className="title  mb-10" style={{ fontSize: 25, color: "#fff", paddingLeft: 10, paddingBottom: 16 }}>Find Information</h4>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div className="col-lg-8 col-sm-12 mb-30">
						<a href='/appointment-assesement'>
							<div className="work-bx " style={{ display: "flex", backgroundColor: "#565acf", alignItems: 'center' }}>
								<div className="work-num-bx">2</div>
								<div className="work-content" >
									<br />
									<h5 className="mb-10" style={{ fontSize: 25, color: "#fff", paddingLeft: 10, paddingBottom: 16 }}>Book Appointment</h5>
								</div>
							</div>
						</a>
					</div>
					<div className="col-lg-8 col-sm-12 mb-30">

						<a href='/our-services/Group-therapy/628b9811cd12fb7c164eb02c'>
							<div className="work-bx" style={{ display: "flex", backgroundColor: "#565acf", alignItems: 'center' }}>
								<div className="work-num-bx">3</div>
								<div className="work-content">
									<br />
									<h5 className="mb-10" style={{ fontSize: 25, color: "white", paddingLeft: 10, paddingBottom: 16 }}>Connect with a Community</h5>
								</div>
							</div>
						</a>
					</div>

				</div>
				<div className="col-lg-5 col-md-6 col-sm-12 workPhone" style={{ padding: 0 }}>
					<div className="banner-img" style={{ marginTop: 50, marginBottom: 30, position: "relative" }}>

						<div className='connentInnerr'>
							<div onClick={() => privFunc()} className='nextPrevIcon prev'>
								<div>
									<img src={leftIcon} />
								</div>
							</div>

							<SwipeableViews index={slideIndex} enableMouseEvents>
								{
									data?.length > 0 ?
										data.map(el => <div style={{ background: el.color }} className='connentInner'>

											<div className='inneData' style={{ padding: 50 }}>
												{
													el.title ?
														<div style={{ fontSize: 25 }}><>{el.tip}</></div> :
														<span>{el.tip}</span>
												}
											</div>
										</div>
										) : null
								}
							</SwipeableViews>
							<div onClick={() => nextFunc()} className='nextPrevIcon next'>
								<div>
									<img src={rightIcon} />
								</div>
							</div>
						</div>
						<img src={applePhone} alt="" className='applePhone'  style={{maxWidth: "150%"}}/>
					</div>
				</div>
				<div>
				</div>
			</section>
		</>
	);
}

export default AboutSection;
