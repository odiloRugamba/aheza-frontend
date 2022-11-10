import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getblogById, getBlogs, getBlogComment, postblogComment } from "../../store/blog/actions";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import LoadingComp from "../elements/loading";
import { FormattedMessage } from 'react-intl';
// Elements
import CommentList from "../elements/comment-list";
import CommentRespond from "../elements/comment-respond";
import WidgetRelatedPosts from "../elements/related-widgets/blog";
import SocialMediaComp from '../elements/shareMedia'

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
	const [coments, setComments] = useState([])
	const [loading, setLoading] = useState(false)

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
		setComments(resComents)
		setLoading(false)
	}, [resComents])

	const submitFunc = async (data) => {
		setLoading(true)
		try {
			await dispatch(postblogComment({ ...data, blog: id }));
			setComments([...coments, { name: data.name, email: data.email, comment: data.comment, updatedAt: new Date() }]);
		}
		catch (e) {
			console.log(e.message);
		}
		setLoading(false);
	}



	return (
		<>

			<Header />
			{
				blogs?._id ? <div className="page-content bg-white" style={{ marginTop: 100 }}>

					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
									<div className="blog-card blog-single" style={{ width: "100%" }}>
										<div className="info-bx">
											<div className="ttr-post-title">
												<h2 className="post-title max-lines-2">{blogItem?.title}</h2>
											</div>
											<div className="ttr-post-text">
												<div dangerouslySetInnerHTML={{ __html: blogItem?.content, }}></div>
											</div>
											<div className="ttr-post-footer">
												<div className="post-tags">
													<strong><FormattedMessage id="Tag" defaultMessage="Tag" />:</strong>
													{
														blogItem?.tags.map((el) => (
															<Link to="#">{el}</Link>
														)
														)
													}
												</div>
												<SocialMediaComp />
											</div>
										</div>
									</div>

									<div className="clear" id="comment-list">
										<div className="comments-area" id="comments">
											<h4 className="widget-title"> {coments?.length} <FormattedMessage id="comments" defaultMessage="comments" /></h4>

											<div className="clearfix">

												<CommentList coments={coments} />

												<CommentRespond loading={loading ? true : false} submit={submitFunc} />

											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-5 col-xl-4 mb-30">
									<aside className="side-bar sticky-top aside-bx">

										<WidgetRelatedPosts data={relData} />

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
