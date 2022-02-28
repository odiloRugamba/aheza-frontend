import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getResearchs } from "../../store/research/actions";
import LoadingComp from "../elements/loading";
import ReactPaginate from "react-paginate";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import waveBlue from "../../images/shap/wave-blue.png";
import bnrImg1 from "../../images/banner/img1.jpg";
import plusBlue from "../../images/shap/plus-blue.png";


// Import Images
import testPic1 from "../../images/testimonials/pic1.jpg";
import testPic2 from "../../images/testimonials/pic2.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
import testPic4 from "../../images/testimonials/pic4.jpg";
import blogGridPic1 from "../../images/blog/grid/pic1.jpg";
import blogGridPic2 from "../../images/blog/grid/pic2.jpg";
import blogGridPic3 from "../../images/blog/grid/pic3.jpg";
import blogGridPic4 from "../../images/blog/grid/pic4.jpg";

// Blog Content

const content = [
	{
		thumb: blogGridPic1,
		authorPic: testPic1,
		title: "1Dental Care for Women is very important",
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
	}
]
const ResearchFindings = () => {

	const [data, setData] = useState([])
	const [pageData, setPageData] = useState([])
	const [PageCount, setPageCount] = useState(10)
	const dispatch = useDispatch()
	const research = useSelector(state => state.ResearchReducers.data)
	const postPerPage = 12

	useEffect(() => {
		dispatch(getResearchs())
	}, [])

	useEffect(() => {
		setData(research)
		setPageCount(content.length / postPerPage)
		setPageData(content.slice(0, postPerPage))
	}, [research])
	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da}-${mo}-${ye}`
	}
	const changePage = (page) => {
		const endingPoint = (page.selected + 1) * postPerPage
		const statingPoint = endingPoint - postPerPage
		setPageData(null)
		setPageData(content.slice(statingPoint, endingPoint))
	}
	return (
		<>

			<Header />

			<div className="page-content bg-white" style={{ marginTop: 40 }}>
				<div className="banner-wraper" >
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 300 }} >
						<div className="container">
							<div className="page-banner-entry text-center">
								<h2>Research</h2>
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

							{research?.length ?
								research?.map((item) => (
									<div className="col-xl-4 col-md-6">
										<div className="blog-card mb-30">
											<div className="post-media" style={{ maxHeight: 210 }}>
												<Link to={"/research-finding/" + item.title + '/' + item._id}><img src={item.image} alt="" /></Link>
											</div>
											<div className="post-info">
												<h4 className="post-title max-lines-2" style={{ fontSize: 16 }}><Link to={"/research-finding/" + item.title + '/' + item._id} >{item.title}</Link></h4>
												<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
													<li className="date"><i className="far fa-calendar-alt"></i> {
														convertData(item?.updatedAt)
													}</li>

													<Link to={"/research-finding/" + item.title + '/' + item._id} className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
												</ul>
											</div>
										</div>
									</div>
								)) : <LoadingComp />
							}

							{/* {pageData?.map((item) => (
								<div className="col-xl-4 col-md-6">
									<div className="blog-card mb-30">
										<div className="post-media" style={{ maxHeight: 210 }}>
											<Link ><img src={item.thumb} alt="" /></Link>
										</div>
										<div className="post-info">
											<h4 className="post-title max-lines-2" style={{ fontSize: 16 }}><Link>{item.title}</Link></h4>
											<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
												<li className="date"><i className="far fa-calendar-alt"></i>73.33,3030</li>

												<Link className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
											</ul>
										</div>
									</div>
								</div>
							))
							} */}
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="pagination-bx text-center mb-30 clearfix">
									<ul className="pagination">
										<ReactPaginate
											previousLabel="Prev"
											nextLabel="Next"
											pageCount={PageCount}
											onPageChange={(page) => { changePage(page) }}
											containerClassName="paginationCont pointer"
											previousClassName="previous AllPbtn pointer"
											nextClassName='next AllPbtn pointer'
											pageClassName="PBtns AllPbtn pointer"
											activeClassName="BtnActive pointer"
											pageRangeDisplayed={3}

										/>
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

export default ResearchFindings;
