import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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




class Markup extends Component {
	render() {
		return (
			<>
				<BrowserRouter basename={''}>
					<Switch>
						<ProtectRoute path='/' exact component={Index} />
						<ProtectRoute path='/apply' exact component={Apply} />
						<ProtectRoute path='/book-appointment' exact component={BookAppointment} />
						<ProtectRoute path='/our-services' exact component={OurServices} />
						<ProtectRoute path='/our-services/:title/:id' exact component={ServiceDetails} />
						<ProtectRoute path='/other-institutions-services' exact component={OtherInstitutionsServices} />
						<ProtectRoute path='/other-institutions-services/:title/:id' exact component={OtherInstitutionsServicesDetails} />
						<ProtectRoute path='/faq' exact component={Faq} />
						<ProtectRoute path='/contact-us' exact component={ContactUs} />
						<ProtectRoute path='/booking' exact component={Booking} />
						<ProtectRoute path='/blog-grid' exact component={BlogGrid} />
						<ProtectRoute path='/blog-grid/:title/:id' exact component={BlogDetails} />
						<ProtectRoute path='/search' exact component={SearchPage} />
						<ProtectRoute path='/research-findings' exact component={ResearchFindings} />
						<ProtectRoute path='/resources' exact component={Resources} />
						<ProtectRoute path='/research-finding/:title/:id' exact component={ReasearchFindingDetails} />
						<ProtectRoute path='/research-Findings/123' exact component={ResearchFindingsDetail} />
						<ProtectRoute path='/story/:title/:id' exact component={Story} />
						<ProtectRoute path='/stories' exact component={Stories} />
						<ProtectRoute path='/upload/:title/:id' exact component={Upload} />
						<ProtectRoute path='/uploads' exact component={Uploads} />
						<ProtectRoute path='/institutions-list' exact component={InstitutionsList} />
						<ProtectRoute path='/institution-profile' exact component={InstitutionProfile} />
						<ProtectRoute path='/survey/:id' exact component={SurveyPage} />
						<ProtectRoute path='/finalize' exact component={FinalizeAppointment} />
						<ProtectRoute path='/appointment-assesement' exact component={SelfAssesement} />
						<ProtectRoute path='/survey' exact component={SelfAssesement} />
						<ProtectRoute path='/donation' exact component={Donation} />
						<ProtectRoute path='/payment' exact component={Payment} />
						<ProtectRoute path='/successfull' exact component={PaymentThankyou} />
						<ProtectRoute path='/payment-status' exact component={PaymentStatus} />
						<ProtectRoute path='/terms' exact component={Terms} />
						<ProtectRoute path='/self-evaluation' exact component={SelfEvaluation} />
						<ProtectRoute path='/links' exact component={LinksComp} />
						<ProtectRoute path='/thankyou' exact component={Thankyou} />
						<ProtectRoute path='/successful' exact component={SuccessThank} />
						<ProtectRoute path='/failed' exact component={FailThank} />
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
