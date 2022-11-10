import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getResearchs } from "../../store/research/actions";
import LoadingComp from "../elements/loading";
import ReactPaginate from "react-paginate";
import EmptyComp from "../elements/empyt";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import bnrImg1 from "../../images/banner/aheza-barnner-12.jpeg";


const ResearchFindings = () => {
	const {lang}= useParams()
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
		return `${da} ${mo} ${ye}`
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
			<div className="page-content bg-white" style={{ marginTop: 100 }}>
				<div className="banner-wraper" >
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", height: 300 }} >
						<div style={{ paddingTop: 40 }}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h2 className='title-80' style={{ paddingBottom: 50, color: "white" }}>Research</h2>
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
											<div className="post-info">
												<p className="post-title max-lines-3" style={{ fontSize: 20 }}><Link to={`/${lang}`+ "/research-finding/" + item.title?.replaceAll(" ", "-") + '/' + item._id} >{item.title}</Link></p>
												<ul className="post-meta" style={{ justifyContent: 'space-between' }}>
													<li className="date"> {convertData(item?.updatedAt)}</li>
													<Link style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }} to={ `/${lang}` + "/research-finding/" + item.title?.replaceAll(" ", "-") + '/' + item._id} className="btn btn-outline-primary btn-sm">											<FormattedMessage id="ReadMore" defaultMessage="ReadMore" />
 </Link>

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
