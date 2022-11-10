import React, { Component, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Sticky from 'react-stickynode';
import { useLocation } from 'react-router-dom'
import searchIcon from '../../images/search.svg';
// Images
import logo from '../../images/logo-2.png';
import { BsXLg } from "react-icons/bs";
import { FormattedMessage } from 'react-intl';
import {useParams} from"react-router-dom";



function Header() {
	const [classesList, setClassesList] = useState("menu-links  navbar-collapse collapse justify-content-end")
	const [openService, setOpenService] = useState(null)
	const [model, setModel] = useState(false)
	const [openResources, setopenResources] = useState(null)
	const [dropdownVisibility, setDropdownVisibility] = useState(false);
	const [languages, setLanguages] = useState('English');
	let { lang } = useParams();

	const [emgNumber, setEmgNumber] = useState([
		{ background: " #da751c", number: 'Call 1024', title: 'Helpline' },
		{ background: "#7d5787", number: '(+250) 780 375 505', title: 'Schedule an Appointment' },
		{ background: "#006991", number: '(+250) 788 353 940', title: 'Main Office Line' }
	])
	const location = useLocation();
	const route = location.pathname;
	const history = useHistory()
	const dropdownVisible = dropdownVisibility ? "style={{ display: 'none' }}" : null;
	
	
	
	useEffect(()=>{
		if (lang == 'en') {
			setLanguages('English')
		}else{
			setLanguages('Kinyarwanda')
		}
	}, [])

	let homeActive = "";
	if (route === "/") {
		homeActive = "active"
	}

	let ourServicesActive = "";
	if (route === "/our-services") {
		ourServicesActive = "active"
	}


	let otherInstitutionsServices = "";
	if (route === "/other-institutions-services") {
		otherInstitutionsServices = "active"
	}


	let resourcesActive = "";
	if (route === "/resources") {
		resourcesActive = "active"
	}


	let contactUsActive = "";
	if (route.includes("contact-us")) {
		contactUsActive = "active"
	}

	let donationActive = "";
	if (route.includes("donation")) {
		donationActive = "active"
	}
	let languageActive = "";
	if (route.includes("donation")) {
		languageActive = "active"
	}
	const openNavbar = () => {
		setClassesList("menu-links  navbar-collapse collapse justify-content-end show")
	}
	const closeNavBar = () => {
		setClassesList("menu-links  navbar-collapse collapse justify-content-end")
	}

	const onChangeRoute = (link) => {
		history.push(link)
		setModel(false)
	}


	const changeRouter = (item) => {
		if (item === 'en') {
		    history.push('/en')
		    setLanguages('English')
		}else {
			history.push('/kiny')
		  setLanguages('Kinyarwanda')
		}
		window.location.reload()
}


	return (
		<>
			<header className="header header-transparent rs-nav">
				<Sticky enabled={true} className="sticky-header navbar-expand-lg">
					<div className="menu-bar clearfix">
						<div className="container-fluid clearfix">
							<div className="menu-logo logo-dark" >
								<Link to={'/'+ lang}><img className='logo' src={logo} alt="" /></Link>
							</div>
							<button onClick={() => openNavbar()} className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							<div className="secondary-menu">
								<ul>
									<li className="btn-area"><a onClick={() => setModel(true)} className="btn btn-primary shadow"><b style={{ color: "white", fontSize: 20 }}><u>
									<FormattedMessage id="TalktoUs" defaultMessage="Talk to Us" />
										</u></b>
									</a></li>
								</ul>
							</div>
							<div className="secondary-menu">
								<ul>
									<li className="bt-aea"><a onClick={() => setModel(true)} className=""> <Link to={'/'+ lang+ "/search"}><img className='searchHIcon' src={searchIcon} alt="" /></Link></a></li>
								</ul>
							</div>
							<div className={classesList} id="menuDropdown">
								<div className="menu-logo">
								</div>
								<ul className="nav navbar-nav">
									<li className={homeActive} ><Link to={'/'+ lang}>
									<FormattedMessage id="home" defaultMessage="Home" />
										</Link></li>
									<li className={ourServicesActive}> <Link to={'/'+ lang+ "/our-services"}>
									<FormattedMessage id="services" defaultMessage="Services" />
										 </Link> </li>
									<li className={resourcesActive}> <Link to={'/'+ lang+"/resources"}>
									<FormattedMessage id="resources" defaultMessage="Resources" />
										
										 </Link> </li>
									<li className={otherInstitutionsServices}> <Link to={'/'+ lang+"/other-institutions-services"}>
									<FormattedMessage id="otherInstitutions" defaultMessage="other Institutions" />
										
										</Link> </li>
									<li className={contactUsActive}><Link to={'/'+ lang+"/contact-us"}>
									<FormattedMessage id="contactUs" defaultMessage="contact Us" />
										 
										 </Link></li>
									<li className={donationActive}><Link to={'/'+ lang+"/donation"}>
									<FormattedMessage id="Donate" defaultMessage="Donate" />
										</Link></li>
										<li>
											<Link 
												onMouseOver={() => { setDropdownVisibility(true) }}
											 	to="#">
											{languages}
										</Link>
										{
                                    dropdownVisible ?
                                        <div className='dropdownCont' onMouseOver={() => { setDropdownVisibility(true) }} onMouseLeave={() => { setDropdownVisibility(false) }}>
                                            <div onClick={() => changeRouter('en')} to="#">English</div>
                                            <div className='kinyLanguage' onClick={() => changeRouter('kiny')} to="#">Kinyarwanda</div>
                                        </div>
                                        : null
                      }
										</li>
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
						<div onClick={() => onChangeRoute(`/${lang}`+'/book-appointment')} className='backGround'></div>
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
											<div>To book an appointment from website <span onClick={() => onChangeRoute(`/${lang}`+'/appointment-assesement')}>Click Here</span></div>
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

export default Header;
