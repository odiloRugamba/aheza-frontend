import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogs } from "../../store/blog/actions";
import { useDispatch, useSelector } from "react-redux";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
// import bnrImg1 from "../../images/banner/img1.jpg";
// import waveBlue from "../../images/shap/wave-blue.png";
// import circleDots from "../../images/shap/circle-dots.png";
// import plusBlue from "../../images/shap/plus-blue.png";
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
import moment from 'moment';

// Blog Content
const content = [
	{
		thumb: blogGridPic1,
		authorPic: testPic1,
		title: "Why do I Feel Lonelier During The Holidays",
		author: "John deo",
		date: "21 July 2021",
	},
	{
		thumb: blogGridPic2,
		authorPic: testPic2,
		title: "Making Mental Health a Centerpiece of the Return to School",
		author: "Peter Packer",
		date: "20 July 2021",
	},
	{
		thumb: blogGridPic3,
		authorPic: testPic3,
		title: "Why do I Feel Lonelier During The Holidays",
		author: "Sonar Moyna",
		date: "19 July 2021",
	},
	{
		thumb: blogGridPic4,
		authorPic: testPic4,
		title: "Why do I Feel Lonelier During The Holidays",
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
		title: "Why do I Feel Lonelier During The Holidays?",
		author: "Peter Packer",
		date: "16 July 2021",
	},
	{
		thumb: blogGridPic7,
		authorPic: testPic1,
		title: "Why do I Feel Lonelier During The Holidays",
		author: "Sonar Moyna",
		date: "15 July 2021",
	},
	{
		thumb: blogGridPic8,
		authorPic: testPic2,
		title: "Why do I Feel Lonelier During The Holidays",
		author: "Kalina",
		date: "14 July 2021",
	},
	{
		thumb: blogGridPic9,
		authorPic: testPic3,
		title: "Why do I Feel Lonelier During The Holidays",
		author: "Michel",
		date: "13 July 2021",
	},
]

const BlogGrid = () => {
	const dispatch = useDispatch()
	const [data, setdata] = useState([])
	const dateFormat = moment().format('llll')

	const blogs = useSelector(state => state.BlogsReducers.data)

	useEffect(() => {
		console.log('holl')
		dispatch(getBlogs())
	}, [])

	useEffect(() => {
		console.log('dd', blogs)
		setdata(blogs)
	}, [blogs])

	return (
		<>
			<Header />

			<div className="page-content bg-white" style={{ marginTop: 60 }}>

				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							{data?.map((item) => (
								<div className="col-xl-4 col-md-6">
									<div className="blog-card mb-30">
										<div className="post-media" style={{ maxHeight: 210 }}>
											<Link to={"/blog-grid/" + item.title + '/' + item._id}><img src={testPic1} alt="" /></Link>
										</div>
										<div className="post-info">
											<h4 className="post-title max-lines-2"><Link to="/blog-details">{item.title}</Link></h4>

											<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
												<li className="date"><i className="far fa-calendar-alt"></i> {item.updatedAt}</li>

												<Link to="/blog-details" className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
											</ul>

										</div>
									</div>
								</div>
							))}
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

export default BlogGrid;


