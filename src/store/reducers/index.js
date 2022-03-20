import { combineReducers } from "redux";
import { BlogsReducers } from "../blog/reducers";
import { ResearchReducers } from "../research/reducers";
import { HospitalReducers } from "../hospital/reducers";
import { servicesReducers } from "../services/reducers";
import { StorysReducers } from "../story/reducers";
import { UploadsReducers } from "../uploads/reducers";
import { SurveyReducers } from "../survey/reducers";
import { AppointmentReducers } from "../appointment/reducers";
import { SelfAssessmentReducers } from "../selfAssessment/reducers";
import { linksReducers } from "../links/reducers";
import { DoctorReducers } from "../doctor/reducers";
import { ContactUsReducers } from "../contact-us/reducers";

const RootReducer = combineReducers({
 BlogsReducers,
 ResearchReducers,
 HospitalReducers,
 servicesReducers,
 StorysReducers,
 UploadsReducers,
 SurveyReducers,
 AppointmentReducers,
 SelfAssessmentReducers,
 linksReducers,
 DoctorReducers,
 ContactUsReducers
})

export default RootReducer
