import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import formReducer from './formReducer';
import testimonialReducer from './testimonialReducer';
import skillsetReducer from './skillsetReducer';

export default combineReducers({
    projects: projectReducer,
    form: formReducer,
    testimonials:testimonialReducer,
    skillsets:skillsetReducer
})