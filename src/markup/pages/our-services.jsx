import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import plusBlue from "../../images/shap/plus-blue.png";


class Services extends Component {

	render() {
		return (
			<>

				<Header />

				<div className="page-content bg-white" style={{paddingTop: 60}}>

					<div className="banner-wraper">
						<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 300 }}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h2>Our Services</h2>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt="" />
							<img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
						</div>
					</div>

					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx2 feature2">
										<div className="feature-box-xl mb-20">
											<span className="icon-cell">
												<svg enable-background="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85" xmlns="http://www.w3.org/2000/svg">
													<path d="m509.82 327.343-21.991-27.599c-1.896-2.381-4.775-3.768-7.82-3.768h-7.712l-74.353-93.385c-1.897-2.383-4.777-3.771-7.823-3.771h-22.862v-22.765c0-19.014-15.43-34.483-34.396-34.483h-97.678v-4.552c0-28.428-23.127-51.555-51.555-51.555s-51.555 23.127-51.555 51.555v4.552h-97.678c-18.966 0-34.397 15.47-34.397 34.484v251.241c0 5.523 4.478 10 10 10h22.279c4.628 22.794 24.758 39.999 48.815 39.999s44.186-17.205 48.814-39.999h250.37c4.628 22.794 24.757 39.999 48.814 39.999s44.187-17.205 48.815-39.999h24.093c5.522 0 10-4.477 10-10v-93.722c0-2.264-.769-4.461-2.18-6.232zm-124.52-108.523 61.432 77.156h-79.474v-77.156zm-233.226-81.799c0-17.399 14.155-31.555 31.555-31.555s31.555 14.156 31.555 31.555v4.552h-63.109v-4.552zm-132.074 39.035c0-7.986 6.459-14.483 14.397-14.483h298.464c7.938 0 14.396 6.497 14.396 14.483v241.241h-217.35c-4.628-22.794-24.757-39.999-48.814-39.999s-44.187 17.205-48.815 39.999h-12.278zm61.094 281.24c-16.44 0-29.816-13.458-29.816-29.999s13.376-29.999 29.816-29.999 29.815 13.458 29.815 29.999-13.375 29.999-29.815 29.999zm347.998 0c-16.44 0-29.815-13.458-29.815-29.999s13.375-29.999 29.815-29.999 29.816 13.458 29.816 29.999-13.376 29.999-29.816 29.999zm62.908-39.999h-14.093c-4.628-22.794-24.758-39.999-48.815-39.999s-44.186 17.205-48.814 39.999h-13.02v-101.321h107.932l16.81 21.096z" />
													<path d="m183.629 66.808c5.522 0 10-4.477 10-10v-12.104c0-5.523-4.478-10-10-10s-10 4.477-10 10v12.104c0 5.523 4.477 10 10 10z" />
													<path d="m236.764 94.969c1.934 1.829 4.404 2.736 6.871 2.736 2.652 0 5.299-1.048 7.266-3.127l10.626-11.229c3.796-4.011 3.621-10.341-.391-14.137s-10.341-3.621-14.137.391l-10.626 11.229c-3.796 4.012-3.621 10.341.391 14.137z" />
													<path d="m116.358 94.579c1.967 2.078 4.613 3.126 7.266 3.126 2.467 0 4.938-.907 6.871-2.737 4.012-3.796 4.187-10.125.391-14.137l-10.627-11.229c-3.796-4.011-10.126-4.187-14.137-.39-4.012 3.796-4.187 10.125-.391 14.137z" />
													<path d="m90.896 216.592h184.372v113.287h-184.372z" fill="#b2f0fb" />
												</svg>
											</span>
										</div>
										<div className="icon-content">
											<h5 className="ttr-title">Ergo therapy/occupation service</h5>
											<p>Occupational therapy is a treatment method that focuses on maintaining and using personal abilities necessary for casual daily work and the recreational activities of people of all ages with any type of handicap (physical, sensorial, mental or social) by sensible engagement in activities.</p>
											<Link to="/service-details" className="btn btn-primary light">Read More</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx2 feature1">
										<div className="feature-box-xl mb-20">
											<span className="icon-cell">
												<svg enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg">
													<path d="m218.578 512c-29.085 0-52.748-23.656-52.748-52.734v-102.154c0-5.522 4.477-10 10-10s10 4.478 10 10v102.153c0 18.05 14.69 32.734 32.748 32.734s32.748-14.685 32.748-32.734v-116.18c0-20.084 16.343-36.423 36.432-36.423s36.432 16.339 36.432 36.423v59.66c0 24.042 19.567 43.602 43.619 43.602s43.619-19.56 43.619-43.602v-170.256c0-5.522 4.477-10 10-10s10 4.478 10 10v170.256c0 35.07-28.54 63.602-63.619 63.602s-63.619-28.531-63.619-63.602v-59.66c0-9.056-7.371-16.423-16.432-16.423s-16.432 7.367-16.432 16.423v116.181c0 29.078-23.663 52.734-52.748 52.734z" fill="#020288" />
													<ellipse cx="175.83" cy="336.898" fill="#b2f0fb" rx="30.275" ry="30.265" />
													<path d="m317.745 103.718h-10.12v-78.989c0-5.522-4.477-10-10-10h-55.743v-4.729c0-5.522-4.477-10-10-10s-10 4.478-10 10v29.456c0 5.522 4.477 10 10 10s10-4.478 10-10v-4.728h45.743v68.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 50.532-41.126 91.644-91.677 91.644-50.55 0-91.676-41.111-91.676-91.644v-47.531c0-5.522-4.477-10-10-10h-10.119v-68.988h45.743v4.728c0 5.522 4.477 10 10 10s10-4.478 10-10v-29.457c0-5.522-4.477-10-10-10s-10 4.478-10 10v4.729h-55.743c-5.523 0-10 4.478-10 10v78.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 83.741 68.149 151.869 151.915 151.869s151.915-68.128 151.915-151.869v-47.531c0-5.523-4.477-10-10-10zm-10 57.531c0 72.713-59.177 131.869-131.915 131.869s-131.915-59.156-131.915-131.869v-37.531h20.238v37.531c0 61.561 50.098 111.644 111.676 111.644s111.677-50.083 111.677-111.644v-37.531h20.239z" fill="#020288" />
													<ellipse cx="421.426" cy="170.539" fill="#b2f0fb" rx="66.659" ry="66.637" />
													<path d="m421.427 202.534c-17.646 0-32.001-14.353-32.001-31.995s14.356-31.994 32.001-31.994 32.001 14.353 32.001 31.994c0 17.643-14.356 31.995-32.001 31.995zm0-43.989c-6.618 0-12.001 5.381-12.001 11.994 0 6.614 5.384 11.995 12.001 11.995s12.001-5.381 12.001-11.995c0-6.613-5.384-11.994-12.001-11.994z" fill="#020288" />
												</svg>
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">counselling and Psychotherapy</h3>
											<p>We are a community based counseling and outreach center that tend to offer individual, couple, family, and group counseling services to consumers in Rwanda.</p>
											<br/><br/>
											<Link to="/service-details" className="btn btn-primary light">Read More</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx2 feature2">
										<div className="feature-box-xl mb-20">
											<span className="icon-cell">
												<svg enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg">
													<g fill="#020288">
														<path d="m311.734 208.706h-25.074v-25.083c0-5.522-4.478-10-10-10h-41.32c-5.523 0-10 4.478-10 10v25.083h-25.074c-5.523 0-10 4.478-10 10v41.33c0 5.522 4.477 10 10 10h25.074v25.082c0 5.522 4.477 10 10 10h41.32c5.522 0 10-4.478 10-10v-25.082h25.074c5.522 0 10-4.478 10-10v-41.33c0-5.522-4.477-10-10-10zm-10 41.33h-25.074c-5.522 0-10 4.478-10 10v25.082h-21.32v-25.082c0-5.522-4.477-10-10-10h-25.074v-21.33h25.074c5.523 0 10-4.478 10-10v-25.083h21.32v25.083c0 5.522 4.478 10 10 10h25.074z" />
														<path d="m330.566 120.217v-51.05c0-5.522-4.478-10-10-10h-14.759v-49.167c0-5.522-4.478-10-10-10h-79.616c-5.523 0-10 4.478-10 10v49.167h-14.758c-5.523 0-10 4.478-10 10v51.049c-37.43 23.089-62.429 64.475-62.429 111.589v270.195c0 5.522 4.477 10 10 10h253.992c5.522 0 10-4.478 10-10v-270.194c0-47.115-24.999-88.501-62.43-111.589zm-104.374-100.217h19.808v2.559c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-2.559h19.808v39.167h-59.616zm-24.759 59.167h109.133v30.965c-15.03-6.023-31.427-9.338-48.583-9.338h-11.967c-17.156 0-33.552 3.315-48.583 9.338zm171.563 412.833h-233.992v-260.194c0-61.212 49.8-111.012 111.012-111.012h11.967c61.213 0 111.013 49.8 111.013 111.012z" />
														<path d="m181.465 350.096h149.069v102.32h-149.069z" fill="#a4fcc4" />
													</g>
												</svg>
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Palliative care and home services</h3>
											<p>Palliative care is an approach that improves the quality of life of patients (adults and children) and their families who are facing problems associated with life-threatening illness.</p>
											<br/>
											<Link to="/service-details" className="btn btn-primary light">Read More</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx2 feature3">
										<div className="feature-box-xl mb-20">
											<span className="icon-cell">
												<svg enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg">
													<path d="m318.39 278.299h-39.263v-39.262h-46.254v39.262h-39.263v46.255h39.263v39.263h46.254v-39.263h39.263z" fill="#ffbdbc" />
													<g fill="#020288">
														<path d="m256 164.444c-75.533 0-136.983 61.45-136.983 136.982s61.45 136.983 136.983 136.983 136.983-61.45 136.983-136.982-61.45-136.983-136.983-136.983zm0 253.965c-64.504 0-116.983-52.479-116.983-116.982s52.479-116.983 116.983-116.983 116.983 52.479 116.983 116.982-52.479 116.983-116.983 116.983z" />
														<path d="m470.541 112.15h-100.492v-50.962c0-20.205-16.429-36.643-36.623-36.643h-154.853c-20.194 0-36.623 16.438-36.623 36.643v50.963h-100.491c-22.86-.001-41.459 18.598-41.459 41.458v292.387c0 22.86 18.599 41.459 41.459 41.459h429.082c22.86 0 41.459-18.599 41.459-41.459v-292.387c0-22.86-18.599-41.459-41.459-41.459zm-34.541 20v36.68h-50.511v-36.68zm-274.049-70.962c0-9.177 7.457-16.643 16.623-16.643h154.854c9.166 0 16.623 7.466 16.623 16.643v50.963h-24.765v-32.806c0-5.522-4.477-10-10-10h-118.57c-5.523 0-10 4.478-10 10v32.806h-24.765zm44.765 50.962v-22.805h98.568v22.806h-98.568zm-80.205 20v36.68h-50.511v-36.68zm365.489 313.846c0 11.833-9.626 21.459-21.459 21.459h-429.082c-11.833 0-21.459-9.626-21.459-21.459v-292.387c0-11.833 9.626-21.459 21.459-21.459h14.541v46.68c0 5.522 4.477 10 10 10h70.511c5.523 0 10-4.478 10-10v-46.68h218.979v46.68c0 5.522 4.477 10 10 10h70.51c5.523 0 10-4.478 10-10v-46.68h14.541c11.833 0 21.459 9.626 21.459 21.459z" />
													</g>
												</svg>
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Career and life coaching</h3>
											<p>We have developed this service used to benefit our clients with their career direction, college/education training, and job/employment preparation.</p>
											<Link to="/service-details" className="btn btn-primary light">Read More</Link>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx2 feature3">
										<div className="feature-box-xl mb-20">
											<span className="icon-cell">
												<svg enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg">
													<path d="m318.39 278.299h-39.263v-39.262h-46.254v39.262h-39.263v46.255h39.263v39.263h46.254v-39.263h39.263z" fill="#ffbdbc" />
													<g fill="#020288">
														<path d="m256 164.444c-75.533 0-136.983 61.45-136.983 136.982s61.45 136.983 136.983 136.983 136.983-61.45 136.983-136.982-61.45-136.983-136.983-136.983zm0 253.965c-64.504 0-116.983-52.479-116.983-116.982s52.479-116.983 116.983-116.983 116.983 52.479 116.983 116.982-52.479 116.983-116.983 116.983z" />
														<path d="m470.541 112.15h-100.492v-50.962c0-20.205-16.429-36.643-36.623-36.643h-154.853c-20.194 0-36.623 16.438-36.623 36.643v50.963h-100.491c-22.86-.001-41.459 18.598-41.459 41.458v292.387c0 22.86 18.599 41.459 41.459 41.459h429.082c22.86 0 41.459-18.599 41.459-41.459v-292.387c0-22.86-18.599-41.459-41.459-41.459zm-34.541 20v36.68h-50.511v-36.68zm-274.049-70.962c0-9.177 7.457-16.643 16.623-16.643h154.854c9.166 0 16.623 7.466 16.623 16.643v50.963h-24.765v-32.806c0-5.522-4.477-10-10-10h-118.57c-5.523 0-10 4.478-10 10v32.806h-24.765zm44.765 50.962v-22.805h98.568v22.806h-98.568zm-80.205 20v36.68h-50.511v-36.68zm365.489 313.846c0 11.833-9.626 21.459-21.459 21.459h-429.082c-11.833 0-21.459-9.626-21.459-21.459v-292.387c0-11.833 9.626-21.459 21.459-21.459h14.541v46.68c0 5.522 4.477 10 10 10h70.511c5.523 0 10-4.478 10-10v-46.68h218.979v46.68c0 5.522 4.477 10 10 10h70.51c5.523 0 10-4.478 10-10v-46.68h14.541c11.833 0 21.459 9.626 21.459 21.459z" />
													</g>
												</svg>
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Psychiatric consultation</h3>
											<p>Are also available to discuss issues related to medication.</p>
											<br/><br/>
											<Link to="/service-details" className="btn btn-primary light">Read More</Link>
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
}

export default Services;