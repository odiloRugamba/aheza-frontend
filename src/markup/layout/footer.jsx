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
					<div className="footer-top" style={{backgroundColor: "rgba(255,255,255,0.7)"}}>
						<div className="containerr">
							<div className="footer-row row" style={{paddingLeft: 40}}>
								<div className="col-xl-2 col-lg-3 col-md-6">
									<div className="widget widget_info">
										<h3 className="footer-title">Our vision</h3>
										<div className="ft-contact">
											<p>Our vision is of a world where Rwanda’s genocide survivors receive the mental health care they need, and go on to live productive, fulfilling lives free from trauma.</p>
											<div className="contact-bx">
												{/* <div className="icon"><i className="fas fa-phone-alt"></i></div> */}
												{/* <div className="contact-number">
													<span>Contact Us</span>
													<h6>(+250) 788 315 809</h6>
												</div> */}
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6 ">
									<div className="widget footer_widget">
										<h3 className="footer-title">Our Service</h3>
										<ul>
											<li><Link to="/service-details"><span>Career and life coaching</span></Link></li>
											<li><Link to="/service-details"><span>Psychiatric consultation</span></Link></li>
											<li><Link to="/service-details"><span>Ergo therapy/occupation service</span></Link></li>
											<li><Link to="/service-details"><span>counselling and Psychotherapy</span></Link></li>
											<li><Link to="/service-details"><span>Palliative care and home services</span></Link></li>
											{/* <li><Link to="/service-details"><span>Abmbulance Services</span></Link></li> */}
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_info">
										<h3 className="footer-title">Privacy</h3>
										<div className="ft-contact">
											<p>
												We assure total privacy for everyone who use our services. we use user's code 
												to seal your identity from the community and staff where necessary
											</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_info">
										<h3 className="footer-title">Terms and Conditions</h3>
										<div className="ft-contact">
											<p>
												By using this website you acknowledge that you have read and accepted our terms and conditions. 
												<a href=""> Read Terms and Conditions here</a>
											</p>
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
					{/* <img className="pt-img1 animate-wave" src={ptImg1} alt="" />
					<img className="pt-img2 animate1" src={ptImg2} alt="" />
					<img className="pt-img3 animate-rotate" src={ptImg3} alt="" />
					<img className="pt-img4 animate-wave" src={ptImg4} alt="" /> */}
				</footer>

			</>
		);
	}
}

export default aboutSection;