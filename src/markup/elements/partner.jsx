import React, { Component, useState, useEffect } from 'react';
// Import Images
import bg1 from '../../images/background/line-bg1.png';
import image1 from '../../images/services/aheza/aheza-svc-15.jpeg'
import background from "../../images/background/aheza-bg-9-2.jpg"
import background2 from "../../images/background/aheza-bg-9-4.png"



const AboutSection = () => {


	return (
		<>
			<section className="section-area section-p5 mission-wraper  row" style={{ paddingRight: 20 }}>
				<div className="heading-bx text-center" style={{ margin: 10, marginTop: 70 }}>
					<h1 className="title m-b0" style={{ fontSize: 80 }}>Partnerships</h1>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12" style={{ marginTop: 10 }}>
						<div className="ttr-post-text missionText" style={{ padding: 10 }}>
						</div>
						<div className="slider-item">
							<div className="testimonial-bx" style={{ backgroundColor: "#F17731", padding: 50, margin: 50, marginTop: 70, marginLeft: 0 }}>
								<div className="testimonial-content">
									<p>
										<b style={{ color: "white" }}>
											Aheza Healing and Career Center partners with a variety of organizations and business
											to raise awareness and offer adequate mental health care.
										</b>
									</p>
									<p>
										<b style={{ color: "white" }}>
											Being a partner means supporting programs that are dedicated to treat issues related to child abuse and neglect, addiction treatment and recovery.

										</b>

									</p>
									<p>
										<b style={{ color: "white" }}>
											for more information about how your business or organization can become a partners  <a href='/contact-us'>contact us.</a>
										</b>
									</p>
									{/* <p>
										<b style={{color: "white"}}>
										Aheza's mission is to listen, understand and support.
										</b>
									</p> */}
								</div>
								<div className="quote-icon">
									<i className="fas fa-quote-left"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12" style={{ backgroundImage: "url(" + background2 + ")", backgroundSize: 'cover' }}>
					</div>
				</div>


			</section>
		</>
	);
}

export default AboutSection;
