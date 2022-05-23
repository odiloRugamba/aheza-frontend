import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../store/services/actions";
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
	const res = useSelector(state => state.servicesReducers.data);
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(res)
		console.log(res)
	}, [res])

	return (
		<>
			<Header />
			<div className="page-content bg-white" style={{ marginTop: 100 }}>
				<div className="banner-wraper">
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 300 }}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h2 style={{ fontSize: 80, paddingBottom: 50 }}>Our Services</h2>
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
								data?.length > 0 ?
									data?.map(el => (
										<div className="col-lg-4 col-md-6 mb-30" style={{ overflow: "hidden" }}>

											<div className="feature-container feature-bx2" style={{ padding: 0 }}>
												<div style={{
													height: 200,
													overflow: "hidden"
												}}>
													<img style={{ minHeight: 200 }} src={Dcore.IMAGEURL + '/' + el?.image} alt="" />

												</div>
												<div className="icon-content" style={{ padding: 20, paddingBottom: 20 }}>
													<h5 className="ttr-title">{el?.title}</h5>
													<Link to={"/our-services/" + el?.title?.replaceAll(" ", "-") + '/' + el?._id} className="btn btn-primary light">Read More</Link>
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