import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import { contactUsFunc } from "../../store/contact-us/actions";
import Map from '../elements/map';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";


const ContactUs = () => {
	const [firstName, setFirstName] = useState(null)
	const [email, setEmail] = useState(null)
	const [phoneNumber, setPhoneNumber] = useState(null)
	const [message, setMessage] = useState(null)
	const [errors, setErrors] = useState({});
	const [completed, setCompleted] = useState(false);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch()

	const sendMessage = (event) => {
		event.preventDefault();
		setErrors({});
		setLoading(true);

		if (firstName === null || firstName === "")
		{
			setErrors({...errors, firstName : "Your name is required"});
			setLoading(false)
			return;
		}
		if (email === null || email === "")
		{
			setErrors({...errors, email : "Your email is required"});
			setLoading(false)
			return;

		}
		if (phoneNumber === null || phoneNumber === "")
		{
			setErrors({...errors, phoneNumber : "Your phone is required"});
			setLoading(false)
			return;
		}
		if (message === null || message === "")
		{
			setErrors({...errors, message : "Message is required"});
			setLoading(false)
			return;
		}
		try {
			dispatch(contactUsFunc({name: firstName, email, phone: phoneNumber, message}));
			setTimeout(()=>{
				setCompleted(true);
				setLoading(false)
			}, 3000)
		}
		catch (err) {
			setErrors({...errors, form: "Sorry something went wrong"})
			setLoading(false)
		}
	}


	return (
		<>
			<Header />
			<div className="page-content bg-white"  style={{ marginTop: 100 }}>
				<div className="banner-wraper">
					<div className="page-banner banner-lg contact-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 400 }}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h2>Contact Us</h2>

							</div>
						</div>
						<img className="pt-img1 animate-wave" src={animateWave} alt="" />
						{/* <img className="pt-img2 animate2" src={animate2} alt=""/> */}
						<img className="pt-img3 animate-rotate" src={animateRotate} alt="" />
					</div>
				</div>

				<section className="">
					<div className="container">
						<div className="contact-wraper">
							<div className="row">
								<div className="col-lg-6 mb-30">
									{completed ?
										<>
											<p className={"text-center h6"}>Thank you !!!</p>
											<Link to={"/"}>
												<button className={"btn w-100 btn-secondary"}>Go Back</button>
											</Link>
										</> : <div className="form-wraper contact-form ajax-form">
										<div className="ajax-message"></div>
										<div className="row">
											{errors.form && <div className="alert alert-danger" role="alert">
												{errors?.form}
											</div> }
											<div className="form-group col-md-12">
												<input value={firstName} onChange={(e) => setFirstName(e.target.value)} name="name" type="text" required className="form-control" placeholder="Your Name" />
											</div>
											{errors.firstName && <p className={"text-danger"}>{errors.firstName}</p>}

											<div className="form-group col-md-12">
												<input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" required className="form-control" placeholder="Email" />
											</div>
											{errors.email && <p className={"text-danger"}>{errors.email}</p>}

											<div className="form-group col-md-12">
												<input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phone" type="text" required className="form-control" placeholder="Phone Numbers" />
											</div>
											{errors.phoneNumber && <p className={"text-danger"}>{errors.phoneNumber}</p>}

											<div className="form-group col-md-12">
												<textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" required className="form-control" placeholder="Type Message"></textarea>
											</div>
											{errors.message && <p className={"text-danger"}>{errors.message}</p>}

											<div className="col-lg-12">
												<button onClick={(event) => sendMessage(event)}
														name="submit"
														type="submit"
														value="Submit"
														className="btn w-100 btn-secondary btn-lg">{ loading ? "Sending..." : "Send"}</button>
											</div>
										</div>
									</div> }

								</div>
								<div className="col-lg-6 mb-30">
									<div className="contact-info ovpr-dark" style={{ backgroundImage: "url(" + pic1 + ")" }}>
										<div className="info-inner">
											<h5 className="title mb-20">Contact Us For Any Informations</h5>
											<div className="icon-box">
												<h6 className="title"><i className="ti-map-alt"></i>Location</h6>
												<p>Bugesera District, Ntarama sector - Rwanda</p>
											</div>
											<div className="icon-box">
												<h6 className="title"><i className="ti-id-badge"></i>Email &amp; Phone</h6>
												<Link to="#" className="text-white">info@aheza.org.rw</Link>
												<p>(+250) 788 315 809</p>
											</div>
											<div className="icon-box">
												<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
												<ul className="social-media">
													<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
													<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
													<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className='row' style={{ height: 400, width: "100%", backgroundColor: "red" }}>
					<Map />
				</div>
				<section className="section-area section-sp1">
					<div className="container">

						<div className="row">
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx4 feature4">
									<div className="icon-md feature-icon">
										<img src={icon1} alt="" />
									</div>
									<div className="icon-content">
										<h5 className="ttr-title">Contact Number</h5>
										<p>(+250) 788 315 809</p>
										<p>1024</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx4 feature3">
									<div className="icon-md feature-icon">
										<img src={icon3} alt="" />
									</div>
									<div className="icon-content">
										<h5 className="ttr-title">Email Address</h5>
										<p>info@aheza.org.rw</p>
										<p>support@aheza.org.rw</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx4 feature2">
									<div className="icon-md feature-icon">
										<img src={icon2} alt="" />
									</div>
									<div className="icon-content">
										<h5 className="ttr-title">Address</h5>
										<p>Bugesera District, Ntarama sector - Rwanda</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>

			<Footer />

		</>
	);
}

export default ContactUs;
