import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStorys } from "../../store/story/actions";
import LoadingComp from "../elements/loading";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
// import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import testPic1 from "../../images/testimonials/pic1.jpg";
import testPic2 from "../../images/testimonials/pic2.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
import testPic4 from "../../images/testimonials/pic4.jpg";
import testPic5 from "../../images/testimonials/pic5.jpg";
import testPic6 from "../../images/testimonials/pic6.jpg";
import blogGridPic1 from "../../images/blog/grid/pic1.jpg";
import blogGridPic2 from "../../images/blog/grid/pic2.jpg";
import blogGridPic3 from "../../images/blog/grid/pic3.jpg";
import blogGridPic4 from "../../images/blog/grid/pic4.jpg";
import blogGridPic5 from "../../images/blog/grid/pic5.jpg";
import blogGridPic6 from "../../images/blog/grid/pic6.jpg";
import blogGridPic7 from "../../images/blog/grid/pic7.jpg";
import blogGridPic8 from "../../images/blog/grid/pic8.jpg";
import blogGridPic9 from "../../images/blog/grid/pic9.jpg";

// Blog Content
const content = [
	{
		thumb: blogGridPic1,
		authorPic: testPic1,
		title: "Dental Care for Women is very important",
		author: "John deo",
		date: "21 July 2021",
	},
	{
		thumb: blogGridPic2,
		authorPic: testPic2,
		title: "In this hospital there are special surgeon",
		author: "Peter Packer",
		date: "20 July 2021",
	},
	{
		thumb: blogGridPic3,
		authorPic: testPic3,
		title: "Why Is Skin Surgeon Considered Underrated",
		author: "Sonar Moyna",
		date: "19 July 2021",
	},
	{
		thumb: blogGridPic4,
		authorPic: testPic4,
		title: "Understand Health Before You Regret",
		author: "Kalina",
		date: "18 July 2021",
	},
	{
		thumb: blogGridPic5,
		authorPic: testPic5,
		title: "Health Will Be A Thing Of The Past And Here",
		author: "Michel",
		date: "17 July 2021",
	},
	{
		thumb: blogGridPic6,
		authorPic: testPic6,
		title: "Can you get a diflucan prescription online?",
		author: "Peter Packer",
		date: "16 July 2021",
	},
	{
		thumb: blogGridPic7,
		authorPic: testPic1,
		title: "Ten Gigantic Influences Of Health",
		author: "Sonar Moyna",
		date: "15 July 2021",
	},
	{
		thumb: blogGridPic8,
		authorPic: testPic2,
		title: "Why Is Skin Surgeon Considered Underrated",
		author: "Kalina",
		date: "14 July 2021",
	},
	{
		thumb: blogGridPic9,
		authorPic: testPic3,
		title: "Everyone need to go Dentist regularly",
		author: "Michel",
		date: "13 July 2021",
	},
]

const StoriesGrid = () => {
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.StorysReducers.data)
	// const response = useSelector(state => state?.HospitalReducers?.data)

	useEffect(() => {
		dispatch(getStorys())
	}, []);

	useEffect(() => {
		setData(res)
	}, [res])

	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da}-${mo}-${ye}`
	}


	return (
		<>

			<Header />

			<div className="page-content bg-white">

				<div className="banner-wraper" >
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 300 }} >
						<div className="container">
							<div className="page-banner-entry text-center">
								<h2>Stories</h2>
							</div>
						</div>
						<img className="pt-img1 animate-wave" src={waveBlue} alt="" />
						{/* <img className="pt-img2 animate2" src={circleDots} alt="" /> */}
						<img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
					</div>
				</div>

				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							{data?.length > 0 ?
								data?.map((item) => (
									<div className="col-xl-4 col-md-6">
										<div className="blog-card mb-30">
											<div className="post-media" style={{ maxHeight: 210 }}>
												<Link to={"/story/" + item.title + '/' + item._id}><img src={item.image} alt="" /></Link>
											</div>
											<div className="post-info">
												<h4 className="post-title"><Link to={"/story/" + item.title + '/' + item._id}>{item.title}</Link></h4>

												<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
													<li className="date"><i className="far fa-calendar-alt"></i>
														{convertData(item.updatedAt)}
													</li>

													<Link to={"/story/" + item.title + '/' + item._id} className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
												</ul>

											</div>
										</div>
									</div>
								)) : <LoadingComp />
							}
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="pagination-bx text-center mb-30 clearfix">
									<ul className="pagination">
										<li className="previous"><Link to="#">Prev</Link></li>
										<li className="active"><Link to="#">1</Link></li>
										<li><Link to="#">2</Link></li>
										<li><Link to="#">3</Link></li>
										<li className="next"><Link to="#">Next</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>

			<Footer />

		</>
	);
}

export default StoriesGrid;
