import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getServiceById } from "../../store/services/actions";
import { Dcore } from '../../api';
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic1 from "../../images/services/pic1.jpg";
import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";


const ServiceDetail = () => {
	const { id } = useParams()
	const dispatch = useDispatch()

	const [service, setService] = useState(null)
	const res = useSelector(state => state.servicesReducers.service)

	useEffect(() => {
		dispatch(getServiceById(id))
	}, [])

	useEffect(() => {
		console.log(res)
		setService(res)
	}, [res]);

	return (
		<>
			<Header />
			<div className="page-content bg-white" style={{ marginTop: 60 }}>
				<section className="section-area section-sp1">
					<div className="container">
						<div className="row"> 
							<div className="col-lg-8 mb-30">
								<div className="ttr-media mb-30">
								</div>
								<div className="post-media">
									<img style={{width: "100%"}} src={Dcore.IMAGEURL + "/" + service?.image} alt="" />
								</div> 
								<div className="clearfix">
									<div className="head-text mb-30">
										<h2 className="title mb-15">{service?.title}</h2>
									</div>
								</div>
								<div>
									<div dangerouslySetInnerHTML={{ __html: service?.content }}>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<aside className="sticky-top pb-1">
									<div className="widget">

										<h5 className="title-head">Services offered</h5>
										<ul className="service-menu">
											
											{
												service?.services?.map(el =>
													<li style={{ padding: 0 }}><Link to="#"><span>{el}</span></Link></li>
												)
											}
											<br/>
											<hr />
											<br/>
											<li style={{ padding: 0 }}><Link to="/appointment-assesement"><span>Book an Appointment</span></Link></li>
											<li style={{ padding: 0 }}><Link to="/contact-us"><span>Contact Us</span></Link></li>

										</ul>
										
									</div>
									{/* <div className="widget">
										<div className="brochure-bx">
											<h5 className="title-head">Download</h5>
											<Link to="#" className="download-link">
												<img src={pdf} alt="" />
												<h5 className="title">Download our Brochures</h5>
												<span>Download</span>
											</Link>
											<Link to="#" className="download-link">
												<img src={doc} alt="" />
												<h5 className="title">Our Company Details</h5>
												<span>Download</span>
											</Link>
										</div>
									</div> */}

								</aside>
							</div>
						</div>
					</div>
				</section>

			</div>

			<Footer />

		</>
	);

}

export default ServiceDetail;