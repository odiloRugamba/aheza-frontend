import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getResearchs } from "../../store/research/actions";
import LoadingComp from "../elements/loading";
import ReactPaginate from "react-paginate";
import EmptyComp from "../elements/empyt";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer"; 

import bnrImg1 from "../../images/banner/aheza-barnner-2.jpg";


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
		setPageCount(research?.length / postPerPage)
		setPageData(research?.slice(0, postPerPage))
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
		setPageData(research.slice(statingPoint, endingPoint))
	}

	return (
		<>
			<Header />
			<div className="page-content bg-white" style={{marginTop: 100}}>
				<div className="banner-wraper" >
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 400 }} >
						<div style={{ paddingTop: 40, backgroundColor: "rgba(255,255,255,0.7)" }}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h2 style={{ fontSize: 80, paddingBottom: 50 }}>Research</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							{pageData?.length ?
								pageData?.map((item) => (
									<div className="col-xl-4 col-md-6">
										<div className="blog-card mb-30">
											<div className="post-media" style={{ maxHeight: 210 }}>
												<Link to={"/research-finding/" + item.title?.replaceAll(" ", "-") + '/' + item._id}><img src={item.image} alt="" /></Link>
											</div>
											<div className="post-info">
												<p className="post-title max-lines-2" style={{ fontSize: 16 }}><Link to={"/research-finding/" + item.title?.replaceAll(" ", "-") + '/' + item._id} >{item.title}</Link></p>
												<ul className="post-meta" style={{ justifyContent: 'space-between' }}>

													<Link style={{ background: '#565ACF', color: '#fff', fontSize: 15, fontWeight: 600 }} to={"/research-finding/" + item.title?.replaceAll(" ", "-") + '/' + item._id} className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
													<li className="date"><i className="far fa-calendar-alt"></i> {
														convertData(item?.updatedAt)
													}</li>
												</ul>
											</div>
										</div>
									</div>
								)) : pageData?.length !== 0 ? <LoadingComp /> : <EmptyComp title="We have no Research for now" />
							}
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="pagination-bx text-center mb-30 clearfix">
									<ul className="pagination">
										{
											pageData?.length && data?.length > postPerPage ? <ReactPaginate
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

export default ResearchFindings;
