import React, {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import LoadingComp from "../elements/loading";
import EmptyComp from "../elements/empyt";
import { Dcore } from '../../api';
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";




const Services = () => {
	const res = useSelector(state => state.servicesReducers.data);
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(res)
	}, [res])

	return (
		<>
			<Header />
			<div className="page-content bg-white page-min" style={{ marginTop: 100 }}>
				<div className="banner-wraper">
					<div className="page-" >
						<div className="container">
							<div className="page-banner-entry text-center">
								<h2 style={{ fontSize: 80 }}>Our Services</h2>
							</div>
						</div>
					</div>
				</div>
				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							{
								data?.length > 0 ?
									data?.map(el => (
										<div className="col-lg-4 col-md-6 mb-30 cardCont" style={{ overflow: "hidden" }}>

											<div className="feature-container feature-bx2" style={{ padding: 0 }}>
												<div style={{
													height: 200,
													overflow: "hidden"
												}}>
													<img style={{ minHeight: 200 }} src={Dcore.IMAGEURL + '/' + el?.image} alt="" />

												</div>
												<div className="icon-content" style={{ padding: 20, paddingBottom: 20 }}>
													<h5 className="ttr-title">{el?.title}</h5>
													<Link to={"/our-services/" + el?.title?.replaceAll(" ", "-").replaceAll('/', '') + '/' + el?._id} className="btn btn-primary light" style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}>Read More</Link>
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
