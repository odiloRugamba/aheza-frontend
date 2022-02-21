import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../images/logo.png';
import logoWhite from '../../images/logo-white.png';

class Header extends Component {
	render() {
		return (
			<>
				<header className="header header-transparent rs-nav">
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix">
							<div className="container-fluid clearfix">
								<div className="menu-logo logo-dark">
									<Link className='logoCont' to="/"><img className='logo' src={logo} alt="" />Aheza</Link>
								</div>
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								<div className="secondary-menu">
									<ul>
										<li className="num-bx"><a href="tel:(+01)999888777"><i className="fas fa-phone-alt"></i> (+25) 0780 000 000</a></li>
										<li className="btn-area"><Link to="/chat" className="btn btn-primary shadow">Get Help<i className="btn-icon-bx fas fa-chevron-right"></i></Link></li>
									</ul>
								</div>
								<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={logoWhite} alt="" /></Link>
									</div>
									<ul className="nav navbar-nav">
										<li className="active"><Link to="/">Home</Link></li>
										<li><Link to="/about-us"><span>About Us</span> <i className="fas fa-plus"></i></Link></li>
										<li>
											<Link to="#">Services <i className="fas fa-plus"></i></Link>
											<ul className="sub-menu">
												<li className="add-menu-left">
													<ul>
														<li><Link to="/mental-services-in-services"><span>Mental services  in Rwanda</span> </Link></li>
														<li><Link to="/research-findings"><span>Research findings</span></Link></li>
														<li><Link to="/testimonial"><span>Testimonial</span></Link></li>
														<li><Link to="/uploads"><span>Uploads</span> </Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><Link to="/blog-grid">Blog <i className="fas fa-plus"></i></Link>
										</li>
										<li><Link to="/contact-us">Contact Us</Link></li>
										<li><Link to="/search"><span> Search</span> <i className="fas fa-plus"></i></Link></li>
									</ul>
									<ul className="social-media">
										<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
									</ul>
									<div className="menu-close" id="menuClose">
										<i className="ti-close"></i>
									</div>
								</div>
							</div>
						</div>
					</Sticky>

				</header>

			</>
		);
	}
}

export default Header;
