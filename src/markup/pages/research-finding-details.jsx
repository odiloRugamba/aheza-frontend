import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AuthorProfile from "../elements/author-profile";
import CommentList from "../elements/comments/research-finding";
import CommentRespond from "../elements/comment-respond";
import WidgetTag from "../elements/tag-widgets/research-findings";
import ResearchFindingWidget from "../elements/related-widgets/research-finding";

// Import Images
import blogDefaultPic1 from "../../images/blog/default/pic1.jpg";

class ResearchFindingDetails extends Component{

	render(){
		return (
			<>

				<Header />

				<div className="page-content bg-white" style={{marginTop: 60}}>

					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
									<div className="blog-card blog-single">
										<div className="post-media">
											<img src={blogDefaultPic1} alt=""/>
										</div>
										<div className="info-bx">
											<div className="ttr-post-title">
												<h3 className="post-title">Precious Tips To Help You Get Better.</h3>
											</div>
											<div className="ttr-post-text">
												<p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
											</div>
											<div className="ttr-post-footer" >
												<div className="post-tags">
													<strong>Price:</strong>
													<Link to="#" style={{color: "#f17732"}}>20,000 FRW</Link>
												</div>
												<div className="ml-auto widget_tag_cloud">
													<ul className="tagcloud mb-0">
														<li><a rel="noreferrer" target="_blank" href="#" style={{backgroundColor: "#f17732"}}>Dowload File</a></li>
													</ul>
												</div>
											</div>
											<div className="ttr-post-footer" style={{borderTop: 0, marginTop: 0}}>
												<div className="post-tags">
													<strong>Tags:</strong>
													<Link to="#">Health</Link>
													<Link to="#">Growth</Link>
													<Link to="#">Life</Link>
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

												<CommentRespond />

											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-5 col-xl-4 mb-30">
									<aside className="side-bar sticky-top aside-bx">

										<ResearchFindingWidget />

										<WidgetTag />

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

export default ResearchFindingDetails;
