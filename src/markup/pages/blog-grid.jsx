import React, { Component, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBlogs } from "../../store/blog/actions";
import { useDispatch, useSelector } from "react-redux";
import LoadingComp from "../elements/loading";
import ReactPaginate from "react-paginate";
import EmptyComp from "../elements/empyt";
import { Dcore } from '../../api';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

import moment from 'moment';



import bnrImg1 from "../../images/banner/aheza-barnner-16.jpeg";


const BlogGrid = () => {
	const dispatch = useDispatch()
	const [data, setdata] = useState([])
	const dateFormat = moment().format('llll')
	const postPerPage = 9
	const [PageCount, setPageCount] = useState(10)
	const [pageData, setPageData] = useState([])
	const blogs = useSelector(state => state.BlogsReducers.data)
	const {lang}= useParams()

	useEffect(() => {
		dispatch(getBlogs())
	}, [])

	useEffect(() => {
		setdata(blogs)
		setPageCount(blogs?.length / postPerPage)
		setPageData(blogs?.slice(0, postPerPage))
	}, [blogs])

	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da} ${mo} ${ye}`
	}
	const changePage = (page) => {
		const endingPoint = (page.selected + 1) * postPerPage
		const statingPoint = endingPoint - postPerPage
		setPageData(null)
		setPageData(blogs.slice(statingPoint, endingPoint))
	}
	const routeChange = (link) => {
		const rouLink = link.split('/')[2]
		const httpLink = link.split('/')[0]
		window.open(`${httpLink}//${rouLink}`, '_blank')
	}

	return (
		<>
			<Header />

			<div className="page-content bg-white" style={{ marginTop: 100 }}>
				<div className="banner-wraper" >
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", height: 300 }} >
						<div style={{ paddingTop: 40 }}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h2 className='title-80' style={{ paddingBottom: 50, color: "white" }}>Blog</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							{pageData?.length > 0 ?
								pageData?.map((item) => (
									<div className="col-xl-4 col-md-6">
										<div className="blog-card mb-30">
											<div className="post-info">
												<h6 className="post-title max-lines-1"><Link to={`/${lang}`+"/blog-grid/" + item.title?.replaceAll(" ", "-") + '/' + item._id}>{item.title}</Link></h6>

												<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
													<li onClick={() => { routeChange(item.link) }} className="date" style={{ cursor: 'pointer' }}>
														Aheza<br></br>
														<h5 style={{ fontSize: 15 }}>{convertData(item.updatedAt)} </h5>
													</li>
													<Link to={`/${lang}`+"/blog-grid/" + item.title?.replaceAll(" ", "-") + '/' + item._id} className="btn btn-outline-primary btn-sm" style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}>Read More </Link>
												</ul>
											</div>
										</div>
									</div>
								)) : pageData?.length !== 0 ? <LoadingComp /> : <EmptyComp title="We have no blogs for now" />
							}
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="pagination-bx text-center mb-30 clearfix">
									<ul className="pagination">
										{
											pageData?.length && data?.length > postPerPage ?
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
												/> : null
										}
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


