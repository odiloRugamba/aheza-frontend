import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { useDispatch, useSelector } from "react-redux";
import { getTipsFunc } from "../../store/tips/actions";
// Import Images
// import bg1 from '../../images/main-banner/bg1.jpg';
import bg1 from '../../images/main-banner/home-image.jpeg';


// import doctorImg from '../../images/main-banner/doctor.png';
import doctorImg from '../../images/appointment/mobileee.png';
import ptImg1 from '../../images/shap/trangle-orange.png';
import ptImg2 from '../../images/shap/square-blue.png';
import ptImg3 from '../../images/shap/chicle-blue-2.png';
import ptImg4 from '../../images/shap/plus-orange.png';
import ptImg5 from '../../images/shap/wave-orange.png';
import leftIcon from '../../images/appointment/left.png';
import rightIcon from '../../images/appointment/right.png';


 

const AboutSection = () => {
	const [slideIndex, setSlideIndex] = useState(0)

	const [data, setData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.TipsReducers.data)

	const privFunc = () => {
		if (slideIndex !== 0) {
			setSlideIndex(slideIndex - 1)
		}
	}

	useEffect(() => {
		if (res) {
			const all = [res.title, ...res.tips];
			setData(all)
		}

	}, [res])

	// const shuffleArr = (arr) => {
	// 	const newArr = arr.slice()
	// 	for (let i = newArr.length - 1; i > 0; i--) {
	// 		const rand = Math.floor(Math.random() * (i + 1));
	// 		[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
	// 	}
	// 	return newArr
	// }

	useEffect(() => {
		dispatch(getTipsFunc())
	}, []);

	const nextFunc = () => {
		if (slideIndex < data.length - 1) {
			setSlideIndex(slideIndex + 1)
		}
	}


	return (
		<>
			<div className="main-banner" style={{ backgroundImage: "url(" + bg1 + ")"}}>
				<div style={{
					backgroundColor: "rgba(255,255,255,0.3)",
					height: "100%", 
					paddingTop: 20,
					paddingBottom: 30,
					// paddingTop: 150,
					// zIndex: -3
				}}>
					<div className="container inner-content">
						<div className="row align-items-center">
							<div className="col-lg-7 col-md-12 col-sm-12">
								<h6 className="title-ext text-primary"> Get yourself help today</h6>
								<h2>You are worth the burden and the dedication of time that is required to help you recover</h2>
								<Link to="/appointment-assesement" className="btn btn-secondary btn-lg shadow">Book appointment</Link>
							</div>

							<div className="col-lg-5 col-md-12 col-sm-5">
								<div className="banner-img" style={{ margin: 30}}>
									<div style={{ backgroundImage: "url(" + doctorImg + ")", }} className="content">
									</div>
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
													data.map(el => <div style={{ background: "#EDEDF5" }} className='connentInner'>
														<div className='inneData'>
															{el}
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
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img2 animate2" src={ptImg2} alt="" />
					<img className="pt-img3 animate3" src={ptImg3} alt="" />
					<img className="pt-img4 animate4" src={ptImg4} alt="" />
				</div>
			</div>
		</>
	);
}

export default AboutSection;