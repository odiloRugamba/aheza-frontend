import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getblogById, getBlogs, getBlogComment, postblogComment } from "../../store/blog/actions";
import { Dcore } from '../../api';
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import LoadingComp from "../elements/loading";

// Elements
import AuthorProfile from "../elements/author-profile";
import CommentList from "../elements/comment-list";
import CommentRespond from "../elements/comment-respond";
import WidgetTag from "../elements/widget-tag";
import WidgetRelatedPosts from "../elements/related-widgets/blog";

import { NavItem } from 'react-bootstrap';


const BlogDetails = () => {
	const history = useHistory()
	const { id } = useParams()
	const dispatch = useDispatch()
	const blogs = useSelector(state => state.BlogsReducers.blog)
	const resData = useSelector(state => state.BlogsReducers.data)
	const resComents = useSelector(state => state.BlogsReducers.comments)
	const [blogItem, setBlogItem] = useState(null)
	const [relData, setRelData] = useState([])
	const [coments, setComnets] = useState([])

	useEffect(() => {
		dispatch(getblogById(id))
		dispatch(getBlogs())
		dispatch(getBlogComment(id))
	}, []);

	useEffect(() => {
		setBlogItem(blogs)
	}, [blogs])

	useEffect(() => {
		const revData = resData?.reverse()
		setRelData(revData?.slice(0, 3))
	}, [resData])

	useEffect(() => {
		console.log('jhsdkhsdkhdskjhsdhkjh')
		console.log(resComents)
		setComnets(resComents)
	}, [resComents])

	const submitFunc = (data) => {
		console.log(data)
		dispatch(postblogComment({ ...data, blog: id }))
	}



	return (
		<>

			<Header />
			{
				blogs?._id ? <div className="page-content bg-white" style={{ marginTop: 60 }}>

					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
									<div className="blog-card blog-single">
										<div className="post-media">
											<img src={Dcore.IMAGEURL + "/" + blogItem?.image} alt="" />
										</div>
										<div className="info-bx">
											<div className="ttr-post-title">
												<h2 className="post-title max-lines-2">{blogItem?.title}</h2>
											</div>
											<div className="ttr-post-text">
												<div dangerouslySetInnerHTML={{ __html: blogItem?.content, }}></div>
											</div>
											{/* <ul className="post-meta">
											<li className="author"><Link to="/blog-details"><img src={testPic3} alt="" /> Sonar Moyna</Link></li>
											<li className="date"><i className="far fa-calendar-alt"></i> 19 July 2021</li>
										</ul> */}
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
											<h4 className="widget-title"> {coments?.length} Comments</h4>

											<div className="clearfix">

												<CommentList coments={coments} />

												<CommentRespond submit={submitFunc} />

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

				</div> : <div style={{ position: "relative", top: "200px" }}><LoadingComp /></div>
			}


			<Footer />

		</>
	);
}

export default BlogDetails;
