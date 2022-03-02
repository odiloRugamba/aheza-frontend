import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AboutSection from "../elements/about";
import LatestNewsSection from "../elements/latest-news-slider";
import FeatureSection3 from "../elements/feature-section3";
import TeamSection from "../elements/team";
import TestimonialSection from "../elements/testimonial";
import VisionSection from "../elements/vision";
import MissionSection from '../elements/mission';
import PartnersSection from '../elements/partners';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

class AboutUs extends Component {

	render() {
		return (
			<>
				<Header />
				<div className="page-content bg-white" style={{paddingTop: 60}}>

					<div className="banner-wraper">
						<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 250 }}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h2>About Us</h2>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt="" />
							<img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
						</div>
					</div>

					<AboutSection />
					
					<hr/>

					<VisionSection/>

					<hr/>

					<MissionSection/>
					
					<hr style={{color: "rgba(86, 90, 207, 0.5)", height: 20}}/>

					
					<PartnersSection/>
					
					{/* <FeatureSection3 />

					<TeamSection />

					<TestimonialSection />

					<LatestNewsSection /> */}

				</div>

				<Footer />

			</>
		);
	}
}

export default AboutUs;
