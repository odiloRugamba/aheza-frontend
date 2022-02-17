import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import Logo from '../../images/logo.png';
import footerBg from '../../images/background/footer.jpg';
import ptImg1 from '../../images/shap/wave-blue.png';
import ptImg2 from '../../images/shap/circle-dots.png';
import ptImg3 from '../../images/shap/plus-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';

// Social Images
import facebook from '../../images/social/facebook.png';
import twitter from '../../images/social/twitter.png';
import instagram from '../../images/social/instagram.png';
import linkedin from '../../images/social/linkedin.png';

class aboutSection extends Component {
	render() {
		return (
			<>

				<footer className="footer" style={{ backgroundImage: "url(" + footerBg + ")" }}>
					<div className="footer-top">
						<div className="containerr">
							<div className="footer-row">
								<div className="col-xl-2 col-lg-3 col-md-6">
									<div className="widget widget_info">
										<h3 className="footer-title">Aheza</h3>
										<div className="ft-contact">
											<p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
											<div className="contact-bx">
												<div className="icon"><i className="fas fa-phone-alt"></i></div>
												<div className="contact-number">
													<span>Contact Us</span>
													<h4 className="number">+01 123 456 7890</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-2 col-lg-3 col-6 services">
									<div className="widget footer_widget">
										<h3 className="footer-title">Our Service</h3>
										<ul>
											<li><Link to="/service-detail"><span>Dental Care</span></Link></li>
											<li><Link to="/service-detail"><span>Cardiac Clinic</span></Link></li>
											<li><Link to="/service-detail"><span>Massege Therapy</span></Link></li>
											<li><Link to="/service-detail"><span>Cardiology</span></Link></li>
											<li><Link to="/service-detail"><span>Precise Diagnosis</span></Link></li>
											<li><Link to="/service-detail"><span>Abmbulance Services</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6 privacy">
									<div className="widget widget_info">
										<h3 className="footer-title">Privacy</h3>
										<div className="ft-contact">
											<p>
												Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.
												Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.
											</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6 terms">
									<div className="widget widget_info">
										<h3 className="footer-title">Terms and Conditions</h3>
										<div className="ft-contact">
											<p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.
												Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
											{/* <div className="contact-bx">
												<div className="icon"><i className="fas fa-phone-alt"></i></div>
												<div className="contact-number">
													<span>Contact Us</span>
													<h4 className="number">+01 123 456 7890</h4>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate-wave" src={ptImg1} alt="" />
					<img className="pt-img2 animate1" src={ptImg2} alt="" />
					<img className="pt-img3 animate-rotate" src={ptImg3} alt="" />
					<img className="pt-img4 animate-wave" src={ptImg4} alt="" />
				</footer>

			</>
		);
	}
}

export default aboutSection;