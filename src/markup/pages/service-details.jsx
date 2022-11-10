import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getServiceById } from "../../store/services/actions";
import { Dcore } from '../../api';
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import { FormattedMessage } from 'react-intl';






const ServiceDetail = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const history = useHistory()
	const [service, setService] = useState(null)
	const res = useSelector(state => state.servicesReducers.service)
	let { lang } = useParams();

	useEffect(() => {
		dispatch(getServiceById(id))
	}, [])

	useEffect(() => {
		setService(res)
	}, [res]);

	const hyperLinkFunc = (el) => {
		let divElement = null
		if (el === 'Children and Adolescents') {
			divElement = document.querySelector('.designDetails  :nth-child(1)')
		} else if (el.trim() === 'Chronic Disease') {
			divElement = document.querySelector('.designDetails  :nth-child(3)')
		} else if (el.trim() === 'Conflict') {
			divElement = document.querySelector('.designDetails  :nth-child(4)')
		} else if (el.trim() === 'Divorce') {
			divElement = document.querySelector('.designDetails  :nth-child(5)')
		} else if (el.trim() === 'Grief') {
			divElement = document.querySelector('.serviceDetails  :nth-child(9)')
		} else if (el.trim() === 'Individual  and Group Therapy') {
			divElement = document.querySelector('.serviceDetails  :nth-child(12)')
		} else if (el.trim() === 'Marriage and Family') {
			divElement = document.querySelector('.serviceDetails  :nth-child(15)')
		} else if (el.trim() === 'Mental Disorders') {
			divElement = document.querySelector('.serviceDetails  :nth-child(18)')
		} else if (el.trim() === 'Students and School') {
			divElement = document.querySelector('.serviceDetails  :nth-child(21)')
		} else if (el.trim() === 'Substance Abuse and Addiction') {
			divElement = document.querySelector('.serviceDetails  :nth-child(24)')
		}
		console.log(el.trim(' '))
		if (divElement) {
			divElement.scrollIntoView({ behavior: 'smooth' });
		}
	}
	const routeFunc = (link) => {
		history.push(`/${lang}`+link)
		window.location.reload()
	}


	return (
		<>
			<Header />
			<div className="page-content bg-white" style={{ marginTop: 60 }}>
				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 service-sidebar">
								<aside className="sticky-top pb-1">
									<div className="widget">
										<ul className="service-menu">
											{
												service?.services.length ? <div>
													{
														service?.services?.map(el =>
															<li style={{ padding: 0 }} onClick={() => hyperLinkFunc(el)}><Link to="#"><span>{el}</span></Link></li>
														)
													}
													<br />
													<hr />
													<br />
												</div> : null
											}
											<li style={{ padding: 0 }}><Link to={'/'+ lang+ "/appointment-assesement"}><span>
<FormattedMessage id="BookAppointment" defaultMessage="Book Appointment" />
												</span></Link></li>
											<li style={{ padding: 0 }}><Link to={'/'+ lang+ "/contact-us"}><span>
												
<FormattedMessage id="contactUs" defaultMessage="Contact Us" />
												
												</span></Link></li>
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
								<div className='designDetails'>

									<div className="clearfix">
										<div className="head-text mb-15 mt-15">
											<h2 className="title mb-15">{service?.title}</h2>
										</div>
									</div>
									<div className='serviceDetails' dangerouslySetInnerHTML={{ __html: service?.content }}>
									</div>
									<br></br>
									<br></br>
									<p style={{ fontStyle: 'italic' }}>
										
<FormattedMessage id="OurServicesAre" defaultMessage="OurServicesAre" />
										
										<Link to='#' onClick={() => routeFunc('/terms')}>
<FormattedMessage id="AhezaPrivacy" defaultMessage="AhezaPrivacy" />
										</Link>.
									</p>
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