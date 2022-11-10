import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../../store/links/actions";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import { changeLang } from "../../store/lang/actions";
import { useParams } from 'react-router-dom';
// Elements
import MainBannerSection from "../elements/main-banner";
import VisionSection from "../elements/vision";
import WorkSection from "../elements/work";
import PartnerSection from "../elements/partner";
import MissionSection from "../elements/mission-section";
import LatestNewsSection from "../elements/latest-news-slider";
import SocialMediaSection from '../elements/social-media';
import { Link, useHistory } from 'react-router-dom';





const Index = () => {
	const [data, setData] = useState([])
	const {lang}= useParams()
	const dispatch = useDispatch()
	const res = useSelector(state => state.linksReducers.data)
	const history= useHistory()

	useEffect(() => {
		console.log('lang', lang)
		dispatch(getLinks())
		dispatch(changeLang(lang == 'en' ? lang : !lang? 'en':"iny"))
		if(!lang){
			history.push('/en')
		}
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
			<WorkSection />
			<VisionSection />
			<MissionSection />
			<PartnerSection />
			<LatestNewsSection content={data} title="Aheza links News" isHomePage={true} />
			<SocialMediaSection />
			<Footer />
		</>
	);
}

export default Index;
