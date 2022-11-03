import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";





const Footer = () => {
	const services = useSelector(state => state.servicesReducers.data);
	return (
		<>

			<footer className="footer">
				<div className="footer-top" style={{ backgroundColor: "rgba(255,255,255,0.7)" }}>
					<div className="containerr">
						<div className="footer-row row" style={{ paddingLeft: 40 }}>
							<div className="col-xl-6 col-lg-3 col-md-6">
								<div className="widget widget_info">
									<h3 className="footer-title">Privacy</h3>
									<div className="ft-contact">
										<p>
											We assure total privacy for everyone who uses our services. We utilize user's code
											to seal your identity from the community and staff where necessary.
										</p>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-3 col-md-6">
								<div className="widget widget_info">
									<h3 className="footer-title">Terms and Conditions</h3>
									<div className="ft-contact">
										<p>
											By using this website you acknowledge that you have read and accepted our terms and conditions.
											<Link to="/terms"> Read Terms and Conditions here.</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div className='row footer-section'>
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

				<div className='col-md-3' style={{ display: 'flex' }}>
					<div style={{ marginRight: '10px' }}>
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
