import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHospitalById } from "../../store/hospital/actions";
import { Dcore } from '../../api';
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";


const ServiceDetail = () => {
	const [hospital, setHospital] = useState(null)
	const dispatch = useDispatch();
	const { id } = useParams()
	const response = useSelector(state => state?.HospitalReducers?.hospital)
	let { lang } = useParams();


	useEffect(() => {
		dispatch(getHospitalById(id))
	}, [])

	useEffect(() => {
		setHospital(response)
	}, [response])

	return (
		<>

			<Header />
			<div className="page-content bg-white" style={{ marginTop: 60 }}>
				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 mb-30">
								<div className="post-media">
									<img style={{ width: "100%", marginBottom: 30 }} src={Dcore.IMAGEURL + "/" + hospital?.image} alt="" />
								</div>
								<div className="clearfix">
									<div className="head-text mb-30">
										<h2 className="title mb-15">{hospital?.name}</h2>
									</div>
								</div>
								<div>
									<div dangerouslySetInnerHTML={{ __html: hospital?.content }}></div>
								</div>
							</div>
							<div className="col-lg-4">
								<aside className="sticky-top pb-1">
									<div className="widget">

										<h5 className="title-head">Services offered</h5>
										<ul className="service-menu">
											{
												hospital?.services.map(el =>
													<li><Link to={`/${lang}`+"/service-details"}><span>{el}</span></Link></li>
												)
											}
										</ul>
									</div>
								</aside>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}

export default ServiceDetail;