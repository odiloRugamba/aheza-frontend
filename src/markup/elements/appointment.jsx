import React, { Component } from 'react';

// Images
import lineBg from '../../images/appointment/line-bg.png';
import appMobile from '../../images/appointment/mobile.png';
import appWomen from '../../images/appointment/women.png';
import appMapPin from '../../images/appointment/map-pin.png';
import appSetting from '../../images/appointment/setting.png';
import appCheck from '../../images/appointment/check.png';
import appChat from '../../images/appointment/chat.png';
import ptImg1 from '../../images/shap/trangle-orange.png';
import ptImg2 from '../../images/shap/wave-orange.png';
import ptImg3 from '../../images/shap/wave-blue.png';
import ptImg4 from '../../images/shap/circle-orange.png';

const AboutSection = () => {

	return (
		<>
			<section className="section-area account-wraper1">
				<div className="container-fluid" style={{ paddingTop: 100 }}>
					<div className="appointment-inner section-sp2" style={{ backgroundImage: "url(" + lineBg + ")", backgroundRepeat: " no-repeat", backgroundPosition: "20px 140px" }}>
						<div className="container">
							<div className="rowAppo">
								<div className="col-xl-8 col-lg-12 col-md-12">
									<div className="appointment-form form-wraper">
										<h3 className="title">Book Appointment</h3>
										<form action="#">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="First Name" />
												<input type="text" className="form-control" placeholder="last Name" />
											</div>
											<div className="form-group">
												<select className="form-select form-control">
													<option selected>Gender </option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
												<input type="date" className="form-control" placeholder='date of Birth' />
											</div>
											<div className="form-group">
												<select className="form-select form-control">
													<option selected>Select Day</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
												<select className="form-select form-control">
													<option selected>Select Doctor</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>

											<div className="form-group">
												<input type="number" className="form-control" placeholder="Phone Numbers" />
												<input type="number" className="form-control" placeholder="Insurance  ID" />
											</div>
											<div className="form-group">
												<input type="email" className="form-control" placeholder="ID" />
												<input type="email" className="form-control" placeholder="Email" />
											</div>
											{/* <div className="form-group">
												<input type="date" className="form-control" />
											</div> */}
											<button type="submit" className="btn btn-secondary btn-lg">Appointment Now</button>
										</form>
									</div>
								</div>
								<div className="col-xl-2 col-lg-6 col-md-6">
									<div className="appointment-thumb">
										<img src={appMobile} alt="" />
										<div className="images-group">
											<img className="img1" src={appWomen} alt="" />
											<img className="img2" src={appMapPin} alt="" />
											<img className="img3" src={appSetting} alt="" />
											<img className="img4" src={appCheck} alt="" />
											<img className="img5" src={appChat} alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <img className="pt-img1 animate1" src={ptImg1} alt="" /> */}
						{/* <img className="pt-img2 animate-wave" src={ptImg2} alt=""/>
							<img className="pt-img3 animate-wave" src={ptImg3} alt=""/> */}
						{/* <img className="pt-img4 animate2" src={ptImg4} alt=""/> */}
					</div>

				</div>
			</section>

		</>
	);
}

export default AboutSection;