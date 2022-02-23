import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
import testPic1 from "../../images/testimonials/pic1.jpg";
import testPic2 from "../../images/testimonials/pic2.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
import testPic4 from "../../images/testimonials/pic4.jpg";
import blogGridPic1 from "../../images/blog/grid/pic1.jpg";
import blogGridPic2 from "../../images/blog/grid/pic2.jpg";
import blogGridPic3 from "../../images/blog/grid/pic3.jpg";
import blogGridPic4 from "../../images/blog/grid/pic4.jpg";

// Blog Content
const content = [
	{
		thumb: blogGridPic1,
		authorPic: testPic1,
		title: "Dental Care for Women is very important",
		author: "John deo",
		date: "21 July 2021",
	},
	{
		thumb: blogGridPic2,
		authorPic: testPic2,
		title: "In this hospital there are special surgeon",
		author: "Peter Packer",
		date: "20 July 2021",
	},
	{
		thumb: blogGridPic3,
		authorPic: testPic3,
		title: "Why Is Skin Surgeon Considered Underrated",
		author: "Sonar Moyna",
		date: "19 July 2021",
	},
	{
		thumb: blogGridPic4,
		authorPic: testPic4,
		title: "Understand Health Before You Regret",
		author: "Kalina",
		date: "18 July 2021",
	}
]

class ResearchFindings extends Component {

	render() {
		return (
			<>

				<Header />

				<div className="page-content bg-white" style={{marginTop: 40}}>

					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								{content.map((item) => (
									<div className="col-xl-4 col-md-6">
										<div className="blog-card mb-30">
											<div className="post-media" style={{maxHeight: 210}}>
												<Link to="/research-finding-details"><img src={item.thumb} alt="" /></Link>
											</div>
											<div className="post-info">
												<h4 className="post-title max-lines-2" style={{fontSize: 16}}><Link to="/research-finding-details">{item.title}</Link></h4>
												<Link to="/research-finding-details" className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="pagination-bx text-center mb-30 clearfix">
										<ul className="pagination">
											<li className="previous"><Link to="#">Prev</Link></li>
											<li className="active"><Link to="#">1</Link></li>
											<li><Link to="#">2</Link></li>
											<li><Link to="#">3</Link></li>
											<li className="next"><Link to="#">Next</Link></li>
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
}

export default ResearchFindings;
