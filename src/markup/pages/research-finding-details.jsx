import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getResearchById, getResearchs, getResearchCommnets, postResearchComments } from "../../store/research/actions";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
// Elements
import CommentList from "../elements/comments/research-finding";
import CommentRespond from "../elements/comment-respond";
import ResearchFindingWidget from "../elements/related-widgets/research-finding";
import LoadingComp from "../elements/loading";
import SocialMediaComp from '../elements/shareMedia'
import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";
import { jsPDF } from "jspdf";
import { Dcore } from '../../api';
import htmlTopdf from 'html2pdf.js'



const ResearchFindingDetails = () => {
	const docc = new jsPDF();
	const { id } = useParams()
	const [research, setResearch] = useState(null)
	const [reletedData, setReletedData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.ResearchReducers.research)
	const resetResearch = useSelector(state => state.ResearchReducers.data)
	const resCommnets = useSelector(state => state.ResearchReducers.commnets)
	const [loading, setLoading] = useState(false)


	useEffect(() => {
		dispatch(getResearchById(id))
		dispatch(getResearchCommnets(id))
		dispatch(getResearchs())
	}, [])
	useEffect(() => {
		setResearch(res)
	}, [res])
	useEffect(() => {
		setLoading(false)
	}, [resCommnets]);




	useEffect(() => {
		const relData = resetResearch?.reverse()
		setReletedData(relData?.slice(0, 3))
	}, [resetResearch])
	const submitFunc = async (data) => {
		setLoading(true)
		await dispatch(postResearchComments({ ...data, research: id }))
		await dispatch(getResearchCommnets(id))
	}
	const saveFile = () => {
		var opt = {
			margin: 1,
			filename: `${research?.title}.pdf`,
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: { scale: 2 },
			jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
		};
		htmlTopdf().from(research?.content).set(opt).save();
	}


	return (
		<>
			<Header />
			{
				res?._id ? <div className="page-content bg-white" style={{ marginTop: 60 }}>
					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
									<div className="blog-card blog-single" style={{ width: "100%" }}>
										<div className="post-media">
										</div>
										<div className="info-bx">
											<div className="ttr-post-title">
												<h5 className="post-title">{research?.title}</h5>
											</div>
											<hr />
											<div className="ttr-post-text">
												<div dangerouslySetInnerHTML={{ __html: research?.content }}></div>
											</div>
											{
												research?.publishedByAheza === "YES" ?
													<div className="brochure-bx">
														<h5 className="title-head">Download</h5>
														<div>
															<div>
																<strong>Price: </strong>
																<Link to="#" style={{ color: "#f17732" }}> {research?.price} FRW</Link>
															</div>
															<div>
																<a rel="noreferrer" className="download-link" target="_blank" href={Dcore.IMAGEURL + "/files/" + research?.file}>
																	<img src="" alt="" />
																	<h5 className="title">Download this document</h5>
																	<span>Download</span>
																</a>
															</div>
														</div>
													</div>
													: null
											}
											<hr />
											<div className="ttr-post-footer" style={{ borderTop: 0, marginTop: 0 }}>

												<SocialMediaComp />
											</div>
										</div>
									</div>

									<div className="clear" id="comment-list">
										<div className="comments-area" id="comments">
											<h4 className="widget-title">{resCommnets?.length} Comments</h4>
											<div className="clearfix">
												<CommentList coments={resCommnets} />
												<CommentRespond loading={loading} submit={submitFunc} />
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-5 col-xl-4 mb-30">
									<aside className="side-bar sticky-top aside-bx">
										<ResearchFindingWidget data={reletedData} />
										<div className="brochure-bx">
											<h5 className="title-head">Research</h5>
											<Link to="/contact-us" className="download-link">
												<img src={pdf} alt="" />
												<h5 className="title">Publish Your Own</h5>
												<h5 className="title">Research</h5>
											</Link>
											<a onClick={() => { saveFile() }} className="download-link">
												<img src={doc} alt="" />
												<h5 className="title">Download</h5>
												<span>Research</span>
											</a>
										</div>
									</aside>
								</div>
							</div>
						</div>
					</section>
				</div> : <div style={{ position: "relative", top: "200px", minHeight: 500 }}><LoadingComp /></div>
			}
			<Footer />
		</>
	);
}

export default ResearchFindingDetails;
