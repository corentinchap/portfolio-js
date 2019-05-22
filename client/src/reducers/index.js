import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import adminReducer from './adminReducer';

export default combineReducers({
    auth: authReducer,
    projects: projectReducer,
    admin: adminReducer
})