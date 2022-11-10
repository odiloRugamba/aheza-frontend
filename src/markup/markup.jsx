import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// All Pages Router
import Index from './pages/index';
import Apply from './pages/apply';
import BookAppointment from './pages/book-appointment';
import OurServices from './pages/our-services';
import OtherInstitutionsServices from './pages/other-institutions-services';
import InstitutionsList from './pages/institutions-list';
import InstitutionProfile from './pages/institution-profile';
import ServiceDetails from './pages/service-details';
import OtherInstitutionsServicesDetails from './pages/OtherInstitutionsServicesDetails';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';
import Booking from './pages/booking';
import BlogGrid from './pages/blog-grid';
import BlogDetails from './pages/blog-details';
import Error from './pages/error-404';
import ProtectRoute from "./protectRoute";
import SearchPage from "./pages/search";
import ResearchFindings from "./pages/research-findings";
import Resources from "./pages/news";
import ResearchFindingsDetail from "./pages/researchFindingsDetail";
import Story from "./pages/story";
import Stories from "./pages/stories";
import Uploads from "./pages/uploads";
import Upload from "./pages/upload";
import ReasearchFindingDetails from './pages/research-finding-details'
import SurveyPage from './pages/surveyy'
import FinalizeAppointment from "./pages/payment-status";
import Thankyou from "./pages/redirectpage";
import FailThank from "./pages/failThank";
import SuccessThank from "./pages/successThank";
import SelfAssesement from "./pages/self-assesemt";
import Donation from "./pages/donation";
import Payment from "./pages/payment";
import PaymentStatus from "./pages/payment-status";
import PaymentThankyou from "./pages/paymentThankyou";
import Terms from "./elements/Terms";
import SelfEvaluation from './pages/selfEvaluation'
import LinksComp from './pages/links'
import SurveyDone from "./pages/surveyDone";
import TheatersPage from "./pages/Theaters";
import TheaterDetails from "./pages/Theater";




class Markup extends Component {
	render() {
		return (
			<>
				<BrowserRouter basename={''}>
					<Switch>
						<Route exact path='/' >
							<Redirect to='/en'/>
						</Route>
						<ProtectRoute path='/:lang' exact component={Index}/>
						<ProtectRoute path='/:lang/apply' exact component={Apply} />
						<ProtectRoute path='/:lang/book-appointment' exact component={BookAppointment} />
						<ProtectRoute path='/:lang/our-services' exact component={OurServices} />
						<ProtectRoute path='/:lang/our-services/:title/:id' exact component={ServiceDetails} />'
						<ProtectRoute path='/:lang/other-institutions-services' exact component={OtherInstitutionsServices} />
						<ProtectRoute path='/:lang/other-institutions-services/:title/:id' exact component={OtherInstitutionsServicesDetails} />
						<ProtectRoute path='/:lang/faq' exact component={Faq} />
						<ProtectRoute path='/:lang/booking' exact component={Booking} />
						<ProtectRoute path='/:lang/blog-grid' exact component={BlogGrid} />
						<ProtectRoute path='/:lang/blog-grid/:title/:id' exact component={BlogDetails} />
						<ProtectRoute path='/:lang/search' exact component={SearchPage} />
						<ProtectRoute path='/:lang/research-findings' exact component={ResearchFindings} />
						<ProtectRoute path='/:lang/resources' exact component={Resources} />
						<ProtectRoute path='/:lang/research-finding/:title/:id' exact component={ReasearchFindingDetails} />
						<ProtectRoute path='/:lang/story/:title/:id' exact component={Story} />
						<ProtectRoute path='/:lang/stories' exact component={Stories} />
						<ProtectRoute path='/:lang/upload/:title/:id' exact component={Upload} />
						<ProtectRoute path='/:lang/uploads' exact component={Uploads} />
						<ProtectRoute path='/:lang/theater/:title/:id' exact component={TheaterDetails} />
						<ProtectRoute path='/:lang/theaters' exact component={TheatersPage} />
						<ProtectRoute path='/:lang/institutions-list' exact component={InstitutionsList} />
						<ProtectRoute path='/:lang/institution-profile' exact component={InstitutionProfile} />
						<ProtectRoute path='/:lang/survey/:id' exact component={SurveyPage} />
						<ProtectRoute path='/:lang/finalize' exact component={FinalizeAppointment} />
						<ProtectRoute path='/:lang/appointment-assesement' exact component={SelfAssesement} />
						<ProtectRoute path='/:lang/survey' exact component={SelfAssesement} />
						<ProtectRoute path='/:lang/donation' exact component={Donation} />
						<ProtectRoute path='/:lang/payment' exact component={Payment} />
						<ProtectRoute path='/:lang/successfull' exact component={PaymentThankyou} />
						<ProtectRoute path='/:lang/payment-status' exact component={PaymentStatus} />
						<ProtectRoute path='/:lang/terms' exact component={Terms} />
						<ProtectRoute path='/:lang/contact-us' exact component={ContactUs} />
						<ProtectRoute path='/:lang/self-evaluation' exact component={SelfEvaluation} />
						<ProtectRoute path='/:lang/links' exact component={LinksComp} />
						<ProtectRoute path='/:lang/thankyou' exact component={Thankyou} />
						<ProtectRoute path='/:lang/successful' exact component={SuccessThank} />
						<ProtectRoute path='/:lang/failed' exact component={FailThank} />
						<ProtectRoute path='/:lang/suveryThankyou' exact component={SurveyDone} />
						<ProtectRoute path='/:lang/suveryThankyou' exact component={SurveyDone} />
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

