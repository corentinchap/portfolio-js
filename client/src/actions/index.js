import { app } from './axiosConfig';
import emailjs from 'emailjs-com';
import { 
    FETCH_USER,
    CHECK_AUTH,
    REQUEST_PROJECTS,
    RECEIVE_PROJECTS,
    ADMIN_UPDATE_PREVIEW,
    MAIL_SENT,
    RECEIVE_TESTIMONIALS,
    REQUEST_TESTIMONIALS,
    REQUEST_SKILLSETS,
    RECEIVE_SKILLSETS
} from './types';



export const fetchUser = () => async dispatch => {
    const res = await app.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
}

export const fetchProjects = () => {
  return function(dispatch){
    dispatch({type: REQUEST_PROJECTS});
    app
        .get('/api/projects')
        .then(res => dispatch({type: RECEIVE_PROJECTS, payload: res.data}))
        .catch(err => console.log(err));
  }
}

export const fetchSkillsets = () => {
    return function(dispatch){
        dispatch({type: REQUEST_SKILLSETS});
        app 
            .get('/api/skillsets')
            .then(res => dispatch({type: RECEIVE_SKILLSETS, payload: res.data}))
            .catch(err => console.log(err));
    }
}

export const fetchTestimonials = () => {
    return function(dispatch){
      dispatch({type: REQUEST_TESTIMONIALS});
      app
          .get('/api/testimonials')
          .then(res => {
              dispatch({type: RECEIVE_TESTIMONIALS, payload: res.data});
          })
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
        app
        .get('/api/check_auth')
        .then(res => dispatch({ type: CHECK_AUTH, payload: res.data}))
        .catch(err => console.log(err));
    }
};
