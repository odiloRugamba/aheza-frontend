import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHospitals } from "../../store/hospital/actions";
import LoadingComp from "../elements/loading";
import EmptyComp from "../elements/empyt";
import { Dcore } from '../../api';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

const Services = () => {

	const [data, setData] = useState(null);
	const dispatch = useDispatch();
	const response = useSelector(state => state?.HospitalReducers?.data)

	useEffect(() => {

		dispatch(getHospitals())
	}, []);

	useEffect(() => {
		setData(response)
	}, [response]);

	return (
		<>

			<Header />

			{/* <div className="page-content bg-white" style={{ marginTop: 100 }}>
				<div className="banner-wraper">
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 300 }}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h3 style={{ fontSize: 80, paddingBottom: 50 }}>All Services available in Rwanda</h3>
							</div>
						</div>
						<img className="pt-img1 animate-wave" src={waveBlue} alt="" />
						<img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
					</div>
				</div>

				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							{
								data?.length ?
									data?.map(el => (
										<div className="col-lg-4 col-md-6 mb-30">
											<div className="feature-container feature-bx2" style={{ padding: 0 }}>
												<div style={{
													height: 200,
													overflow: "hidden"
												}}>
													<img style={{ minHeight: 200 }} src={Dcore.IMAGEURL + '/' + el?.image} alt="" />

												</div>
												<div className="icon-content" style={{ padding: 20, paddingBottom: 20 }}>
													<h3 className="ttr-title">{el?.name}</h3>
													<Link style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }} to={"/other-institutions-services/" + el.name + '/' + el._id} className="btn btn-primary light">View More</Link>
												</div>
											</div>
										</div>
									)) : data?.length !== 0 ? <LoadingComp /> : <EmptyComp title="We have no services" />
							}
						</div>
					</div>
				</section>

			</div> */}
			<div className="page-content bg-white" style={{ marginTop: 100 }}>
				<div className="banner-wraper">
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
						<div className="container">
							<div className="page-banner-entry text-center">
								{/* <h1>Page Not Found</h1> */}
								<h1>Page is development process</h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
										{/* <li className="breadcrumb-item active" aria-current="page">Page Not Found</li> */}
										<li className="breadcrumb-item active" aria-current="page">Development process</li>
									</ul>
								</nav>
							</div>
						</div>
						<img className="pt-img1 animate-wave" src={waveBlue} alt="" />
						<img className="pt-img2 animate2" src={circleDots} alt="" />
						<img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
					</div>
				</div>
				<section className="section-area section-sp2 error-404">
					<div className="container">
						<div className="inner-content">
							{/* <h2 className="error-title">4<span></span>4</h2>
							<h3 className="error-text">The Page you were looking for, couldn't be found.</h3>
							<p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p> */}
							<div className="clearfix">
								<Link to="/" className="btn btn-primary m-r5">Back</Link>
								<Link to="/" className="btn btn-primary">Back To Home</Link>
							</div>
						</div>
					</div>
				</section>

			</div>

			<Footer />

		</>
	);
}

export default Services;