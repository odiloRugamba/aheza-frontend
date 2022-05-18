import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images


import aboutThumb1 from '../../images/about/pic-1.jpg';
import aboutThumb2 from '../../images/about/pic-2.jpg';
import aboutThumb3 from '../../images/about/pic-3.jpg';



class PartnersSection extends Component {
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
				<section className="section-sp1 about-area">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-30">
								<div className="heading-bx">
									<h1 className="title">Partnerships</h1>
									<div className="ttr-post-text">
										<p>
											Aheza Healing and Career Center partners with a variety of organizations and businesses throughout
											our community to raise awareness. and offer adequate mental health care.
											Being a partner means supporting
											programs that are dedicated to treat issues related to  child abuse and
											neglect, addiction treatment and recovery.
										</p>
										<p>
											For more information about how your business or organization can become a partner, <a href='/contact-us'>contact us.</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="about-thumb-area">
									<ul>
										<li><img className="about-thumb1" src={aboutThumb1} alt="" /></li>
										<li><img className="about-thumb2" src={aboutThumb2} alt="" /></li>
										<li><img className="about-thumb3" src={aboutThumb3} alt="" /></li>
										{/* <li><div className="exp-bx">7<span>Year Experience</span></div></li> */}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default PartnersSection;