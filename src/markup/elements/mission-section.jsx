import React from 'react';
// Import Images
import background2 from "../../images/background/aheza-bg-9-4.jpeg"



const AboutSection = () => {


	return (
		<>
			<section className="section-area section-sp1 testimonial-wraper" style={{ paddingRight: 20 }}>
				<div className="heading-bx text-center" style={{ margin: 10, marginTop: 70 }}>
					<h1 className="title m-b0 title-80" >Mission</h1>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12" style={{ backgroundImage: "url(" + background2 + ")", backgroundSize: 'cover' }}>

					</div>
					<div className="col-lg-6 col-md-6 col-sm-12" style={{ marginTop: 10 }}>
						<div className="ttr-post-text missionText" style={{ padding: 10 }}>
						</div>
						<div className="slider-item">
							<div className="testimonial-bx mission-box">
								<div className="testimonial-content">
									<p>
										<b style={{ color: "white" }}>
											Aheza's mission is to listen, understand and support its clients.
										</b>
									</p>
									<p>
										<b style={{ color: "white" }}>
											Our qualified, trained staff are experienced in dealing with the full range of mental health conditions.
											We provide group therapy sessions; one-on-one counseling; and a range of holistic activities to compliment recovery.
										</b>

									</p>
									<p>
										<b style={{ color: "white" }}>
											We also provide career counseling and entrepreneurship training.
										</b>
									</p>
								</div>
								<div className="quote-icon-2">
									<i className="fas fa-quote-left"></i>
								</div>
							</div>
						</div>
					</div>
				</div>


			</section>
		</>
	);
}

export default AboutSection;
