import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getblogById, getBlogs } from "../../store/blog/actions";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AuthorProfile from "../elements/author-profile";
import CommentList from "../elements/comment-list";
import CommentRespond from "../elements/comment-respond";
import WidgetTag from "../elements/widget-tag";
import WidgetRelatedPosts from "../elements/related-widgets/blog";

// Import Images
import blogDefaultPic1 from "../../images/blog/default/pic1.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
import galleryPic2 from "../../images/gallery/pic2.jpg";
import galleryPic5 from "../../images/gallery/pic5.jpg";
import { NavItem } from 'react-bootstrap';


const BlogDetails = () => {
	const history = useHistory()
	const { id } = useParams()
	const dispatch = useDispatch()
	const blogs = useSelector(state => state.BlogsReducers.blog)
	const resData = useSelector(state => state.BlogsReducers.data)
	const [blogItem, setBlogItem] = useState(null)
	const [relData, setRelData] = useState([])

	useEffect(() => {
		dispatch(getblogById(id))
		dispatch(getBlogs())
	}, []);

	useEffect(() => {
		setBlogItem(blogs)

	}, [blogs])

	useEffect(() => {
		const revData = resData?.reverse()
		setRelData(revData?.slice(0, 3))
	}, [resData])


	return (
		<>

			<Header />

			<div className="page-content bg-white" style={{ marginTop: 60 }}>

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
											<h2 className="post-title">{blogItem?.title}</h2>
										</div>
										<div className="ttr-post-text">
											<div dangerouslySetInnerHTML={{ __html: blogItem?.content }}></div>
										</div>
										<ul className="post-meta">
											<li className="author"><Link to="/blog-details"><img src={testPic3} alt="" /> Sonar Moyna</Link></li>
											<li className="date"><i className="far fa-calendar-alt"></i> 19 July 2021</li>
										</ul>
										<div className="ttr-post-footer">
											<div className="post-tags">
												<strong>Tags:</strong>
												{
													blogItem?.tags.map((el) => (
														<Link to="#">{el}</Link>
													)
													)
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
										<h4 className="widget-title">8 Comments</h4>

										<div className="clearfix">

											<CommentList />

											<CommentRespond />

										</div>
									</div>
								</div>
							</div>
							<div className="col-md-12 col-lg-5 col-xl-4 mb-30">
								<aside className="side-bar sticky-top aside-bx">

									{/* <WidgetSearch /> */}

									<WidgetRelatedPosts data={relData} />

									{/* <WidgetTag tags={blogItem?.tags} /> */}

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

export default BlogDetails;
