import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import aboutThumb1 from '../../images/about/pic-1.jpg';
import aboutThumb2 from '../../images/about/pic-2.jpg';
import aboutThumb3 from '../../images/about/pic-3.jpg';
import ptImg1 from '../../images/shap/wave-orange.png';
import ptImg2 from '../../images/shap/circle-small-blue.png';
import ptImg4 from '../../images/shap/square-dots-orange.png';
import ptImg5 from '../../images/shap/square-blue.png';


class aboutSection extends Component {
	render() {
		return (
			<>
				<section className="section-sp1 about-area">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-30">
								<div className="about-thumb-area">
									<ul>
										<li><img className="about-thumb1" src={aboutThumb1} alt="" /></li>
										<li><img className="about-thumb2" src={aboutThumb2} alt="" /></li>
										<li><img className="about-thumb3" src={aboutThumb3} alt="" /></li>
										<li><div className="exp-bx">7<span>Year Experience</span></div></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="heading-bx">
									<p>
										Aheza Healing & Careers Center opened in 2019 and is managed by <a target="_blank" href="https://twitter.com/GAERGRwanda">GAERG</a>,
										an organisation founded by graduate student survivors of the 1994
										<a  href='https://gaerg.org.rw/' target="_blank"> Genocide Against the Tutsi.</a>
									</p>
									<p>
										The building was originally donated by <a href='http://reg.rw/'>Rwanda’s Energy Utility Corporation</a> in 2016,
										to be used as a care home for elderly widowed survivors. In 2018, First Lady Janette Kagame
										helped to move those widows into sheltered accommodation in partnership with <a href='https://avega.org.rw/'>AVEGA-Agahozo. </a>
										The Energy Utility Corporation continue to sponsor the building whilst <a href='https://gaerg.org.rw/'>GAERG</a> develops and
										facilitates the health and career services.
									</p>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate-wave" src={ptImg1} alt="" />
					<img className="pt-img2 animate2" src={ptImg2} alt="" />
					<img className="pt-img3 animate-rotate" src={ptImg5} alt="" />
					<img className="pt-img4 animate-wave" src={ptImg4} alt="" />
					<img className="pt-img5 animate2" src={ptImg5} alt="" />
				</section>

			</>
		);
	}
}

export default aboutSection;