import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Images
import footerBg from '../../images/background/footer.jpg';
import twitterLogo from "../../images/twitter.svg"
import instagramLogo from "../../images/instagram.svg"
import facebook from "../../images/facebook.svg"
import logoWhite from '../../images/logo-white.png';
import { useSelector } from "react-redux";





const Footer = () => {
	const services = useSelector(state => state.servicesReducers.data);

	return (
		<>
			<footer className="footer" style={{ backgroundImage: "url(" + footerBg + ")" }}>
				<div className="footer-top" style={{ backgroundColor: "rgba(255,255,255,0.7)" }}>
					<div className="containerr">
						<div className="footer-row row" style={{ paddingLeft: 40 }}>

							<div className="col-xl-2 col-lg-3 col-md-6">
								{/* <div className="widget widget_info">
									<h3 className="footer-title">Our vision</h3>
									<div className="ft-contact">
										<p>Our vision is of a world where Rwanda’s genocide survivors receive the mental health care they need, and go on to live productive, fulfilling lives free from trauma.</p>
									</div>
								</div> */}
							</div>

							<div className="col-xl-3 col-lg-3 col-md-6 ">
								{/* <div className="widget footer_widget">
									<h3 className="footer-title">Our Service</h3>
									<ul>
										{services?.length > 0 && services?.map(service => (
											<li><Link to={"/our-services/" + service?.title + '/' + service?._id}><span>{service?.title}</span></Link></li>
										))}
									</ul>
								</div> */}
							</div>

							<div className="col-xl-3 col-lg-3 col-md-6">
								
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6">
								{/* <div className="widget widget_info">
									<div className="ft-contact">
										<p style={{ fontSize: 14 }}>
											<h3 className="footer-title" style={{ fontSize: 17, padding: 0,  margin: 0}}>Privacy</h3>
											We assure total privacy for everyone who use our services. we use user's code
											to seal your identity from the community and staff where necessary
										</p>
									</div>
								</div> */}
								<div className="widget widget_info">
									
									<div className="ft-contact">
										<p style={{ fontSize: 14, margin: 0 }} >
											<h3 className="footer-title" style={{ fontSize: 17, padding: 0,  margin: 0}}>Privacy</h3>
											We assure total privacy for everyone who use our services. we use user's code
											to seal your identity from the community and staff where necessary
										</p>
										<p style={{ fontSize: 14 }}>
											<h3 className="footer-title" style={{ fontSize: 17, padding: 0,  margin: 0}}>Terms and Conditions</h3>
											By using this website you acknowledge that you have read and accepted our terms and conditions.
											<Link to="/terms"> Read Terms and Conditions here</Link>
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
			<div id="ahezaInfo">
				<div id='innerCont'>

					<div id='headerItem'>
						<div>
							<span id='HeaderIcon' className="material-icons">schedule</span>
						</div>
						<div> Monday - Friday: 8:00 AM - 6:00 PM</div>
					</div>

					<div id='headerItem'>
						<div>
							<span id='HeaderIcon' className="material-icons">
								email
							</span>
						</div>
						<div>info@aheza.org.rw</div>
						<div id='socialMedias'>
							<div><embed src={twitterLogo} width="20" /></div>
							<div><embed src={instagramLogo} width="20" /></div>
							<div><embed src={facebook} width="20" /></div>
						</div>
					</div>

					<div id='headerItem'>
						<div>
							<span id='HeaderIcon' className="material-icons">call</span>
						</div>
						<div><a href="tel:+250788315809" style={{ color: "white" }}>(+250) 788 315 809</a></div>
					</div>

					<div id='headerItem'>
						<div>
							<span id='HeaderIcon' className="material-icons">place</span>
						</div>
						<div> Bugesera District, Ntarama Sector</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;