import axios from 'axios';
import { FETCH_USER, CHECK_AUTH, FETCH_PROJECTS } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
}
export const fetchProjects = () => {
 return function (dispatch) {
        axios
        .get('/api/projects')
        .then(res => dispatch({ type: FETCH_PROJECTS, payload: res.data}));
    }
};
export const checkAuth = () => {
    return function (dispatch) {
        axios
        .get('/api/check_auth')
        .then(res => dispatch({ type: CHECK_AUTH, payload: res.data}));
    }
};
