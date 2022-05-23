import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets';
import { FacebookProvider, Page } from 'react-facebook';
import InstagramEmbed from 'react-instagram-embed';

// Import Images
import lingBg2 from "../../images/background/line-bg2.png"
import animate1 from "../../images/shap/trangle-orange.png"
import animate2 from "../../images/shap/square-dots-orange.png"
import animateRotate from "../../images/shap/line-circle-blue.png"
import animateWave from "../../images/shap/wave-blue.png"

const SocialMediaSection = ({ title }) => {


	return (
		<>

			<section className="section-area section-sp1 blog-area" style={{ backgroundImage: "url(" + lingBg2 + ")", backgroundPosition: "center", backgroundSize: "cover", }}>
				<div className="container">
					<div className="heading-bx text-center">
						<h6 className="title-ext text-secondary">Follow us on social media</h6>
						{/* <h2 className="title">Follow us on social media</h2> */}
					</div>
					<div className='row'>
						<div className="col-xl-4 col-md-6">
							<Timeline
								dataSource={{
									sourceType: 'url',
									url: "https://twitter.com/Ahezahcenter?s=20&t=xXTCtFMnP5fGt0anSGLcoQ",
									screenName: 'TwitterDev'
								}}
								options={{
									height: '520'
								}}
							/>
						</div>
						<div className="col-xl-4 col-md-6">
							<FacebookProvider appId="513240330217367" >
								<Page href="https://www.facebook.com/Ahezahcenter/" tabs="timeline" />
							</FacebookProvider>
						</div>
						<div className="col-xl-4 col-md-6">
							<FacebookProvider appId="513240330217367" >
								<iframe src="https://widget.taggbox.com/90245" style={{ height: 530, width: 360 }}></iframe>
							</FacebookProvider>
						</div>
					</div>

				</div>
				{/* <img className="pt-img1 animate1" src={animate1} alt="" />
				<img className="pt-img2 animate2" src={animate2} alt="" />
				<img className="pt-img3 animate-rotate" src={animateRotate} alt="" />
				<img className="pt-img4 animate-wave" src={animateWave} alt="" /> */}
			</section>

		</>
	);

}

export default SocialMediaSection;