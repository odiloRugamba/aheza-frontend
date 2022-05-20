import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHospitalById } from "../../store/hospital/actions";
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
	const [hospital, setHospital] = useState(null)
	const dispatch = useDispatch();
	const { id } = useParams()
	const response = useSelector(state => state?.HospitalReducers?.hospital)


	useEffect(() => {
		dispatch(getHospitalById(id))
	}, [])

	useEffect(() => {
		console.log(response)
		setHospital(response)
	}, [response])

	return (
		<>

			<Header />
			<div className="page-content bg-white" style={{ marginTop: 60 }}>
				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 mb-30">
								<div className="post-media">
									<img style={{width: "100%", marginBottom: 30}} src={Dcore.IMAGEURL + "/" + hospital?.image} alt="" />
								</div> 
								<div className="clearfix">
									<div className="head-text mb-30">
										<h2 className="title mb-15">{hospital?.name}</h2>
									</div>
								</div>
								<div>
									<div dangerouslySetInnerHTML={{ __html: hospital?.content }}></div>
								</div>
							</div>
							<div className="col-lg-4">
								<aside className="sticky-top pb-1">
									<div className="widget">

										<h5 className="title-head">Services offered</h5>
										<ul className="service-menu">
											{
												hospital?.services.map(el =>
													<li><Link to="/service-details"><span>{el}</span></Link></li>
												)
											}
										</ul>
									</div>
									{/* <div className="widget">
										<div className="brochure-bx">
											<h5 className="title-head">Download</h5>
											<Link to="#" className="download-link">
												<img src={pdf} alt="" />
												<h5 className="title">publish your own</h5>
												<span>Publish</span>
											</Link>
											<Link to="#" className="download-link">
												<img src={doc} alt="" />
												<h5 className="title">Research</h5>
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