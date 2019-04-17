import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import adminReducer from './adminReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm, // form is the key used by redux-form
    admin: adminReducer,
    projects: projectReducer
})