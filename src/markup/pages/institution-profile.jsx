import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
import servicesPic1 from "../../images/services/pic1.jpeg";

const  ServiceDetail = () =>{

	let { lang } = useParams();

		return (
			<>

				<Header />

				<div className="page-content bg-white" style={{ marginTop: 60 }}>
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

											<h5 className="title-head">Services</h5>
											<ul className="service-menu">
												<li><Link to={`/${lang}`+"/service-details"}><span>Engine Diagnostics</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to={`/${lang}`+"/service-details"}><span>Lube Oil and Filters</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to={`/${lang}`+"/service-details"}><span>Belts and Hoses</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to={`/${lang}`+"/service-details"}><span>Air Conditioning</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to={`/${lang}`+"/service-details"}><span>Brake Repair</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to={`/${lang}`+"/service-details"}><span>Tire and Wheel Services</span><i className="fa fa-angle-right"></i></Link></li>
											</ul>
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

export default ServiceDetail;