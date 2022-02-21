import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// All Pages Router
import Index from './pages/index';
import AboutUs from './pages/about-us';
import Team from './pages/team';
import OurServices from './pages/our-services';
import ServiceDetails from './pages/service-details';
import FormLogin from './pages/form-login';
import FormRegister from './pages/form-register';
import FormForgetPassword from './pages/form-forget-password';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';
import Booking from './pages/booking';
import BlogGrid from './pages/blog-grid';
import BlogDetails from './pages/blog-details';
import Error from './pages/error-404';
import ProtectRoute from "./protectRoute";
import SearchPage from "./pages/search";
import ResearchFindings from "./pages/researchFindings";
import ResearchFindingsDetail from "./pages/researchFindingsDetail";
import Testimonial from "./pages/testimonial";
import AllTestimonial from "./pages/AllTestimonial";
import Uploads from "./pages/uploads";
import ReasearchFindingDetails from './pages/research-finding-details'


class Markup extends Component {
	render() {
		return (
			<>
				<BrowserRouter basename={''}>
					<Switch>

						<ProtectRoute path='/' exact component={Index} />
						<ProtectRoute path='/about-us' exact component={AboutUs} />
						<ProtectRoute path='/team' exact component={Team} />
						<ProtectRoute path='/our-services' exact component={OurServices} />
						<ProtectRoute path='/service-details' exact component={ServiceDetails} />
						<Route path='/login' exact component={FormLogin} />
						<Route path='/register' exact component={FormRegister} />
						<ProtectRoute path='/form-forget-password' exact component={FormForgetPassword} />
						<ProtectRoute path='/faq' exact component={Faq} />
						<ProtectRoute path='/contact-us' exact component={ContactUs} />
						<ProtectRoute path='/booking' exact component={Booking} />
						<ProtectRoute path='/blog-grid' exact component={BlogGrid} />
						<ProtectRoute path='/blog-details' exact component={BlogDetails} />
						<ProtectRoute path='/search' exact component={SearchPage} />
						<ProtectRoute path='/research-findings' exact component={ResearchFindings} />
						<ProtectRoute path='/research-Findings/123' exact component={ResearchFindingsDetail} />
						<ProtectRoute path='/testimonial' exact component={Testimonial} />
						<ProtectRoute path='/testimonials' exact component={AllTestimonial} />
						<ProtectRoute path='/uploads' exact component={Uploads} />
						<ProtectRoute path='/research-finding-details' exact component={ReasearchFindingDetails}/>
						<Route component={Error} />

					</Switch>

					<PageScrollTop />

				</BrowserRouter>

				<BackToTop />

			</>
		);
	}
}

export default Markup;