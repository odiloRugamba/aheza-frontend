import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getTipsFunc } from "../../store/tips/actions";
import bg1 from '../../images/main-banner/barner.jpeg';
import { useHistory, useParams } from "react-router-dom";
import { FormattedMessage } from 'react-intl';





const AboutSection = () => {
	const [slideIndex, setSlideIndex] = useState(0)
	let { lang } = useParams();
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.TipsReducers.data)

	const privFunc = () => {
		if (slideIndex !== 0) {
			setSlideIndex(slideIndex - 1)
		}
	}

	useEffect(() => {
		if (res) {
			const all = [res.title, ...res.tips];
			setData(all)
		}

	}, [res])
	useEffect(() => {
		dispatch(getTipsFunc())
	}, []);

	const nextFunc = () => {
		if (slideIndex < data.length - 1) {
			setSlideIndex(slideIndex + 1)
		}
	}


	return (
		<>
			<div className="main-banner" style={{ backgroundImage: "url(" + bg1 + ")", marginTop: 100 }}>
				<div style={{
					backgroundColor: "rgba(255,255,255,0)",
					height: "100%",
					paddingTop: 20,
					paddingBottom: 30,
				}}>
					<div className="container inner-content">
						<div className="row align-items-center">
							<div className="col-lg-11 col-md-12 col-sm-12">
								<br></br>
								<br></br>
								<br></br>
								<br></br>
								<br></br>
								<br></br>
								<h2 style={{ color: '#f17732' }}>"
								<FormattedMessage id="homeContent" defaultMessage="homeContent" />
								." </h2>
								<h6 style={{ textAlign: "center" }}><span style={{ fontSize: 20, color: '#f17732' }}>Angelique Kidjo</span></h6>

								<Link to={lang + "/appointment-assesement" }className="btn btn-secondary  shadow"><b style={{ color: "white", fontSize: 20 }}>
								 			<FormattedMessage id="BookAppointment" defaultMessage="BookAppointment" />
									</b></Link>
								<br></br>
								<br></br>
								<br></br>
								<br></br>
							</div>


						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutSection;