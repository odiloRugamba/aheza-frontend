import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
import { useLocation } from 'react-router-dom'

// Images
import logo from '../../images/logo-2.png';
import twitterLogo from "../../images/twitter.svg"
import instagramLogo from "../../images/instagram.svg"
import facebook from "../../images/facebook.svg"
import logoWhite from '../../images/logo-white.png';
function Header() {
	const [classesList, setClassesList] = useState("menu-links  navbar-collapse collapse justify-content-end")
	const location = useLocation();
	const route = location.pathname;
	let homeActive = "";
	if (route === "/") {
		homeActive = "active"
	}

	let ourServicesActive = "";
	if (route.includes("service")) {
		ourServicesActive = "active"
	}

	let mediaActive = "";
	if (route.includes("stor") || route.includes("research") || route.includes("upload")) {
		mediaActive = "active"
	}


	let blogActive = "";
	if (route.includes("blog")) {
		blogActive = "active"
	}

	let institutionActive = "";
	if (route.includes("/institutions-list") || route.includes("/institution-profile")) {
		institutionActive = "active"
	}


	let aboutUsActive = "";
	if (route.includes("about-us")) {
		aboutUsActive = "active"
	}

	let contactUsActive = "";
	if (route.includes("contact-us")) {
		contactUsActive = "active"
	}
	const openNavbar = () => {
		setClassesList("menu-links  navbar-collapse collapse justify-content-end show")
	}

	return (
		<>
			<header className="header header-transparent rs-nav">
				<Sticky enabled={true} className="sticky-header navbar-expand-lg">
					<div id="ahezaInfo">
						<div id='innerCont'>

							<div id='headerItem'>
								<div>
									<span id='HeaderIcon' className="material-icons">schedule</span>
								</div>
								<div> Monday - Friday: 08:00 AM - 06:00 PM</div>
							</div>

							<div id='headerItem'>
								<div>
									<span id='HeaderIcon' className="material-icons">
										email
									</span>
								</div>
								<div>info@aheza.org.rw</div>
								<div id='socialMedias'>
									<div><embed src={twitterLogo} width="20" /></div>
									<div><embed src={instagramLogo} width="20" /></div>
									<div><embed src={facebook} width="20" /></div>
								</div>
							</div>

							<div id='headerItem'>
								<div>
									<span id='HeaderIcon' className="material-icons">call</span>
								</div>
								<div><a href="tel:+250788315809" style={{ color: "white" }}>(+250) 788 315 809</a></div>
							</div>

							<div id='headerItem'>
								<div>
									<span id='HeaderIcon' className="material-icons">place</span>
								</div>
								<div> Bugesera District, Ntarama sector.</div>
							</div>
						</div>
					</div>



					<div className="menu-bar clearfix">
						<div className="container-fluid clearfix">
							<div className="menu-logo logo-dark" >
								<Link to="/"><img className='logo' src={logo} alt="" /></Link>
							</div>
							<button onClick={() => openNavbar()} className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>

							<div className="secondary-menu">
								<ul>
									{/* <li className="num-bx"><a href="tel:+250788315809"><i className="fas fa-phone-alt"></i> (+250) 788 315 809</a></li> */}
									<li className="btn-area"><Link to="/book-appointment" className="btn btn-primary shadow">Book appointment<i className="btn-icon-bx fas fa-chevron-right"></i></Link></li>
								</ul>
							</div>

							<div className={classesList} id="menuDropdown">
								<div className="menu-logo">
									{/* <Link to="/"><img src={logoWhite} alt="" /></Link> */}
								</div>
								<ul className="nav navbar-nav">
									<li className={homeActive} ><Link to="/">Home</Link></li>
									<li className={ourServicesActive}>
										<Link to="#">Services <i className="fa fa-plus"></i>
										</Link>
										<ul className="sub-menu ">
											<li className="add-menu-left open">
												<ul>
													<li><Link to="/our-services"><span>Our services</span> </Link></li>
													<li><Link to="/other-institutions-services"><span>Other institutions</span></Link></li>
												</ul>
											</li>
										</ul>
									</li>

									<li className={mediaActive}>
										<Link to="#">Media <i className="fas fa-plus"></i></Link>
										<ul className="sub-menu">
											<li className="add-menu-left">
												<ul>
													<li><Link to="/research-findings"><span>Research</span></Link></li>
													<li><Link to="/stories"><span>Stories</span></Link></li>
													<li><Link to="/uploads"><span>Uploads</span> </Link></li>
												</ul>
											</li>
										</ul>
									</li>

									<li className={blogActive}><Link to="/blog-grid">Blog </Link> </li>
									{/* <li className={institutionActive}><Link to="/institutions-list">Institutions </Link> </li> */}
									<li className={aboutUsActive}><Link to="/about-us"><span>About Us</span></Link></li>
									<li className={contactUsActive}><Link to="/contact-us">Contact Us</Link></li>
									{/* <li className={contactUsActive}><Link to="/savey">survey</Link></li> */}



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
{/* <li><Link to="/search"><span> Search</span> <i className="fas fa-plus"></i></Link></li> */ }

export default Header;
