import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import { contactUsFunc } from "../../store/contact-us/actions";


// Import Images
import background from "../../images/background/aheza-bg-12-5.jpeg";


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
			<div className="page-content bg-white" style={{ marginTop: 100 }}>
				<div className="banner-wraper contact-us-title">
					<div className="container">
						<div className="page-banner-entry text-center" >
							<h2 style={{ fontSize: 80 }}>Contact Us</h2>
						</div>
					</div>
				</div>

				<section className="">
					<div className="" >
						<div className=" " style={{ marginBottom: 100 }}>

							<div className="row">
								<div className='col-md-7' style={{ backgroundImage: "url(" + background + ")", backgroundSize: 'cover' }}>

								</div>
								<div className="col-lg-5 mb-30" style={{ padding: 30, paddingTop: 70 }}>
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
												<div className="form-group col-md-12" style={{ marginBottom: 50 }}>
													<input value={firstName} onChange={(e) => setFirstName(e.target.value)} name="name" type="text" required className="form-control" placeholder="Name" />
												</div>
												{errors.firstName && <p className={"text-danger"}>{errors.firstName}</p>}

												<div className="form-group col-md-12" style={{ marginBottom: 50 }}>
													<input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" required className="form-control" placeholder="Email" />
												</div>
												{errors.email && <p className={"text-danger"}>{errors.email}</p>}

												<div className="form-group col-md-12" style={{ marginBottom: 50 }}>
													<input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phone" type="text" required className="form-control" placeholder="Phone Number" />
												</div>
												{errors.phoneNumber && <p className={"text-danger"}>{errors.phoneNumber}</p>}

												<div className="form-group col-md-12" style={{ marginBottom: 50 }}>
													<textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" required className="form-control" placeholder="Message "></textarea>
												</div>
												{errors.message && <p className={"text-danger"}>{errors.message}</p>}

												<div className="col-lg-12">
													<button onClick={(event) => sendMessage(event)}
														name="submit"
														type="submit"
														value="Submit"
														style={{ padding: "30px 35px" }}
														className="btn w-100 btn-secondary btn-lg"><b style={{ fontSize: 20, color: "white" }}>{loading ? "Sending..." : "Send"}</b></button>
												</div>
											</div>

										</div>}
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
