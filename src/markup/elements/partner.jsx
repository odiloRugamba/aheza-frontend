import React from 'react';
// Import Images
import background2 from "../../images/background/aheza-bg-10.jpeg"
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';



const AboutSection = () => {
	return (
		<>
			<section className="section-area section-sp1 testimonial-wraper" style={{ paddingRight: 0 }}>
				<div className="container g-header">
					<div className="heading-bx text-center g-space">
						<h1 className="title m-b0 g-title">
						    	<FormattedMessage id="Partnerships" defaultMessage="Partnerships" />
						</h1>
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
										<FormattedMessage id="PartnershipsParaOne" defaultMessage="PartnershipsParaOne" />
										</b>
									</p>
									<p>
										<b style={{ color: "white" }}>
										<FormattedMessage id="PartnershipsParaTwo" defaultMessage="PartnershipsParaTwo" />
										<span> </span>
											<u><Link style={{ color: '#fff' }} to='/our-services/Counseling-and-Psychotherapy/6244aeae79decbcc46684172'>
												<FormattedMessage id="counseling" defaultMessage="counseling" />
												</Link></u>, <span> </span>
											<u> <Link style={{ color: '#fff' }} to='/our-services/Palliative-Care-And-Home-Services/6244af7c79decbcc46684186'>
												<FormattedMessage id="palliative" defaultMessage="palliative" />
												</Link></u>, <span> </span>
											<u>  <Link style={{ color: '#fff' }} to='/our-services/Ergo-Therapy--Occupation-Therapy/6244b01079decbcc4668418a'>
												<FormattedMessage id="ergo" defaultMessage="ergo" />
												</Link></u>,  <span> </span>
											<u>  <Link style={{ color: '#fff' }} to='/our-services/Ergo-Therapy--Occupation-Therapy/6244b01079decbcc4668418a'>
												<FormattedMessage id="professional" defaultMessage="professional" />
												</Link></u>, <span> </span>
											<u>  <Link style={{ color: '#fff' }} to='/our-services/Group-therapy/628b9811cd12fb7c164eb02c'>
												<FormattedMessage id="community" defaultMessage="community" />
												</Link></u><span> </span>
											<FormattedMessage id="asWellAs" defaultMessage="asWellAs" />
											 <span> </span>
											<u>  <Link style={{ color: '#fff' }} to='/our-services/Mental-Health-Awareness/628de72aff2243060367e347'>
											<FormattedMessage id="Mental" defaultMessage="Mental" />
												</Link></u>.
										</b>
									</p>
									<p>
										<b style={{ color: "white" }}>
										<FormattedMessage id="ForMore" defaultMessage="ForMore" />
											 <a href='/contact-us'>
											 <FormattedMessage id="contactUs" defaultMessage="contactUs" />
												.</a>
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
