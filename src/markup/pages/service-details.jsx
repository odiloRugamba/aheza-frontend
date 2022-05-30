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
		// console.log(res)
		setService(res)
	}, [res]);

	const hyperLinkFunc = (el) => {
		let divElement = null
		if (el === 'Children and Adolescents') {
			console.log(el)
			divElement = document.querySelector('.designDetails  :nth-child(1)')
		} else if (el.trim() === 'Chronic Disease') {
			console.log(el)
			divElement = document.querySelector('.designDetails  :nth-child(4)')
		} else if (el.trim() === 'Conflict') {
			console.log(el)
			divElement = document.querySelector('.designDetails  :nth-child(6)')
		} else if (el.trim() === 'Divorce') {
			console.log(el)
			divElement = document.querySelector('.designDetails  :nth-child(8)')
		} else if (el.trim() === 'Grief') {
			console.log(el)
			divElement = document.querySelector('.designDetails  :nth-child(10)')
		} else if (el.trim() === 'Individual Therapy') {
			console.log(el)
			divElement = document.querySelector('.designDetails  :nth-child(13)')
		} else if (el.trim() === 'Marriage and Family') {
			console.log(el)
			divElement = document.querySelector('.designDetails  :nth-child(16)')
		} else if (el.trim() === 'Mental Disorders') {
			console.log(el)
			divElement = document.querySelector('.designDetails  :nth-child(17)')
		} else if (el.trim() === 'Students and School') {
			console.log(el)
			divElement = document.querySelector('.designDetails  :nth-child(19)')
		} else if (el.trim() === 'Substance Abuse and Addiction') {
			console.log(el)
			divElement = document.querySelector('.designDetails  :nth-child(21)')
		}
		console.log(el.trim(' '))
		if (divElement) {
			divElement.scrollIntoView({ behavior: 'smooth' });
		}
	}


	return (
		<>
			<Header />
			<div className="page-content bg-white" style={{ marginTop: 60 }}>
				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<aside className="sticky-top pb-1">
									<div className="widget">

										<h5 className="title-head">Services Offered</h5>
										<ul className="service-menu">

											{
												service?.services?.map(el =>
													<li style={{ padding: 0 }} onClick={() => hyperLinkFunc(el)}><Link to="#"><span>{el}</span></Link></li>
												)
											}
											<br />
											<hr />
											<br />
											<li style={{ padding: 0 }}><Link to="/appointment-assesement"><span>Book an Appointment</span></Link></li>
											<li style={{ padding: 0 }}><Link to="/contact-us"><span>Contact Us</span></Link></li>
										</ul>
									</div>
								</aside>
							</div>

							<div className="col-lg-8 mb-30">
								<div className="ttr-media mb-30">
								</div>
								<div className="post-media">
									<img style={{ width: "100%" }} src={Dcore.IMAGEURL + "/" + service?.image} alt="" />
								</div>
								<div className="clearfix">
									<div className="head-text mb-30">
										<h2 className="title mb-15">{service?.title}</h2>
									</div>
								</div>
								<div className='designDetails'>
									<div dangerouslySetInnerHTML={{ __html: service?.content }}>
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

export default ServiceDetail;