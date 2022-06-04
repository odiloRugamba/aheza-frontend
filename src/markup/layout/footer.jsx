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
			<div className='row footer-section'>

				<div className='row' style={{marginRight: 0}}>
					<div className='col-md-6'>
						<p style={{ fontSize: 14, margin: 0 }} >
							<u><h3 className="footer-" style={{ fontSize: 17, padding: 0, margin: 0, color: "white" }}>Privacy</h3></u>
							We assure total privacy for everyone who uses our services. We utilize user's code
							to seal your identity from the community and staff where necessary.
						</p>
					</div>
					<div className='col-md-6'>

						<p style={{ fontSize: 14 }}>
							<u><h3 className="footer-" style={{ fontSize: 17, padding: 0, margin: 0, color: "white" }}>Terms and Conditions</h3></u>
							By using this website you acknowledge that you have read and accepted our terms and conditions.
							<Link to="/terms"> Read Terms and Conditions here.</Link>
						</p>
					</div>
				</div>
				<hr style={{ height: 5 }}></hr>
				<div className='col-md-3' >
					<span id='HeaderIcon' className="material-icons"></span>
					<b style={{ color: "white" }}><u>Schedule:</u> </b>
					Monday - Friday: 8:00 AM - 6:00 PM
				</div>

				<div className='col-md-3' >
					<div>
						<span id='HeaderIcon' className="material-icons"></span>
						<b style={{ color: "white" }}><u>Email:</u> </b>
						info@aheza.org.rw

					</div>
				</div>

				<div className='col-md-3' >
					<div>
						<span id='HeaderIcon' className="material-icons"></span>
						<b style={{ color: "white" }}><u>Helpline:</u></b>
						<a href="tel:+250788315809" style={{ color: "white" }}> 1024</a>
					</div>
					<div>
						<span id='HeaderIcon' className="material-icons"></span>
						<b style={{ color: "white" }}><u>Call:</u></b>
						<a href="tel:+250788315809" style={{ color: "white" }}> (+250) 788 315 809</a>
					</div>

				</div>

				<div style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.google.com/maps/place/Nyarutarama,+Kigali/@-1.9399231,30.091306,15z/data=!3m1!4b1!4m5!3m4!1s0x19dca6c43a09d8a5:0xfb4f1ab02ad0cbab!8m2!3d-1.9388762!4d30.1040715')} className='col-md-3' >
					<span id='HeaderIcon' className="material-icons"></span>
					<b style={{ color: "white" }}><u>Place:</u> </b>
					<u>
						Bugesera District, Ntarama Sector
					</u>
				</div>
			</div>
		</>
	);
}

export default Footer;