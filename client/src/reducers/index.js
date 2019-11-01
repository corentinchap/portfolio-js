import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import adminReducer from './adminReducer';
import formReducer from './formReducer';
import testimonialReducer from './testimonialReducer';
import skillsetReducer from './skillsetReducer';

export default combineReducers({
    auth: authReducer,
    projects: projectReducer,
    admin: adminReducer,
    form: formReducer,
    testimonials:testimonialReducer,
    skillsets:skillsetReducer
})