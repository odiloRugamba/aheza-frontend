import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import { FormattedMessage } from 'react-intl';


const  Error= () =>{
	let { lang } = useParams();


		return (
			<>
				<Header />
				<div className="page-content bg-white">
					<div className="banner-wraper">
						<div className="page-banner">
							<div className="container">
								<div className="page-banner-entry text-center">
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to={`/${lang}`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg><FormattedMessage id="home" defaultMessage="Home" /></Link></li>
											<li className="breadcrumb-item active" aria-current="page"><FormattedMessage id="PageNotFound" defaultMessage="PageNotFound" /></li>
											<li className="breadcrumb-item active" aria-current="page"><FormattedMessage id="PageNotFound" defaultMessage="PageNotFound" /></li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>


					<section className="section-area section-sp2 error-404">
						<div className="container">
							<div className="inner-content">
								<h2 className="error-title">4<span></span>4</h2>
								<h3 className="error-text"><FormattedMessage id="ThePageYou" defaultMessage="ThePageYou" /></h3>
								<p><FormattedMessage id="ThepageMight" defaultMessage="ThepageMight" /></p>
								<div className="clearfix">
									<Link to={`/${lang}`} className="btn btn-primary m-r5"><FormattedMessage id="Back" defaultMessage="Back" /></Link>
									<Link to={`/${lang}`} className="btn btn-primary"><FormattedMessage id="BacktoHome" defaultMessage="BacktoHome" /> </Link>
								</div>
							</div>
						</div>
					</section>

				</div>

				<Footer />

			</>
		);
}

export default Error;