import { combineReducers } from "redux";
import CategoriesReducer from './CategoriesReducer'
import ErrorsReducer from './ErrorsReducer';
import QuestionsReducer from './QuestionsReducer';
import { projectListReducer , projectDetailsReducer,projectCreateReducer,projectReviewCreateReducer,} from "./../../reducers/projectReducers"
import bankingpartnersReducer from "./../slices/bankingpartners";
export default combineReducers({
    questions: QuestionsReducer,
    categories: CategoriesReducer,
    bankingpartners: bankingpartnersReducer,
    projectList: projectListReducer,
    projectDetails: projectDetailsReducer,
    projectReviewCreate: projectReviewCreateReducer,
    projectCreate: projectCreateReducer,
    errors: ErrorsReducer
})