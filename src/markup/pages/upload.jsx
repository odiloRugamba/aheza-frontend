import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUploadById, getUploads, getUploadCommnets, postUploadCommnets } from "../../store/uploads/actions";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AuthorProfile from "../elements/author-profile";
import CommentList from "../elements/comment-list";
import CommentRespond from "../elements/comment-respond";
import WidgetTag from "../elements/widget-tag";
import WidgetSearch from "../elements/widget-search";
import WidgetGallery from "../elements/widget-gallery";
import WidgetRecentPosts from "../elements/widget-recent-posts";
import LoadingComp from "../elements/loading";


// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import blogDefaultPic1 from "../../images/blog/default/pic1.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
import galleryPic2 from "../../images/gallery/pic2.jpg";
import galleryPic5 from "../../images/gallery/pic5.jpg";


const UploadsDetails = () => {
	const [upload, setUpload] = useState([])
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	const res = useSelector(state => state.UploadsReducers.upload)
	const resRel = useSelector(state => state.UploadsReducers.data)
	const resComments = useSelector(state => state.UploadsReducers.comments)
	const { id } = useParams()
	const [loading, setLoading] = useState(false)


	useEffect(() => {
		dispatch(getUploadById(id))
		dispatch(getUploads())
		dispatch(getUploadCommnets(id))
	}, [])

	useEffect(() => {
		setUpload(res)
	}, [res])

	useEffect(() => {
		const revData = resRel?.reverse()
		setData(revData?.slice(0, 3))
	}, [resRel])

	useEffect(() => {
		setLoading(false)
	}, [resComments]);

	const convertData = (date) => {
		const day = new Date(date)
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
		return `${da}-${mo}-${ye}`
	}
	const submitFunc = async (data) => {
		setLoading(true)
		await dispatch(postUploadCommnets({ ...data, upload: id }))
		await dispatch(getUploadCommnets(id))
	}

	return (
		<>

			<Header />
			{
				res?._id ? <div className="page-content bg-white">

					<div className="banner-wraper">
						<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 250 }}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h2>Details</h2>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt="" />
							{/* <img className="pt-img2 animate2" src={circleDots} alt="" /> */}
							<img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
						</div>
					</div>

					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
									<div className="blog-card blog-single">
										<div className="post-media">
											{/* <img src={blogDefaultPic1} alt="" /> */}
											<iframe
												width="853"
												height="480"
												src={`https://www.youtube.com/embed/YtoYJtgVUUM`}
												frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
												title="Embedded youtube"
											/>
										</div>
										<div className="info-bx">
											<ul className="post-meta">
												<li className="date"><i className="far fa-calendar-alt"></i>{upload?.updatedAt ? convertData(upload?.updatedAt) : null}</li>
											</ul>
											<div className="ttr-post-title">
												<h2 className="post-title max-lines-2">{upload?.title}</h2>
											</div>
											<div className="ttr-post-text">
												<div dangerouslySetInnerHTML={{ __html: upload?.content }}></div>

											</div>
											<div className="ttr-post-footer">
												<div className="post-tags">
													<strong>Tags:</strong>
													{
														upload?.tags?.map(el => (
															<Link to="#">{el}</Link>
														))
													}
												</div>
												<div className="share-post ml-auto">
													<ul className="social-media mb-0">
														<li><strong>Share:</strong></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>

									{/* <AuthorProfile /> */}

									<div className="clear" id="comment-list">
										<div className="comments-area" id="comments">
											<h4 className="widget-title">{resComments?.length} Comments</h4>

											<div className="clearfix">

												<CommentList coments={resComments} />

												<CommentRespond loading={loading} submit={submitFunc} placeholder="What do you thing...?" />

											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-5 col-xl-4 mb-30">
									<aside className="side-bar sticky-top aside-bx">

										{/* <WidgetSearch placeholder='Search Anything...' /> */}

										<WidgetRecentPosts data={data} currentPage="/upload/" title="Recent Stories" />
									</aside>
								</div>
							</div>
						</div>
					</section>

				</div> : <div style={{ position: "relative", top: "200px" }}><LoadingComp /></div>
			}


			<Footer />

		</>
	);
}


export default UploadsDetails;
