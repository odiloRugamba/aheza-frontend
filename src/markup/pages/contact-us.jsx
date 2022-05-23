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
import contactImage from "../../images/imagge.png";


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

		if (firstName === null || firstName === "") {
			setErrors({ ...errors, firstName: "Your name is required" });
			setLoading(false)
			return;
		}
		if (email === null || email === "") {
			setErrors({ ...errors, email: "Your email is required" });
			setLoading(false)
			return;

		}
		if (phoneNumber === null || phoneNumber === "") {
			setErrors({ ...errors, phoneNumber: "Your phone is required" });
			setLoading(false)
			return;
		}
		if (message === null || message === "") {
			setErrors({ ...errors, message: "Message is required" });
			setLoading(false)
			return;
		}
		try {
			dispatch(contactUsFunc({ name: firstName, email, phone: phoneNumber, message }));
			setTimeout(() => {
				setCompleted(true);
				setLoading(false)
			}, 3000)
		}
		catch (err) {
			setErrors({ ...errors, form: "Sorry something went wrong" })
			setLoading(false)
		}
	}
	const openLink = (link) => {
		window.open(link)
	}


	return (
		<>
			<Header />
			<div className="page-content bg-white" style={{ marginTop: 100, marginBottom: 50 }}>
				<div className="banner-wraper" style={{ marginBottom: 50 }}>
					<div className="page-banner banner-lg contact-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 400 }}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h2 style={{ fontSize: 80 }}>Contact Us</h2>

							</div>
						</div>
					</div>
				</div>

				<section className="">
					<div className="container">
						<div className="contact-wraper contactCard">

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
												</div>}
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
														className="btn w-100 btn-secondary btn-lg">{loading ? "Sending..." : "Send"}</button>
												</div>
											</div>

										</div>}
								</div>
							</div>

							<div>
								<img src={contactImage} alt="" />
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
