import React, { Component, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../../store/links/actions";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import MainBannerSection from "../elements/main-banner";
import VisionSection from "../elements/vision";
import AboutSection from "../elements/about";
import WorkSection from "../elements/work";
import AppointmentSection from "../elements/appointment";
import TestimonialSection from "../elements/testimonial";
import ServicesSliderSection from "../elements/services-slider";
import MissionSection from "../elements/mission-section";
import LatestNewsSection from "../elements/latest-news-slider";
import SocialMediaSection from '../elements/social-media';

const Index = () => {
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.linksReducers.data)
	useEffect(() => {
		dispatch(getLinks())
	}, []);
	useEffect(() => {
		// const da = []
		// res.forEach(el => {
		// 	da.push(el)
		// });
		setData(res)
	}, [res])
	return (
		<>

			<Header />

			<MainBannerSection />

			{/* <AboutSection /> */}


			<WorkSection />

			{/* <hr/> */}

			<VisionSection />

			<hr style={{ color: "white" }} />

			{/* <AppointmentSection /> */}

			{/* <ServicesSliderSection /> */}

			<MissionSection />

			{/* <TestimonialSection /> */}

			<LatestNewsSection content={data} title="Aheza links News" />

			<SocialMediaSection />
			<Footer />

		</>
	);
}

export default Index;
