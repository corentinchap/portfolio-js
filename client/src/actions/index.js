import axios from 'axios';
import { FETCH_USER, CHECK_AUTH, RECEIVE_PROJECTS, REQUEST_PROJECTS, ADMIN_UPDATE_PREVIEW, MAIL_SENT } from './types';
import emailjs from 'emailjs-com';


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
        .catch(err => console.log(err));
  }
}

export const adminUpdatePreview = (project) => {
    return function(dispatch){
        dispatch({type:ADMIN_UPDATE_PREVIEW, payload: project});
    }
}

export const sendContactMail = (form) => {
    return function(dispatch){
        emailjs.sendForm('gmail','template_HMQ3hbU7',form).then((res) => {
            dispatch({type: MAIL_SENT, payload:res.text})
        });
    }
}


export const checkAuth = () => {
    return function (dispatch) {
        axios
        .get('/api/check_auth')
        .then(res => dispatch({ type: CHECK_AUTH, payload: res.data}))
        .catch(err => console.log(err));
    }
};
