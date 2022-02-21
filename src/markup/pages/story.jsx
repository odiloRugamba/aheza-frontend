import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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


class BlogDetails extends Component {

	render() {
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
											<img src={blogDefaultPic1} alt="" />
										</div>
										<div className="info-bx">
											<ul className="post-meta">
												<li className="date"><i className="far fa-calendar-alt"></i> 19 July 2021</li>
											</ul>
											<div className="ttr-post-title">
												<h2 className="post-title">Precious Tips To Help You Get Better.</h2>
											</div>
											<div className="ttr-post-text">
												<p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												<ul className="wp-block-gallery columns-6 is-cropped">
													<li className="blocks-gallery-item"><img alt="" src={galleryPic2} /></li>
													<li className="blocks-gallery-item"><img alt="" src={galleryPic5} /></li>
												</ul>
												<p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
												<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
											<h4 className="widget-title">8 Comments</h4>

											<div className="clearfix">

												<CommentList />

												<CommentRespond placeholder="What do you thing...?" />

											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-5 col-xl-4 mb-30">
									<aside className="side-bar sticky-top aside-bx">

										{/* <WidgetSearch placeholder='Search Anything...' /> */}

										<WidgetRecentPosts title="Recent Stories" />
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
}

export default BlogDetails;
