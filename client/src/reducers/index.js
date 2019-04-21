import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adminReducer from './adminReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    auth: authReducer,
    admin: adminReducer,
    projects: projectReducer
})