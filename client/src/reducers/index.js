import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import adminReducer from './adminReducer';
import formReducer from './formReducer';

export default combineReducers({
    auth: authReducer,
    projects: projectReducer,
    admin: adminReducer,
    form: formReducer
})