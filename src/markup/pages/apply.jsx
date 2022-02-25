import React, { Component } from 'react';

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
import ApplyForm from '../elements/apply-form';

class Index extends Component {

	render() {
		return (
			<>

				<Header />

				<div className="page-content bg-white" style={{marginTop: 100}}>

					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-8 col-xl-10 mb-30 mb-md-50">
									

									<div className="clear" id="comment-list">
										<div className="comments-area" id="comments">

											{/* <div className="clearfix"> */}

												{/* <CommentList /> */}

												<ApplyForm />

											{/* </div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

				</div>

				<Footer />

			</>
		);
	}
}

export default Index;