import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStorysById, getStorys, getStoryComments, postStoryComments } from "../../store/story/actions";

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

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import blogDefaultPic1 from "../../images/blog/default/pic1.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
import galleryPic2 from "../../images/gallery/pic2.jpg";
import galleryPic5 from "../../images/gallery/pic5.jpg";


const StoryDetails = () => {
	const [data, setData] = useState([])
	const [story, setStory] = useState(null)
	const dispatch = useDispatch()
	const { id } = useParams()
	const res = useSelector(state => state.StorysReducers.story)
	const resRel = useSelector(state => state.StorysReducers.data)
	const resComments = useSelector(state => state.StorysReducers.comments)

	useEffect(() => {
		dispatch(getStorysById(id))
		dispatch(getStorys())
		dispatch(getStoryComments(id))
	}, []);

	useEffect(() => {
		setStory(res)
	}, [res])

	useEffect(() => {
		const revData = resRel?.reverse()
		// console.log(revData)
		setData(revData?.slice(0, 3))
	}, [resRel])

	const submitFunc = (data) => {
		console.log(data)
		dispatch(postStoryComments({ ...data, story: id }))

	}
	return (
		<>

			<Header />

			<div className="page-content bg-white">

				<div className="banner-wraper">
					<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")", maxHeight: 250 }}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h2>Story</h2>
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
									</div>
									<div className="info-bx">

										<div className="ttr-post-title">
											<h2 className="post-title max-lines-2">{story?.title}</h2>
										</div>
										<div className="ttr-post-text">
											<div dangerouslySetInnerHTML={{ __html: story?.content }}>
											</div>
											<ul className="post-meta">
												<li className="date"><i className="far fa-calendar-alt"></i> 19 July 2022</li>
											</ul>
										</div>
										<div className="ttr-post-footer">
											<div className="post-tags">
												<strong>Tags:</strong>
												<Link to="#">placeholder</Link>
												<Link to="#">selfcare </Link>
												<Link to="#">motivation</Link>
												<Link to="#">selflove</Link>
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

								<AuthorProfile />

								<div className="clear" id="comment-list">
									<div className="comments-area" id="comments">
										<h4 className="widget-title">{resComments?.length} Comments</h4>

										<div className="clearfix">

											<CommentList coments={resComments} />

											<CommentRespond submit={submitFunc} placeholder="What do you thing...?" />

										</div>
									</div>
								</div>
							</div>
							<div className="col-md-12 col-lg-5 col-xl-4 mb-30">
								<aside className="side-bar sticky-top aside-bx">

									{/* <WidgetSearch placeholder='Search Anything...' /> */}

									<WidgetRecentPosts currentPage="/story/" data={data} title="Recent Stories" />
								</aside>
							</div>
						</div>
					</div>
				</section>

			</div>

			<Footer />

		</>
	);
}

export default StoryDetails;
