import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import testShape from "../../images/testimonials/shape.png"
import testPic1 from "../../images/testimonials/pic1.jpg"
import testPic2 from "../../images/testimonials/pic2.jpg"
import testPic3 from "../../images/testimonials/pic3.jpg"
import testPic4 from "../../images/testimonials/pic4.jpg"
import testPic5 from "../../images/testimonials/pic5.jpg"
import testPic6 from "../../images/testimonials/pic6.jpg"
import plusOrange from "../../images/shap/plus-orange.png"
import squareBlue from "../../images/shap/square-blue.png"
import circleDots from "../../images/shap/circle-dots.png"
import circleOrange2 from "../../images/shap/circle-orange-2.png"


import blogDefaultPic1 from "../../images/blog/default/pic1.jpg";
import galleryPic2 from "../../images/gallery/pic2.jpg";
import galleryPic5 from "../../images/gallery/pic5.jpg";


class PartnersSection extends Component{
	
	render(){
			
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		
		return(
			<>
					
				
				<section className="section-area section-sp3 testimonial-wraper">
					<div className="container">
						<div className="heading-bx text-center">
							<h2 className="title m-b0">Partnership</h2>
						</div>
						<div className="row align-items-center">
							
							<div className="blog-card blog-single" style={{padding: 20}}>
										<div className="info-bx">
											<div className="ttr-post-text">
											<p>
												Aheza Healing and Career Center partner with a variety of organizations and businesses throughout 
												our community to raise awareness of, and offer adequate mental health care to the genocide survivors 
												for them to go on living productive, fulfilling lives free from trauma. Being a partner means supporting 
												programs that are dedicated to treat issues related to survivors mental health fitness, child abuse and 
												neglect, offering addiction treatment and recovery services, and provide mental health services.
											</p>
											<p>
											For more information about how your business or organization can become a partner <a href='/contact-us'>contact us.</a>
											</p>
											</div>
										</div>
									</div> 
						</div>	 
					</div>
					<img className="pt-img1 animate1" src={plusOrange} alt=""/>
					<img className="pt-img2 animate2" src={squareBlue} alt=""/>
					<img className="pt-img3 animate3" src={circleDots} alt=""/>
					<img className="pt-img4 animate4" src={circleOrange2} alt=""/>
				</section>
				
			</>
		);
	}
}

export default PartnersSection;