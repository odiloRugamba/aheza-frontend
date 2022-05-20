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

			<div className="page-content bg-white"  style={{ marginTop: 100 }}>

				<div className="banner-wraper">
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 300 }}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h3>All Services available in Rwanda</h3>
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
											<div className="feature-container feature-bx2" style={{padding: 0}}> 
												<div style={{
													height: 200,
													overflow: "hidden"
												}}>
													<img style={{minHeight: 200}} src={Dcore.IMAGEURL + '/' + el?.image} alt="" />

												</div>
												<div className="icon-content" style={{padding: 20, paddingBottom: 20}}>
													<h3 className="ttr-title">{el?.name}</h3>
													{/* <p>This clinic offers good services. you can reach out to them to find out more.</p> */}
													<Link to={"/other-institutions-services/" + el.name + '/' + el._id} className="btn btn-primary light">View More</Link>
												</div>
											</div>
										</div>
									)) : data?.length !== 0 ? <LoadingComp /> : <EmptyComp title="We have no services" />
							}
						</div>
					</div>
				</section>

			</div>

			<Footer />

		</>
	);
}

export default Services;