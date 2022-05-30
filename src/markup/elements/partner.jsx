import React, { Component, useState, useEffect } from 'react';
// Import Images
import bg1 from '../../images/background/line-bg1.png';
import image1 from '../../images/services/aheza/aheza-svc-15.jpeg'
import background from "../../images/background/aheza-bg-9-2.jpg"
import background2 from "../../images/background/aheza-bg-10.jpg"
// import background2 from "../../images/background/aheza-bg-11.jpg"
import { Link } from 'react-router-dom';



const AboutSection = () => {
	return (
		<>
			<section className="section-area section-p5 mission-wraper  row" style={{ paddingRight: 0 }}>
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
											Aheza Healing & Career Center  works with a variety of organizations and businesses
											to raise awareness as well as offer mental health care to its clients.
										</b>
									</p>
									<p>
										<b style={{ color: "white" }}>
											Being a partner means supporting Aheza projects and  programs which are focused on  <span> </span>
											<u><Link style={{ color: '#fff' }} to='/our-services/Counseling-and-Psychotherapy/6244aeae79decbcc46684172'>counseling and psychotherapy</Link></u>, <span> </span>
											<u> <Link style={{ color: '#fff' }} to='/our-services/Palliative-Care-And-Home-Services/6244af7c79decbcc46684186'>palliative care and home services</Link></u>, <span> </span>
											<u>  <Link style={{ color: '#fff' }} to='/our-services/Ergo-Therapy--Occupation-Therapy/6244b01079decbcc4668418a'>ergo therapy / occupation therapy</Link></u>,  <span> </span>
											<u>  <Link style={{ color: '#fff' }} to='/our-services/Ergo-Therapy--Occupation-Therapy/6244b01079decbcc4668418a'>professional training</Link></u>, <span> </span>
											<u>  <Link style={{ color: '#fff' }} to='/our-services/Group-therapy/628b9811cd12fb7c164eb02c'> group therapy</Link></u><span> </span>
											as well as  <span> </span>
											<u>  <Link style={{ color: '#fff' }} to='/our-services/Mental-Health-Awareness/628de72aff2243060367e347'>Mental health awareness</Link></u>.

										</b>

									</p>
									<p>
										<b style={{ color: "white" }}>
											For more information about how your business or organization can become a partner,  <a href='/contact-us'>contact us.</a>
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
					<div className="col-lg-6 col-md-6 col-sm-12 partenerImage" style={{ backgroundImage: "url(" + background2 + ")", backgroundSize: 'cover', }}>
					</div>
				</div>


			</section>
		</>
	);
}

export default AboutSection;
