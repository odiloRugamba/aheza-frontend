import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getUploads } from "../../store/uploads/actions";
import LoadingComp from "../elements/loading";
import ReactPaginate from "react-paginate";
import EmptyComp from "../elements/empyt";
import { getLinks } from "../../store/links/actions";

import { getUploads } from '../../store/uploads/actions';


import { Dcore } from "../../api/index";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/aheza-barnner-5.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import plusBlue from "../../images/shap/plus-blue.png";

const Uploads = () => {
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.linksReducers.data)
	const postPerPage = 12
	const [PageCount, setPageCount] = useState(10)
	const [pageData, setPageData] = useState([])
	const [uploads, setUploads] = useState([])

    const uploadsData = useSelector(state => state.UploadsReducers?.data)


	useEffect(() => {
		dispatch(getLinks())
		dispatch(getUploads())
	}, [])

	useEffect(() => {
		setData(res)
		setPageCount(res?.length / postPerPage)
		setPageData(res?.slice(0, postPerPage))
		console.log(res)
        setUploads(uploadsData)
	}, [res, uploadsData])

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
		setPageData(res.slice(statingPoint, endingPoint))
	}

	const openNewWindow = (link) => {
		window.open(link)
	}

	const routeChange = (link) => {
		const rouLink = link.split('/')[2]
		console.log(rouLink)
		window.open('https:' + rouLink)
	}


	const getVideoId = (url) => {
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return (match && match[7].length == 11) ? match[7] : false;
	}


	return ( 
		<>

			<Header />

			<div className="page-content bg-white" style={{ marginTop: 100 }}>

				<div className="banner-wraper" >
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", height: 300}} >
						<div className="container">
							<div className="page-banner-entry text-center">
								<h2 style={{ fontSize: 80, paddingBottom: 50, color: "#fff" }}>News</h2>
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
											<div className="post-media" style={{ maxHeight: 210, height: 210 }}>
												<a onClick={() => openNewWindow(item.link)}>
													<img src={Dcore.IMAGEURL + '/' + item.image} alt="" />
												</a>
											</div>
											<div className="post-info" >
												{/* <h6 className="post-title max-lines-2"><a onClick={() => openNewWindow(item.link)}>{item.title}</a></h6> */}
												<p className="post-title max-lines-2" style={{ "-webkit-line-clamp": 3 }}>
													<a onClick={() => openNewWindow(item.link)} style={{ fontSize: 15, fontFamily: 700 }}>{item?.title}</a>
												</p>
												<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
													<li onClick={() => { routeChange(item.link) }} className="date" style={{ cursor: 'pointer' }}>
														{/* <i className="fa fa-user"></i> */}
														{item.publisherName}
														<br></br>
														<h5 style={{fontSize: 15}}>{convertData(item.updatedAt)} </h5>
													</li>
													{/* <a onClick={() => openNewWindow(item.link)} className="btn btn-outline-primary btn-sm">Read More </a> */}
													<a onClick={() => openNewWindow(item.link)} className="btn btn-outline-primary btn-sm" style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}>Read More </a>
												</ul>
											</div>
										</div>
									</div>
								)) : pageData?.length !== 0 ? <LoadingComp /> : <EmptyComp title="We have no media section for now" />
							}
							{
							uploads?.map(item =>
							<div className="col-xl-4 col-md-6">
										<div className="blog-card mb-30">
											<div className="post-media">
												<Link to={"/upload/" + item.title?.replaceAll(" ", "-") + '/' + item?._id}>
													{
														item?.youtubeVideoLink ?
															<img src={`http://img.youtube.com/vi/${getVideoId(item?.youtubeVideoLink)}/0.jpg`} alt="" />
															: <img src={item.image} alt="" />
													}
												</Link>
											</div>
											<div className="post-info">
												<h6 className="post-title max-lines-2"><Link to={"/upload/" + item.title?.replaceAll(" ", "-") + '/' + item?._id}>{item.title}</Link></h6>

												<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
												<li className="date" onClick={() => { routeChange(Dcore.WEBURL) }}>
														Aheza
														<br></br>
														<h5 style={{fontSize: 15}}>{convertData(item.updatedAt)} </h5>
													</li>

													<Link style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }} to={"/upload/" + item.title?.replaceAll(" ", "-") + '/' + item?._id} className="btn btn-outline-primary btn-sm">Read More</Link>
												</ul>

											</div>
										</div>
									</div> 
						) 
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

export default Uploads;
