import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

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

class ServiceDetail extends Component {

	render() {
		return (
			<>

				<Header />

				<div className="page-content bg-white" style={{marginTop: 60}}>
					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mb-30">
									<div className="ttr-media mb-30">
										<img src={servicesPic1} className="rounded" alt="" />
									</div>
									<div className="clearfix">
										<div className="head-text mb-30">
											<h2 className="title mb-15">Why Remote Medical Is So Popular Nowdays</h2>
											<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										</div>
									</div>
									<div className="clearfix">
										<div className="head-text mb-30">
											<h4 className="title mb-10">Popular Questions</h4>
											<p className="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										</div>
										<Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
											<Accordion.Item eventKey="0">
												<Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="1">
												<Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="2">
												<Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="3">
												<Accordion.Header>What types of systems do you support?</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="4">
												<Accordion.Header>We Teach You How To Feel Better?</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="5">
												<Accordion.Header>How Can I Contact You?</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</div>
								</div> 
								<div className="col-lg-4">
									<aside className="sticky-top pb-1">
										<div className="widget">
											
											<h5 className="title-head">Services offered</h5>
											<ul className="service-menu">
												<li><Link to="/service-details"><span>Engine Diagnostics</span></Link></li>
												<li><Link to="/service-details"><span>Lube Oil and Filters</span></Link></li>
												<li><Link to="/service-details"><span>Belts and Hoses</span></Link></li>
												<li><Link to="/service-details"><span>Air Conditioning</span></Link></li>
												<li><Link to="/service-details"><span>Brake Repair</span></Link></li>
												<li><Link to="/service-details"><span>Tire and Wheel Services</span></Link></li>
											</ul>
										</div>
										<div className="widget">
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
										</div>

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
}

export default ServiceDetail;