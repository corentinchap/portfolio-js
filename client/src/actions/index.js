import axios from 'axios';
import { FETCH_USER, CHECK_AUTH } from './types';

export const fetchUser = () => {
    return function (dispatch) {
        axios
        .get('/api/current_user')
        .then(res => dispatch({ type: FETCH_USER, payload: res}));
    }
};
export const checkAuth = () => {
    return function (dispatch) {
        axios
        .get('/api/check_auth')
        .then(res => dispatch({ type: CHECK_AUTH, payload: res}));
    }
};
