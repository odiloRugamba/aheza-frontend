import React, { Component, useState, useEffect } from 'react';
// Import Images
import bg1 from '../../images/background/line-bg1.png';
import image1 from '../../images/services/aheza/aheza-svc-15.jpeg'



const AboutSection = () => {


	return (
		<>

			<section className="section-area section-p5 mission-wraper  row" style={{}}>
				<div className="heading-bx text-center">
					<h1 className="title m-b0" style={{ fontSize: 80 }}>Mission</h1>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12" style={{ padding: 0, backgroundColor: "#565acf" }}>
					<div style={{ padding: 50 }}>
						<img src={image1} style={{ width: "100%", borderRadius: 20 }}></img>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12" style={{ marginTop: 10 }}>
					<div className="ttr-post-text missionText" style={{ padding: 30 }}>
						<p>
							Many Rwandans were affected by the 1994 Genocide against the Tutsi. For example, some Rwandans suffer from severe post-traumatic stress disorder; and some are struggling with grief due to the loss of their family and friends. Even, some have turned to alcohol and others drugs to cope.
						</p>
						<p>
							Even those who have successful careers and strong support systems experience depression or unwanted thoughts from time to time.

						</p>
						<p>
							Aheza is a safe space for anyone who needs a little support. Our qualified, trained staff are experienced in dealing with the full range of mental health conditions. We provide group therapy sessions; one-on-one counseling; and a range of holistic activities to compliment your recovery.
						</p>
						<p>
							We also provide career counseling and entrepreneurship training.
						</p>
						<p>
							Our job is to listen, understand and support.
						</p>
					</div>
				</div>


			</section>
		</>
	);
}

export default AboutSection;
