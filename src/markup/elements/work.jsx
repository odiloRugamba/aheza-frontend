import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bg1 from '../../images/background/line-bg1.png';
import ptImg1 from '../../images/shap/circle-orange.png';
import ptImg2 from '../../images/shap/plus-orange.png';
import ptImg3 from '../../images/shap/circle-dots.png';




class aboutSection extends Component {
	render() {
		return (
			<>

				<section className="section-area section-sp5 work-area" style={{ backgroundImage: "url(" + bg1 + ")", backgroundRepeat: " no-repeat", backgroundPosition: "center", backgroundSize: "100%" }}>
					<div className="container-sm">
						<div className="heading-bx text-center">
							{/* <h2 className="title">Welcome.</h2> */}
							<h2 className="title">How it Works?</h2>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-num-bx">1</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Find Information</h5>
										<p>From our vast database.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="work-bx active">
									<div className="work-num-bx">2</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Book an Appointment</h5>
										<p>That is handled with total privacy and anonymity.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-num-bx">3</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Community Healing</h5>
										<p>Join one of our communities.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate1" src={ptImg1} alt="" />
					<img className="pt-img2 animate2" src={ptImg2} alt="" />
					<img className="pt-img3 animate3" src={ptImg3} alt="" />
				</section>

			</>
		);
	}
}

export default aboutSection;