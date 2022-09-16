import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getTheater } from "../../store/theater/actions";
import LoadingComp from "../elements/loading";
import ReactPaginate from "react-paginate";
import EmptyComp from "../elements/empyt";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/aheza-barnner-3.jpeg";




const Uploads = () => {
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.TheaterReducers.data)
	const postPerPage = 12
	const [PageCount, setPageCount] = useState(10)
	const [pageData, setPageData] = useState([])


	useEffect(() => {
		dispatch(getTheater())
	}, [])

	useEffect(() => {
		setData(res)
		setPageCount(res?.length / postPerPage)
		setPageData(res?.slice(0, postPerPage))
	}, [res])

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
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", height: 300 }} >
						<div className="" style={{ backgroundColor: "rgba(255,255,255,.5)", textAlign: "center" }}>
							<div className="page-banner-entry text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<h2 className='text-center title title-80' style={{ paddingBottom: 50, textAlign: 'center' }}>Theaters</h2>
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
											<div className="post-media">
												<Link to={"/theater/" + item.title?.replaceAll(" ", "-") + '/' + item?._id}>
													{
														item?.youtubeVideoLink ?
															<img src={`http://img.youtube.com/vi/${getVideoId(item?.youtubeVideoLink)}/0.jpg`} alt="" />
															: <img src={item.image} alt="" />
													}
												</Link>
											</div>
											<div className="post-info">
												<h6 className="post-title max-lines-2"><Link to={"/theater/" + item.title?.replaceAll(" ", "-") + '/' + item?._id}>{item.title}</Link></h6>

												<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
													<li className="date">{
														convertData(item?.updatedAt)
													}</li>
													<Link style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }} to={"/theater/" + item.title?.replaceAll(" ", "-") + '/' + item?._id} className="btn btn-outline-primary btn-sm">Read More </Link>
												</ul>

											</div>
										</div>
									</div>
								)) : pageData?.length !== 0 ? <LoadingComp /> : <EmptyComp title="We have no media section for now" />
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