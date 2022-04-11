import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { useDispatch, useSelector } from "react-redux";
import { getTipsFunc } from "../../store/tips/actions";
// Import Images
import bg1 from '../../images/main-banner/bg1.jpg';
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
		if (res?.length) {
			const all = [res[0].title, ...res[0].tips];
			setData(all)
		}

	}, [res])

	useEffect(() => {
		dispatch(getTipsFunc())
	}, []);

	const nextFunc = () => {
		if (slideIndex < data.length - 1) {
			setSlideIndex(slideIndex + 1)
		}
	}
	// const data = [
	// 	'SIGNS THAT YOUR MENTAL HEALTH MAY BE DECLINING',
	// 	'You isolate yourself from family and friends and avoid any contact with them ',
	// 	'You find extremely difficult to get out of bed and do everyday task ',
	// 	'You have loss of interest Things you used to enjoy',
	// 	'You have changes in your appetite some people find it hard to eat while others may overeat ',
	// 	'You find it hard to take care of your personal hygiene, Eg: showering brushing your teeth changing your clothes, etc',
	// 	'You find it difficult to concentrate on anything and feel a lack of motivation in doing so  ',
	// 	'You feel disconnected from reality and from those around you',
	// ]

	return (
		<>
			<div className="main-banner" style={{ backgroundImage: "url(" + bg1 + ")", paddingTop: 150 }}>
				<div className="container inner-content">
					<div className="row align-items-center">
						<div className="col-lg-7 col-md-6 col-sm-7">
							<h6 className="title-ext text-primary"> Get yourself help today</h6>
							<h2>You are worth the burden and the dedication of time that is required to help you recover</h2>
							{/* <h1>We Provide healing and career services online and on-site</h1> */}
							<Link to="/self-assesement" className="btn btn-secondary btn-lg shadow">Book appointment</Link>
						</div>

						<div className="col-lg-5 col-md-6 col-sm-5">
							<div className="banner-img">
								<div style={{ backgroundImage: "url(" + doctorImg + ")", }} class="content">
								</div>
								<div className='connentInnerr'>
									<div onClick={() => privFunc()} className='nextPrevIcon prev'>
										<div>
											<img src={leftIcon} />
										</div>
									</div>
									<div className='slideNumber'>
										{slideIndex + 1}/{data.length}
									</div>
									<SwipeableViews index={slideIndex} enableMouseEvents>
										{
											data?.length > 0 ?
												data.map(el => <div style={{ background: "#EDEDF5" }} className='connentInner'>
													<div className='inneData'>
														{/* {console.log('hello')} */}
														{el}
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
							</div>
						</div>
					</div>
				</div>
				<img className="pt-img1 animate1" src={ptImg1} alt="" />
				<img className="pt-img2 animate2" src={ptImg2} alt="" />
				<img className="pt-img3 animate3" src={ptImg3} alt="" />
				<img className="pt-img4 animate4" src={ptImg4} alt="" />
				<img className="pt-img5 animate-wave" src={ptImg5} alt="" />
			</div>
		</>
	);
}

export default AboutSection;