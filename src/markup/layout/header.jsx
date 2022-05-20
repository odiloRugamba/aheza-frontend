import React, { Component, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Sticky from 'react-stickynode';
import { useLocation } from 'react-router-dom'

// book
// Images
import logo from '../../images/logo-2.png';
import twitterLogo from "../../images/twitter.svg"
import instagramLogo from "../../images/instagram.svg"
import facebook from "../../images/facebook.svg"
import logoWhite from '../../images/logo-white.png';
import { BsXLg } from "react-icons/bs";



function Header() {
	const [classesList, setClassesList] = useState("menu-links  navbar-collapse collapse justify-content-end")
	const [openService, setOpenService] = useState(null)
	const [model, setModel] = useState(false)
	const [openMedia, setOpenMedia] = useState(null)
	const [emgNumber, setEmgNumber] = useState([
		{ background: " #da751c", number: 'Call 1024', title: 'NH Rapid Response' },
		{ background: "#7d5787", number: '(+250) 788 315 809', title: 'Schedule an Appointment' },
		{ background: "#006991", number: '(+250) 788 315 809', title: 'Main Office Line' }
	])
	const location = useLocation();
	const route = location.pathname;
	const history = useHistory()

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

	let donationActive = "";
	if (route.includes("donation")) {
		donationActive = "active"
	}
	const openNavbar = () => {
		setClassesList("menu-links  navbar-collapse collapse justify-content-end show")
	}
	const closeNavBar = () => {
		setClassesList("menu-links  navbar-collapse collapse justify-content-end")
	}

	const openMenu = (item) => {
		if (item === "media") {
			if (openMedia === "open") {
				setOpenMedia(null)
			} else {
				setOpenMedia("open")
				setOpenService(null)
			}
		} else {
			if (openService === "open") {
				setOpenService(null)
			} else {
				setOpenService("open")
				setOpenMedia(null)
			}
		}
	}
	const onChangeRoute = (link) => {
		history.push(link)
		setModel(false)
	}
	return (
		<>
			<header className="header header-transparent rs-nav">
				<Sticky enabled={true} className="sticky-header navbar-expand-lg">
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
									<li className="btn-area"><a onClick={() => setModel(true)} className="btn btn-primary shadow">Get Help Now<i className="btn-icon-bx fas fa-chevron-right"></i></a></li>
								</ul>
							</div>
							<div className={classesList} id="menuDropdown">
								<div className="menu-logo">
									{/* <Link to="/"><img src={logoWhite} alt="" /></Link> */}
								</div>
								<ul className="nav navbar-nav">
									<li className={homeActive} ><Link to="/">Home</Link></li>
									<li onClick={() => { openMenu("service") }} className={ourServicesActive, openService}>
										<Link to="#">Services <i className="fa fa-plus"></i>
										</Link>
										<ul className="sub-menu ">
											<li className="add-menu-left tab-port">
												<ul>
													<li><Link to="/our-services"><span>Our services</span> </Link></li>
													<li><Link to="/other-institutions-services"><span>Other institutions</span></Link></li>
												</ul>
											</li>
										</ul>
									</li>
									<li onClick={() => { openMenu("media") }} className={mediaActive, openMedia}>
										<Link to="#">Updates <i className="fas fa-plus"></i></Link>
										<ul className="sub-menu">
											<li className="add-menu-left">
												<ul>
													<li><Link to="/research-findings"><span>Research</span></Link></li>
													<li><Link to="/stories"><span>Stories</span></Link></li>
													<li><Link to="/links"><span>Links</span></Link></li>
													<li><Link to="/uploads"><span>Uploads</span> </Link></li>
												</ul>
											</li>
										</ul>
									</li>
									<li className={blogActive}><Link to="/search">Search</Link> </li>
									<li className={blogActive}><Link to="/blog-grid">Resources </Link> </li>
									<li className={aboutUsActive}><Link to="/about-us"><span>About Us</span></Link></li>
									<li className={contactUsActive}><Link to="/contact-us">Contact Us</Link></li>
									<li className={donationActive}><Link to="/donation">Donation</Link></li>
								</ul>
								<ul className="social-media">
									<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
									<li><a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
									<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
									<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
								</ul>
								<div onClick={() => closeNavBar()} className="menu-close" id="menuClose">
									<i className="ti-close"></i>
								</div>
							</div>
						</div>
					</div>
				</Sticky>
			</header>
			{
				model ? <div className='headerCont'>
					<div className='modelCont'>
						<div onClick={() => onChangeRoute('/book-appointment')} className='backGround'></div>
						<div className='mainPartCont'>
							<div className='mainPart'>
								<div className='rowCont'>
									<div className='closeCont'>
										<div onClick={() => setModel(!model)} className='closeBtn'>
											<BsXLg />
										</div>
									</div>
									<div className="col-lg-0 mb-0">
										<div className="page-banner-entry text-center">
											<h5>If this is an Emergency, Call 1024</h5>
										</div>
										<div className='mainContent'>
											{
												emgNumber?.map(el =>
													<div style={{ background: el?.background }} className='boxCont'>
														<div className='title'>{el?.title}</div>
														<div>{el?.number}</div>
													</div>
												)
											}
										</div>
										<div className="appontiCont page-banner-entry text-center">
											<div>To book an appointment from website <span onClick={() => onChangeRoute('/appointment-assesement')}>Click Here</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> : null
			}



		</>
	);
}
{/* <li><Link to="/search"><span> Search</span> <i className="fas fa-plus"></i></Link></li> */ }

export default Header;
