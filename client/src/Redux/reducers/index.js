import { combineReducers } from "redux";
import CategoriesReducer from './CategoriesReducer'
import ErrorsReducer from './ErrorsReducer';
import QuestionsReducer from './QuestionsReducer';
import { projectListReducer , projectDetailsReducer,projectCreateReducer,} from "./../../reducers/projectReducers"
import bankingpartnersReducer from "./../slices/bankingpartners";
import eventsReducer from "./../slices/events";
export default combineReducers({
    questions: QuestionsReducer,
    categories: CategoriesReducer,
    bankingpartners: bankingpartnersReducer,
    projectList: projectListReducer,
    projectDetails: projectDetailsReducer,
    projectCreate: projectCreateReducer,
    errors: ErrorsReducer,
    event: eventsReducer
})