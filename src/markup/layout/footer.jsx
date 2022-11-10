import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { FormattedMessage } from 'react-intl';





const Footer = () => {
	let { lang } = useParams();
	const services = useSelector(state => state.servicesReducers.data);
	return (
		<>

			<footer className="footer">
				<div className="footer-top" style={{ backgroundColor: "rgba(255,255,255,0.7)" }}>
					<div className="containerr">
						<div className="footer-row row" style={{ paddingLeft: 40 }}>
							<div className="col-xl-6 col-lg-3 col-md-6">
								<div className="widget widget_info">
									<h3 className="footer-title">
									    <FormattedMessage id="privacy" defaultMessage="Privacy" />
										</h3>
									<div className="ft-contact">
										<p>
										<FormattedMessage id="privacyCont" defaultMessage="keywords" />
										</p>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-3 col-md-6">
								<div className="widget widget_info">
									<h3 className="footer-title">
										<FormattedMessage id="TermsandConditions" defaultMessage="Terms and Condition" />
										</h3>
									<div className="ft-contact">
										<p>
										<FormattedMessage id="TermsandConditionsCont" defaultMessage="TermsandConditionsCont" />
											<Link to={`/${lang}`+"/terms"}>
										<FormattedMessage id="readTerms" defaultMessage="readTerms" />
											</Link>
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
					<b style={{ color: "white" }}><u>
					<FormattedMessage id="Schedule" defaultMessage="Schedule" />
						:</u> </b>
						<FormattedMessage id="ScheduleCont" defaultMessage="ScheduleCont" />
				</div>

				<div className='col-md-3' >
					<div>
						<span id='HeaderIcon' className="material-icons"></span>
						<b style={{ color: "white" }}><u>
						<FormattedMessage id="email" defaultMessage="email" />:</u> </b>
						<FormattedMessage id="emailCont" defaultMessage="emailCont" />
					</div>
				</div>

				<div className='col-md-3' style={{ display: 'flex' }}>
					<div style={{ marginRight: '10px' }}>
						<span id='HeaderIcon' className="material-icons"></span>
						<b style={{ color: "white" }}><u><FormattedMessage id="helpline" defaultMessage="helpline" />:</u></b>
						<a href="tel:+250788315809" style={{ color: "white" }}> 1024</a>
					</div>
					<div>
						<span id='HeaderIcon' className="material-icons"></span>
						<b style={{ color: "white" }}><u><FormattedMessage id="call" defaultMessage="call" />:</u></b>
						<a href="tel:+250788315809" style={{ color: "white" }}> (+250) 788 315 809</a>
					</div>
				</div>

				<div style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.google.com/maps/place/Nyarutarama,+Kigali/@-1.9399231,30.091306,15z/data=!3m1!4b1!4m5!3m4!1s0x19dca6c43a09d8a5:0xfb4f1ab02ad0cbab!8m2!3d-1.9388762!4d30.1040715')} className='col-md-3' >
					<span id='HeaderIcon' className="material-icons"></span>
					<b style={{ color: "white" }}><u><FormattedMessage id="place" defaultMessage="place" />:</u> </b>
					<u>
					<FormattedMessage id="placeCont" defaultMessage="placeCont" />
					</u>
				</div>
			</div>
		</>
	);
}

export default Footer;
