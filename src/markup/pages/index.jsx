import React, { Component, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getStorys } from "../../store/story/actions";
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
import LatestNewsSection from "../elements/latest-news-slider";
import SocialMediaSection from '../elements/social-media';

const Index = () => {
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.StorysReducers.data)
	useEffect(() => {
		dispatch(getStorys())
	}, []);
	useEffect(() => {
		setData(res)
		// console.log(res)
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

			<ServicesSliderSection />

			{/* <TestimonialSection /> */}

			<LatestNewsSection data={data} title="Aheza News" />

			<SocialMediaSection />
			<Footer />

		</>
	);
}

export default Index;