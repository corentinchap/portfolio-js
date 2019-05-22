import axios from 'axios';
import { FETCH_USER, CHECK_AUTH, RECEIVE_PROJECTS, REQUEST_PROJECTS, ADMIN_UPDATE_PREVIEW } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
}

export const fetchProjects = () => {
  return function(dispatch){
    dispatch({type: REQUEST_PROJECTS});
    axios
        .get('/api/projects')
        .then(res => dispatch({type: RECEIVE_PROJECTS, payload: res.data}))
  }
}

export const adminUpdatePreview = (project) => {
    return function(dispatch){
        dispatch({type:ADMIN_UPDATE_PREVIEW, payload: project});
    }
}


export const checkAuth = () => {
    return function (dispatch) {
        axios
        .get('/api/check_auth')
        .then(res => dispatch({ type: CHECK_AUTH, payload: res.data}));
    }
};
