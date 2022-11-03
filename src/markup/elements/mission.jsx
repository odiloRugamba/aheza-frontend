import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import plusOrange from "../../images/shap/plus-orange.png"
import squareBlue from "../../images/shap/square-blue.png"
import circleDots from "../../images/shap/circle-dots.png"
import circleOrange2 from "../../images/shap/circle-orange-2.png"



class MissionSection extends Component {

	render() {

		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
		};

		return (
			<>


				<section className="section-area section-sp3 testimonial-wraper">
					<div className="container">
						<div className="heading-bx text-center">
							<h2 className="title m-b0">Mission</h2>
						</div>
						<div className="row align-items-center">

							<div className="blog-card blog-single" style={{ padding: 20 }}>
								<div className="info-bx">
									<div className="ttr-post-text">
										<p>
											Here at Aheza, we understand that people were affected by the 1994 Genocide in many ways.
											Some suffer severe post-traumatic stress as a result of the events they witnessed,
											many are struggling with grief at the loss of friends and family, some turn to alcohol
											and drugs to cope with that loss.
										</p>
										<p>
											Even those who have successful careers and families of their own might experience depression
											or unwanted thoughts from time to time.
										</p>
										<p>
											Aheza is a safe space for anyone who needs a little support. Our qualified, trained staff are experienced
											in dealing with the full range of mental health conditions. We provide group therapy sessions;
											one-on-one counseling;  and a range of holistic activities to compliment your recovery.
										</p>
										<p>
											We also provide career counseling and entrepreneur training. Many clients find it difficult to secure a job and
											remain in work due to mental and physical health issues. We assist clients who are ready to work towards the
											future, helping them to build skills and find a fulfilling career. Our job is to listen, understand and support.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <img className="pt-img1 animate1" src={plusOrange} alt="" />
					<img className="pt-img2 animate2" src={squareBlue} alt="" />
					<img className="pt-img3 animate3" src={circleDots} alt="" />
					<img className="pt-img4 animate4" src={circleOrange2} alt="" /> */}
				</section>

			</>
		);
	}
}

export default MissionSection;