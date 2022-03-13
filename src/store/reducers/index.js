import { combineReducers } from "redux";
import { BlogsReducers } from "../blog/reducers";
import { ResearchReducers } from "../research/reducers";
import { HospitalReducers } from "../hospital/reducers";
import { servicesReducers } from "../services/reducers";
import { StorysReducers } from "../story/reducers";
import { UploadsReducers } from "../uploads/reducers";
import { SurveyReducers } from "../survey/reducers";

const RootReducer = combineReducers({
 BlogsReducers,
 ResearchReducers,
 HospitalReducers,
 servicesReducers,
 StorysReducers,
 UploadsReducers,
 SurveyReducers
})

export default RootReducer
