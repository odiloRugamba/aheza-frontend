import React, { Component, useState, useEffect } from 'react';
// Import Images
import bg1 from '../../images/background/line-bg1.png';
import image1 from '../../images/services/aheza/aheza-svc-15.jpeg'
import background from "../../images/background/aheza-bg-9-2.jpg"
import background2 from "../../images/background/aheza-bg-9-4.png"



const AboutSection = () => {


	return (
		<>
			<section className="section-area section-sp1 testimonial-wraper" style={{ paddingRight: 20 }}>
				<div className='container'>
					<div className="heading-bx text-center" style={{ margin: 10, marginTop: 0 }}>
						<h1 className="title m-b0 gobalTitle">Mission</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12" style={{ backgroundImage: "url(" + background2 + ")", backgroundSize: 'cover' }}>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12" style={{ marginTop: 10 }}>
						<div className="ttr-post-text missionText" style={{ padding: 10 }}>
						</div>
						<div className="slider-item">
							<div className="testimonial-bx" style={{ backgroundColor: "#565acf", padding: 50, margin: 50, marginTop: 70, marginLeft: 0 }}>
								<div className="testimonial-content">
									<p>
										<b style={{ color: "white" }}>
											Aheza's mission is to listen, understand and support its clients.
										</b>
									</p>
									<p>
										<b style={{ color: "white" }}>
											Our qualified, trained staff are experienced in dealing with the full range of mental health conditions.
											We provide group therapy sessions; one-on-one counseling; and a range of holistic activities to compliment recovery.
										</b>

									</p>
									<p>
										<b style={{ color: "white" }}>
											We also provide career counseling and entrepreneurship training.
										</b>
									</p>
								</div>
								<div className="quote-icon-2">
									<i className="fas fa-quote-left"></i>
								</div>
							</div>
						</div>
					</div>
				</div>


			</section>
		</>
	);
}

export default AboutSection;
