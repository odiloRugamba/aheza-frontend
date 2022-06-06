import React, { Component } from 'react';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AboutSection from "../elements/about";
import VisionSection from "../elements/vision";
import MissionSection from '../elements/mission';
import PartnersSection from '../elements/partners';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import plusBlue from "../../images/shap/plus-blue.png";




class AboutUs extends Component {
	render() {
		return (
			<>
				<Header />
				<div className="page-content bg-white" style={{ marginTop: 100 }}>
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
					<hr />
					<VisionSection />
					<hr />
					<MissionSection />
					<hr style={{ color: "rgba(86, 90, 207, 0.5)", height: 20 }} />
					<PartnersSection />
				</div>
				<Footer />
			</>
		);
	}
}

export default AboutUs;
