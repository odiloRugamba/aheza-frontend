import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { useHistory, useParams } from "react-router-dom";



const ServicesSliderSection = () => {
let { lang } = useParams();


	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 591,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	};


	return (
		<>

			<section className="section-area section-sp1 service-wraper">
				<div className="row align-items-center">
					<div className="col-xl-4 col-lg-7 mb-30">
						<div className="heading-bx">
							<h2 className="title">Join our therapists network</h2>
							<p>Are you a certified therapist? Please contribute by joining our team to deliver services to those vulnerable in our community</p>
						</div>
						<Link to={`/${lang}`+"/apply"} className="btn btn-secondary btn-lg shadow">Apply</Link>
					</div>
					<div className="col-xl-8 mb-15">
						<Slider {...settings} className="service-slide slick-arrow-none">

							<div className="slider-item">
								<div className="feature-container feature-bx2 feature1">
									<div className="feature-box-xl mb-30">
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
										<h5 className="ttr-title">Apply</h5>
										<p>You can directly apply on our website or call (+250) 788 315 809.</p>
									</div>
								</div>
							</div>


							<div className="slider-item">
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
										<h3 className="ttr-title">Vetting</h3>
										<p>Our vetting team will contact you to start the process as soon as possible.</p>

									</div>
								</div>
							</div>
							<div className="slider-item">
							</div>

						</Slider>
					</div>
				</div>
			</section>

		</>
	);
}

export default ServicesSliderSection;