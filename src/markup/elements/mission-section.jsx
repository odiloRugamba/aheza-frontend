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
				<div className="col-lg-6 col-md-6 col-sm-12" style={{padding: 0, backgroundColor: "#565acf"}}>
					<div style={{padding: 50}}>
						<img src={image1} style={{ width: "100%", borderRadius: 20}}></img>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12" style={{ marginTop: 10 }}>
					<div className="ttr-post-text" style={{padding: 30}}>
						<p>
							Here at Aheza, we understand that people were affected by the 1994 Genocide in many ways.
							Some suffer severe post-traumatic stress as a result of the events they witnessed,
							many are struggling with grief at the loss of friends and family, some turn to alcohol
							and drugs to cope with that loss.
						</p>
						<p>
							Even those who have successful careers and families of their own might experience depression
							or unwanted thoughts from time to time.
						</p>
						<p>
							Aheza is a safe space for anyone who needs a little support. Our qualified, trained staff are experienced
							in dealing with the full range of mental health conditions. We provide group therapy sessions;
							one-on-one counseling;  and a range of holistic activities to compliment your recovery.
						</p>
						<p>
							We also provide career counseling and entrepreneur training. Many clients find it difficult to secure a job and
							remain in work due to mental and physical health issues. We assist clients who are ready to work towards the
							future, helping them to build skills and find a fulfilling career. Our job is to listen, understand and support.
						</p>
					</div>
				</div>
				
				
			</section>
		</>
	);
}

export default AboutSection;
