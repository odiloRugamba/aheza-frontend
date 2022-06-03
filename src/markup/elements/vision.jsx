import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import background from "../../images/background/aheza-bg-6.png"
import testShape from "../../images/testimonials/shape.png"
import testPic1 from "../../images/services/aheza/aheza-svc-14.jpeg"
import testPic2 from "../../images/services/aheza/aheza-svc-15.jpeg"
import testPic3 from "../../images/services/aheza/aheza-svc-3.jpeg"
import testPic4 from "../../images/services/aheza/aheza-svc-6.jpeg"
import testPic5 from "../../images/services/aheza/aheza-svc-10.jpeg"
import testPic6 from "../../images/services/aheza/aheza-svc-9.jpeg"
import logo from '../../images/logo-2.png';



class VisionSection extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
		};

		return (
			<>
				<section className="section-area section-sp1 testimonial-wraper" style={{ backgroundImage: "url(" + background + ")", backgroundSize: 'cover' }}>
					<div className="container">
						<div className="heading-bx text-center">
							<h1 className="title m-b0 gobalTitle">Vision</h1>
						</div>
						<div className="row align-items-center">
							<div className="col-lg-6">

								<div className="thumb-wraper">
									<img className="bg-img" src={testShape} alt="" />
									<ul>
										<li className='nthOne' data-member="1" style={{ border: "4px solid #f17732", borderRadius: 100 }}><Link to="#"><img src={testPic1} alt="" /></Link></li>
										<li className="nthTwo" data-member="2" style={{ border: "4px solid #f17732", borderRadius: 100 }}><Link to="#"><img src={testPic2} alt="" /></Link></li>
										<li className='nthThree' data-member="3" style={{ border: "4px solid #f17732", borderRadius: 100 }}><Link to="#"><img src={testPic3} alt="" /></Link></li>
										<li className='nthFour' data-member="4" style={{ border: "4px solid #f17732", borderRadius: 100 }}><Link to="#"><img src={testPic4} alt="" /></Link></li>
										<li className='nthFive' data-member="5" style={{ border: "4px solid #f17732", borderRadius: 100 }}><Link to="#"><img src={testPic5} alt="" /></Link></li>
										<li className='nthSix' data-member="6" style={{ border: "4px solid #f17732", borderRadius: 100 }}><Link to="#"><img src={testPic6} alt="" /></Link></li>
										<Link id='logoCont' to="/"><img className='logo' src={logo} alt="" /></Link>

									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="slider-item">
									<div className="testimonial-bx">
										<div className="testimonial-content">
											<p>
												<b style={{ color: "white", fontSize: 20 }}>
													Our vision is of a world where Rwandans receive
													the mental health care they need; and go on to live productive and
													fulfilling lives.
												</b>
											</p>
										</div>
										<div className="quote-icon">
											<i className="fas fa-quote-left"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <img className="pt-img1 animate1" src={plusOrange} alt=""/>
					<img className="pt-img2 animate2" src={squareBlue} alt=""/>
					<img className="pt-img3 animate3" src={circleDots} alt=""/>
					<img className="pt-img4 animate4" src={circleOrange2} alt=""/> */}
				</section>

			</>
		);
	}
}

export default VisionSection;