import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import CategoryReducer from './categoryReducer';
import SubCategoryReducer from './subCtegoryReducer';
import CompanyReducer from './companyReducer'
import { loadingBarReducer } from 'react-redux-loading-bar'
export default combineReducers({
   form    : formReducer,
   category: CategoryReducer,
   subcategory:SubCategoryReducer,
   loadingBar: loadingBarReducer,
   company:CompanyReducer,

//    snackbar: snackbarReducer,
});
