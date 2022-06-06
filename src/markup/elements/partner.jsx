import React from 'react';
// Import Images
import background2 from "../../images/background/aheza-bg-10.jpg"
import { Link } from 'react-router-dom';



const AboutSection = () => {
	return (
		<>
			<section className="section-area section-sp1 testimonial-wraper" style={{ paddingRight: 0 }}>
				<div className="container g-header">
					<div className="heading-bx text-center g-space">
						<h1 className="title m-b0 g-title">Partnerships</h1>
					</div>
				</div>
				<div className="row" style={{ marginRight: 0 }}>
					<div className="col-lg-6 col-md-6 col-sm-12" style={{ marginTop: 10 }}>
						<div className="ttr-post-text missionText" style={{ padding: 10 }}>
						</div>
						<div className="slider-item">
							<div className="testimonial-bx partnerships-box">
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
											<u>  <Link style={{ color: '#fff' }} to='/our-services/Ergo-Therapy--Occupation-Therapy/6244b01079decbcc4668418a'>ergo therapy / occupational therapy</Link></u>,  <span> </span>
											<u>  <Link style={{ color: '#fff' }} to='/our-services/Ergo-Therapy--Occupation-Therapy/6244b01079decbcc4668418a'>professional training</Link></u>, <span> </span>
											<u>  <Link style={{ color: '#fff' }} to='/our-services/Group-therapy/628b9811cd12fb7c164eb02c'>community healing</Link></u><span> </span>
											as well as  <span> </span>
											<u>  <Link style={{ color: '#fff' }} to='/our-services/Mental-Health-Awareness/628de72aff2243060367e347'>Mental health awareness</Link></u>.

										</b>

									</p>
									<p>
										<b style={{ color: "white" }}>
											For more information about how your business or organization can become a partner,  <a href='/contact-us'>contact us.</a>
										</b>
									</p>
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
